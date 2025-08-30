import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import LoginWithGoogle from "../auth/GoogleAuth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "../auth/secret/secret";

// Import phone screen images
import phoneImage1 from '../../assets/phone_screen/1.jpeg';
import phoneImage2 from '../../assets/phone_screen/2.jpeg';
import phoneImage3 from '../../assets/phone_screen/3.jpeg';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const db = getFirestore(app);

const images = [phoneImage1, phoneImage2, phoneImage3];

export default function Signup() {
  // Carousel state
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Registration state
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    state: "",
    gender: "",
    otp: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  // Navigate to verify email when OTP is received
  useEffect(() => {
    if (registerData.otp !== "") {
      navigate("/verify-email", { state: { registerData } });
    }
  }, [registerData.otp, navigate]);

  // Registration functions
  const handleRegister = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, contact, gender, state } = registerData;
    
    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword || !contact || !gender) {
      setError("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      console.log("Starting registration process for:", email);

      // Check if email exists using Firestore first, then fallback to API
      let emailExists = false;
      try {
        emailExists = await checkEmailExistsFirestore(email);
        console.log("Firestore email check result:", emailExists);
      } catch (firestoreError) {
        console.warn("Firestore email check failed, falling back to API:", firestoreError);
        try {
          emailExists = await checkEmailExists(email);
          console.log("API email check result:", emailExists);
        } catch (apiError) {
          console.warn("Both email check methods failed, proceeding with registration");
        }
      }

      if (emailExists) {
        setError("Email is already registered. Please login or use a different email.");
        return;
      }

      // Try to save user data to Firestore
      try {
        await saveUserToFirestore({
          firstName,
          lastName,
          email,
          contact,
          state: state || "",
          gender,
          password, // We'll pass this to verification for backend registration
          createdAt: new Date().toISOString(),
          emailVerified: false
        });
        console.log("Successfully saved to Firestore");
      } catch (firestoreError) {
        console.error("Failed to save to Firestore:", firestoreError);
        // Continue with registration even if Firestore fails
        console.log("Continuing with registration despite Firestore error");
      }

      // Send OTP
      const otpResponse = await sendOtp(email);

      if (otpResponse.success) {
        // Include user data in registerData for verification
        setRegisterData({ 
          ...registerData, 
          otp: otpResponse.otp,
          userData: {
            firstName,
            lastName,
            email,
            contact,
            state,
            gender
          }
        });
      } else {
        setError(otpResponse.message || "Error generating OTP");
      }
    } catch (error) {
      setError("Registration failed. Please try again later.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Firestore functions
  const checkEmailExistsFirestore = async (email) => {
    try {
      console.log("Checking if email exists in Firestore:", email);
      const userDoc = doc(db, "users", email);
      const userSnapshot = await getDoc(userDoc);
      const exists = userSnapshot.exists();
      console.log("Email exists result:", exists);
      return exists;
    } catch (error) {
      console.error("Error checking email in Firestore:", {
        code: error.code,
        message: error.message,
        stack: error.stack
      });
      // Fall back to false if there's an error checking
      return false;
    }
  };

  const saveUserToFirestore = async (userData) => {
    try {
      const { email, password, ...personalDetails } = userData;
      
      console.log("Attempting to save user to Firestore:", { email, personalDetails });
      
      // Create document structure: users/email/personal_details
      const userDocRef = doc(db, "users", email);
      const personalDetailsRef = doc(db, "users", email, "personal_details", "info");

      console.log("Firestore references created successfully");

      // Save basic user info
      const userDocData = {
        email: email,
        createdAt: personalDetails.createdAt,
        emailVerified: personalDetails.emailVerified,
        lastUpdated: new Date().toISOString()
      };

      console.log("Saving user document:", userDocData);
      await setDoc(userDocRef, userDocData);
      console.log("User document saved successfully");

      // Save personal details in subcollection
      const personalDetailsData = {
        firstName: personalDetails.firstName,
        lastName: personalDetails.lastName,
        contact: personalDetails.contact,
        state: personalDetails.state,
        gender: personalDetails.gender,
        createdAt: personalDetails.createdAt,
        updatedAt: new Date().toISOString()
      };

      console.log("Saving personal details:", personalDetailsData);
      await setDoc(personalDetailsRef, personalDetailsData);
      console.log("Personal details saved successfully");

      console.log("User data saved to Firestore successfully");
    } catch (error) {
      console.error("Detailed Firestore error:", {
        code: error.code,
        message: error.message,
        stack: error.stack
      });
      throw new Error(`Failed to save user data: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Backend API functions (keeping as backup)
  const checkEmailExists = async (email) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/onboard/check-registration`,
        { email }
      );
      return response.data.exists;
    } catch (error) {
      console.error("Error checking email via API:", error);
      return false;
    }
  };

  const sendOtp = async (email) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/onboard/send-otp`,
        { email }
      );
      return response.data;
    } catch (error) {
      console.error("Error sending OTP:", error);
      return { success: false, message: "Failed to send OTP" };
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex h-screen w-full font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] bg-[#fdf6f9]"
         style={{
           animation: 'fadeIn 0.6s ease-out both'
         }}>
      {/* LEFT PANEL: Carousel */}
      <div className="flex-1 relative bg-[#fdf6f9] overflow-hidden flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <button className="absolute left-[-180px] top-1/2 -translate-y-1/2 z-20 bg-white border-none text-2xl cursor-pointer p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors duration-300 flex items-center justify-center text-[#333] select-none hover:bg-gray-100 md:left-[-180px]" 
                  onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="relative w-[300px] h-[520px] flex items-center justify-center md:w-[260px] md:h-[460px]">{images.map((img, index) => {
              let position = "nextSlide";
              if (index === current) {
                position = "activeSlide";
              } else if (
                index === current - 1 ||
                (current === 0 && index === images.length - 1)
              ) {
                position = "lastSlide";
              }

              let positionClasses = "absolute w-[260px] h-[480px] object-cover rounded-[40px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-600 z-[1] opacity-0 scale-80";
              
              if (position === "activeSlide") {
                positionClasses = "absolute w-[260px] h-[380px] object-cover rounded-[40px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-600 opacity-100 translate-x-0 scale-100 z-[1]";
              } else if (position === "lastSlide") {
                positionClasses = "absolute w-[260px] h-[480px] object-cover rounded-[40px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-600 opacity-60 -translate-x-[180px] scale-[0.85] z-0";
              } else if (position === "nextSlide") {
                positionClasses = "absolute w-[260px] h-[480px] object-cover rounded-[40px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-600 opacity-60 translate-x-[180px] scale-[0.85] z-0";
              }

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={positionClasses}
                />
              );
            })}

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[523px] border-[5px] border-black rounded-[60px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.3)] z-10 pointer-events-none before:content-[''] before:absolute before:top-[5px] before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[28px] before:bg-black before:rounded-[20px/50%] before:z-30 after:content-[''] after:absolute after:top-[8px] after:left-[150px] after:w-[12px] after:h-[12px] after:bg-[#111] after:rounded-full after:shadow-[0_0_4px_rgba(0,0,0,0.9)] md:w-[260px] md:h-[460px]">
              <div className="absolute top-[100px] left-[-7px] w-[5px] h-[60px] bg-gradient-to-r from-[#444] to-[#222] rounded-[20px] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.7)]"></div>
              <div className="absolute top-[80px] left-[-7px] w-[5px] h-[18px] bg-gradient-to-r from-[#444] to-[#222] rounded-[20px] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.7)]"></div>
              <div className="absolute top-[130px] right-[-7px] w-[5px] h-[90px] bg-gradient-to-r from-[#444] to-[#222] rounded-[20px] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.7)]"></div>
              <div className="w-full h-full overflow-hidden rounded-[52px] relative">
                <div className="w-full h-full">
                  <img
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="w-full h-full object-cover rounded-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="absolute right-[-180px] top-1/2 -translate-y-1/2 z-20 bg-white border-none text-2xl cursor-pointer p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors duration-300 flex items-center justify-center text-[#333] select-none hover:bg-gray-100 md:right-[-180px]" 
                  onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* RIGHT PANEL: Signup Form */}
      <div className="flex-1 bg-[#fdf6f9] text-[#222] px-8 py-16 flex flex-col justify-center items-center mt-[70px] md:px-6 md:py-8">
        <div className="bg-white px-8 py-10 rounded-xl max-w-[450px] shadow-[0_18px_40px_rgba(251,109,160,0.15)] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] md:px-6 md:py-2 md:max-w-[90%] md:shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="w-[50px] h-[50px] bg-[#e4eaf1] rounded-full flex justify-center items-center mb-4 text-2xl text-[#fb6da0] mx-auto md:w-[50px] md:h-[50px] md:text-xl">🌸</div>
          <h2 className="text-3xl font-semibold mb-8 text-[#1e2a38] text-center md:text-2xl">Create Account</h2>

          {/* Google Auth Component */}
          <LoginWithGoogle />

          <form onSubmit={handleRegister}>
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4 mb-6">
              {/* First Row: First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="floating-label relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder=" "
                    value={registerData.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                  />
                  <label htmlFor="firstName" style={{ margin: "-.5rem" }}>
                    First Name
                  </label>
                </div>
                <div className="floating-label relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder=" "
                    value={registerData.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                  />
                  <label htmlFor="lastName" style={{ margin: "-.5rem" }}>
                    Last Name
                  </label>
                </div>
              </div>

              {/* Second Row: Email (full width) */}
              <div className="floating-label relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  value={registerData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                <label htmlFor="email" style={{ margin: "-.5rem" }}>
                  Email address
                </label>
              </div>

              {/* Third Row: Password & Confirm Password */}
              <div className="grid grid-cols-2 gap-4">
                <div className="floating-label relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder=" "
                    value={registerData.password}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                  />
                  <label htmlFor="password" style={{ margin: "-.5rem" }}>
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
                <div className="floating-label relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder=" "
                    value={registerData.confirmPassword}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                  />
                  <label htmlFor="confirmPassword" style={{ margin: "-.5rem" }}>
                    Confirm Password
                  </label>
                  <button
                    type="button"
                    onClick={toggleShowConfirmPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* Fourth Row: Contact & State */}
              <div className="grid grid-cols-2 gap-4">
                <div className="floating-label relative">
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    placeholder=" "
                    value={registerData.contact}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    pattern="[0-9\s+-]{7,15}"
                    title="Please enter a valid phone number"
                  />
                  <label htmlFor="contact" style={{ margin: "-.5rem" }}>
                    Contact Number
                  </label>
                </div>
                <div className="floating-label relative">
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder=" "
                    value={registerData.state}
                    onChange={handleChange}
                    autoComplete="address-level1"
                  />
                  <label htmlFor="state" style={{ margin: "-.5rem" }}>
                    State (optional)
                  </label>
                </div>
              </div>

              {/* Fifth Row: Gender */}
              <fieldset className="border-none p-0" aria-label="Gender">
                <legend className="font-semibold text-[#555] mb-3">Gender *</legend>
                <div className="flex gap-6">
                  <label className="cursor-pointer font-semibold text-[#444] inline-flex items-center">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="male" 
                      checked={registerData.gender === "male"}
                      onChange={handleChange}
                      required 
                      className="mr-2 w-[18px] h-[18px] cursor-pointer" 
                    />
                    Male
                  </label>
                  <label className="cursor-pointer font-semibold text-[#444] inline-flex items-center">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="female" 
                      checked={registerData.gender === "female"}
                      onChange={handleChange}
                      className="mr-2 w-[18px] h-[18px] cursor-pointer" 
                    />
                    Female
                  </label>
                  <label className="cursor-pointer font-semibold text-[#444] inline-flex items-center">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="other" 
                      checked={registerData.gender === "other"}
                      onChange={handleChange}
                      className="mr-2 w-[18px] h-[18px] cursor-pointer" 
                    />
                    Other
                  </label>
                </div>
              </fieldset>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 border-none rounded-[10px] text-white font-bold text-lg cursor-pointer transition-all duration-300 select-none md:text-base md:py-3 ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-br from-[#f21b6a] to-[#fb6da0] hover:bg-gradient-to-br hover:from-[#e60b5e] hover:to-[#f94e8b]'
              }`}
              aria-label="Sign Up Button"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className="text-center mt-6 font-semibold">
            <Link to="/login" className="text-[#ff3b3b] no-underline transition-colors duration-[250ms] hover:text-[#d12e2e]">Already have an account? Log In</Link>
          </div>
        </div>
      </div>
      
      {/* Floating Label Styles */}
      <style>{`
        .floating-label input {
          width: 100%;
          padding: 16px 12px 8px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 16px;
          background: white;
          outline: none;
          transition: border-color 0.3s ease;
        }
        
        .floating-label input:focus {
          border-color: #fb6da0;
        }
        
        .floating-label label {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          font-size: 16px;
          pointer-events: none;
          transition: all 0.3s ease;
          background: white;
          padding: 0 4px;
        }
        
        .floating-label input:focus + label,
        .floating-label input:not(:placeholder-shown) + label {
          top: 0;
          transform: translateY(-50%);
          font-size: 12px;
          color: #fb6da0;
          font-weight: 600;
        }
        
        .floating-label input:focus + label {
          color: #fb6da0;
        }
      `}</style>
    </div>
  );
}
