import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { app } from "../auth/secret/secret";

// Import phone screen images
import phoneImage1 from '../../assets/phone_screen/1.jpeg';
import phoneImage2 from '../../assets/phone_screen/2.jpeg';
import phoneImage3 from '../../assets/phone_screen/3.jpeg';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const db = getFirestore(app);

const images = [phoneImage1, phoneImage2, phoneImage3];

export default function VerifyEmail() {
  // Carousel state
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Verification state
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentOtp, setCurrentOtp] = useState(""); // Store the current valid OTP

  const navigate = useNavigate();
  const location = useLocation();

  // Access registerData from the state
  const { registerData } = location.state || {};
  const userEmail = registerData?.email || "";
  const userPassword = registerData?.password || "";
  const userCodersKey = registerData?.coders_key || "";

  // Initialize currentOtp with the original OTP
  useEffect(() => {
    if (registerData?.otp) {
      setCurrentOtp(String(registerData.otp));
    }
  }, [registerData?.otp]);

  // Redirect to signup if no registration data found
  useEffect(() => {
    if (!registerData || !userEmail) {
      navigate("/signup");
    }
  }, [registerData, userEmail, navigate]);

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

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Reset errors
      setOtpError("");
      setVerificationError("");

      // Validate OTP
      if (!otp) {
        setOtpError("Please enter the OTP");
        return;
      }

      if (otp === currentOtp) {
        // Update Firestore to mark email as verified
        await updateEmailVerificationStatus(userEmail, true);

        if (!userPassword) {
          setLoading(false);
          navigate("/new_user", { state: { verified: true, email: registerData.email } });
        } else {
          // Optional: Still call backend registration if needed
          const registrationResponse = await registerEmail(
            userEmail,
            userPassword,
            userCodersKey
          );

          if (registrationResponse.success) {
            alert("Registration successful! Your account has been created and verified.");
            setLoading(false);
            navigate("/login");
          } else {
            // Even if backend registration fails, Firestore data is already saved
            alert("Account created in database. You can now login.");
            setLoading(false);
            navigate("/login");
          }
        }
      } else {
        setOtpError("Incorrect OTP. Try again");
        setLoading(false);
        return;
      }
      setLoading(false);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setVerificationError("Error verifying OTP. Please try again.");
      setLoading(false);
    }
  };

  // Update email verification status in Firestore
  const updateEmailVerificationStatus = async (email, verified) => {
    try {
      const userDocRef = doc(db, "users", email);
      await updateDoc(userDocRef, {
        emailVerified: verified,
        verifiedAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString()
      });
      console.log("Email verification status updated in Firestore");
    } catch (error) {
      console.error("Error updating verification status:", error);
      throw new Error("Failed to update verification status");
    }
  };

  const registerEmail = async (email, password, codersKey) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/onboard/register`,
        { email, password, coders_key: codersKey }
      );
      return response.data;
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Registration failed" };
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleResendOtp = async () => {
    try {
      setLoading(true);
      setVerificationError(""); // Clear any previous errors
      
      const response = await axios.post(
        `${API_BASE_URL}/onboard/send-otp`,
        { email: userEmail }
      );
      
      if (response.data.success) {
        // Update the currentOtp with the new OTP from the response
        if (response.data.otp) {
          setCurrentOtp(String(response.data.otp));
        }
        alert("New OTP sent to your email");
        // Clear the input field so user enters the new OTP
        setOtp("");
        setOtpError(""); // Clear any previous OTP errors
      } else {
        setVerificationError("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      setVerificationError("Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] bg-[#fdf6f9] animate-[fadeIn_0.6s_ease-out]"
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

              let positionClasses = "absolute w-[260px] h-[480px] object-cover rounded-[40px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-500 z-[1] opacity-0 scale-80";
              
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

      {/* RIGHT PANEL: Verify Email Content */}
      <div className="flex-1 bg-[#fdf6f9] text-[#222] px-8 py-16 flex flex-col justify-center items-center mt-[70px] md:px-6 md:py-8">
        <div className="w-full max-w-[400px] px-8 py-10 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:px-6 md:py-8 md:max-w-[90%]">
          <div className="bg-[#e8ecf3] rounded-full w-20 h-20 flex items-center justify-center text-3xl text-[#4b5c6b] mx-auto mb-6 shadow-[0_0_12px_rgba(0,0,0,0.06)] md:w-[50px] md:h-[50px] md:text-2xl md:mb-4" 
               style={{ backgroundColor: '#e4eaf1', color: '#fb6da0' }}>
            📧
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-[#1e2a38] text-center md:text-2xl">Verify Your Email</h2>
          <p className="text-[#627d98] text-center mb-6 text-sm">
            We have sent a verification code to <strong>{userEmail}</strong>. Please enter the code below to verify your account.
          </p>

          <form onSubmit={handleVerify}>
            {/* Error Messages */}
            {(otpError || verificationError) && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
                {otpError || verificationError}
              </div>
            )}

            {/* OTP Input */}
            <div className="floating-label relative mb-6">
              <input
                type="text"
                id="otp"
                name="otp"
                placeholder=" "
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength="6"
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-center text-2xl font-mono tracking-widest focus:border-[#fb6da0] focus:outline-none transition-colors duration-300"
              />
              <label htmlFor="otp" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none bg-white px-2">
                Enter OTP Code
              </label>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 border-none rounded-lg font-bold text-lg transition-all duration-300 mb-4 ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed text-white' 
                  : 'bg-gradient-to-br from-[#f21b6a] to-[#fb6da0] text-white cursor-pointer hover:bg-gradient-to-br hover:from-[#e60b5e] hover:to-[#f94e8b]'
              } md:text-base md:py-3`}
              aria-label="Verify OTP Button"
            >
              {loading ? 'Verifying...' : 'Verify Email'}
            </button>

            <button 
              type="button" 
              onClick={handleResendOtp}
              disabled={loading}
              className={`w-full py-3 border-2 border-[#fb6da0] rounded-lg font-semibold text-lg transition-all duration-300 ${
                loading 
                  ? 'text-gray-400 border-gray-400 cursor-not-allowed' 
                  : 'text-[#fb6da0] hover:bg-[#fb6da0] hover:text-white'
              } md:text-base md:py-2`}
            >
              {loading ? 'Sending...' : 'Resend OTP'}
            </button>
          </form>

          <div className="text-center mt-6 space-y-2">
            <button 
              onClick={handleBack}
              className="text-[#f15b84] font-medium no-underline hover:underline block mx-auto"
            >
              ← Back to Registration
            </button>
            <Link to="/login" className="text-[#f15b84] font-medium no-underline hover:underline block">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Label Styles */}
      <style>{`
        .floating-label input:focus + label,
        .floating-label input:not(:placeholder-shown) + label {
          top: -8px;
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
