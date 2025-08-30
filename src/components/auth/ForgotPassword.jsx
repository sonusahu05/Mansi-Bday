import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { getAuth, sendPasswordResetEmail, fetchSignInMethodsForEmail } from "firebase/auth";

// Import phone screen images
import phoneImage1 from '../../assets/phone_screen/1.jpeg';
import phoneImage2 from '../../assets/phone_screen/2.jpeg';
import phoneImage3 from '../../assets/phone_screen/3.jpeg';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const images = [phoneImage1, phoneImage2, phoneImage3];

export default function ForgotPassword() {
  // Carousel state
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Forgot password state
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [step, setStep] = useState(1);
  const [response_otp, setResponse_otp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const auth = getAuth();
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

  // Clear errors when step changes
  useEffect(() => {
    setError(null);
    setSuccessMessage("");
  }, [step]);

  // Email verification check function
  const handleCheckEmailVerificationStatus = async (emailToCheck) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/onboard/check-email-verification-status`,
        { email: emailToCheck }
      );
      if (response.data.verified) {
        return true;
      } else {
        setError("Email is not verified. Please verify your email first.");
        return false;
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        setError(error.response.data.detail);
      } else {
        setError("Error checking email verification status. Please try again later.");
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Send verification code function
  const handleSendVerificationCode = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Check email verification status before sending OTP
    const isVerified = await handleCheckEmailVerificationStatus(email);
    if (!isVerified) return;
    
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/onboard/send-otp-forgot-password`,
        { email }
      );

      if (response.data.success) {
        setResponse_otp(response.data.otp);
        setStep(2);
      } else {
        setError(response.data.message || "Error sending verification code");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        setError(error.response.data.detail);
      } else {
        setError("Error sending verification code. Please check your email and try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Verify code and reset password function
  const handleVerifyCodeAndResetPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      
      if (verificationCode === response_otp) {
        console.log("OTP verified successfully, sending Firebase password reset email to:", email);
        
        // First, check if user exists in Firebase Auth
        try {
          const signInMethods = await fetchSignInMethodsForEmail(auth, email);
          console.log("Firebase Auth sign-in methods for", email, ":", signInMethods);
          
          if (signInMethods.length === 0) {
            console.log("❌ User does NOT exist in Firebase Authentication");
            setError("This email is registered in our system but not in Firebase Authentication. Please contact support or try signing up again with Firebase.");
            return;
          } else {
            console.log("✅ User EXISTS in Firebase Authentication with methods:", signInMethods);
          }
        } catch (authCheckError) {
          console.error("Error checking if user exists in Firebase Auth:", authCheckError);
          // Continue anyway, let sendPasswordResetEmail handle it
        }
        
        try {
          // Send Firebase password reset email
          console.log("🔄 Attempting to send Firebase password reset email...");
          await sendPasswordResetEmail(auth, email);
          console.log("✅ Firebase says password reset email sent successfully to:", email);
          console.log("📧 Please check your email inbox AND spam/junk folder");
          console.log("⏰ Email may take a few minutes to arrive");
          
          setSuccessMessage("Password reset email sent! ⚠️ IMPORTANT: Check your SPAM/JUNK folder first - Firebase emails often land there. The email may take a few minutes to arrive.");
          
          // Navigate back after a delay
          setTimeout(() => {
            navigate("/login");
          }, 8000); // Increased delay to give user time to check email
        } catch (firebaseError) {
          console.error("Firebase sendPasswordResetEmail Error:", firebaseError);
          console.error("Firebase Error Code:", firebaseError.code);
          console.error("Firebase Error Message:", firebaseError.message);
          
          // Handle specific Firebase errors
          if (firebaseError.code === 'auth/user-not-found') {
            console.log("User not found in Firebase Auth, trying backend password reset...");
            
            // Fallback to backend password reset
            try {
              const backendResponse = await axios.post(
                `${API_BASE_URL}/onboard/reset-password-with-otp`,
                { email, otp: verificationCode }
              );
              
              if (backendResponse.data.success) {
                setSuccessMessage("Password reset successful! You can now log in with your new password. Check your email for details.");
                setTimeout(() => {
                  navigate("/login");
                }, 5000);
              } else {
                setError(backendResponse.data.message || "Backend password reset failed.");
              }
            } catch (backendError) {
              console.error("Backend password reset error:", backendError);
              setError("This email is not registered with Firebase Authentication. Please contact support or try signing up again.");
            }
          } else if (firebaseError.code === 'auth/invalid-email') {
            setError("Invalid email format. Please check your email address.");
          } else if (firebaseError.code === 'auth/too-many-requests') {
            setError("Too many password reset attempts. Please wait before trying again.");
          } else {
            setError(`Error sending password reset email: ${firebaseError.message}`);
          }
        }
      } else {
        setError("Invalid verification code. Please try again.");
      }
    } catch (error) {
      console.error("General Error:", error);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle back navigation
  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setVerificationCode("");
      setError(null);
    } else {
      navigate("/login");
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

      {/* RIGHT PANEL: Forgot Password Form */}
      <div className="flex-1 bg-[#fdf6f9] text-[#222] px-8 py-16 flex flex-col justify-center items-center mt-[70px] md:px-6 md:py-8">
        <div className="w-full max-w-[400px] px-8 py-10 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:px-6 md:py-8 md:max-w-[70%]">
          <div className="bg-[#e8ecf3] rounded-full w-20 h-20 flex items-center justify-center text-3xl text-[#4b5c6b] mx-auto mb-6 shadow-[0_0_12px_rgba(0,0,0,0.06)] md:w-15 md:h-15 md:text-2xl md:mb-4"
               style={{ backgroundColor: '#e4eaf1', color: '#fb6da0' }}>
            {step === 1 ? '🔒' : '📧'}
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-[#1e2a38] text-center md:text-2xl">
            {step === 1 ? 'Forgot Password?' : 'Verify Email'}
          </h2>
          <p className="text-center text-[#627d98] mb-7 text-sm">
            {step === 1 
              ? 'Enter your email address to receive a verification code.'
              : `We sent a verification code to ${email}. Please enter the code below.`
            }
          </p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mb-4 text-sm">
              {successMessage}
            </div>
          )}

          {/* Step 1: Email Input */}
          {step === 1 && (
            <form onSubmit={handleSendVerificationCode}>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="text-[0.95rem] font-medium text-[#555] mb-2">Email address</label>
                <input
                  className={`bg-[#f9f9f9] border rounded-lg py-3 px-4 text-[#333] text-[0.95rem] transition-colors duration-200 focus:outline-none focus:shadow-[0_0_0_3px_rgba(251,109,160,0.2)] placeholder-[#999] ${
                    error ? 'border-red-400 focus:border-red-400' : 'border-[#dcdce1] focus:border-[#fb6da0]'
                  }`}
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 border-none rounded-lg font-bold text-lg transition-all duration-300 mb-4 ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-gradient-to-br from-[#f21b6a] to-[#fb6da0] text-white cursor-pointer hover:bg-gradient-to-br hover:from-[#e60b5e] hover:to-[#f94e8b]'
                } md:text-base md:py-3`}
              >
                {loading ? 'Sending...' : 'Send Verification Code'}
              </button>
            </form>
          )}

          {/* Step 2: OTP Verification */}
          {step === 2 && (
            <form onSubmit={handleVerifyCodeAndResetPassword}>
              <div className="flex flex-col mb-6">
                <label htmlFor="verificationCode" className="text-[0.95rem] font-medium text-[#555] mb-2">Verification Code</label>
                <input
                  className="bg-[#f9f9f9] border border-[#dcdce1] rounded-lg py-3 px-4 text-[#333] text-[0.95rem] transition-colors duration-200 focus:border-[#fb6da0] focus:outline-none focus:shadow-[0_0_0_3px_rgba(251,109,160,0.2)] placeholder-[#999] text-center font-mono text-xl tracking-widest"
                  type="text"
                  id="verificationCode"
                  placeholder="Enter OTP"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  maxLength="6"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 border-none rounded-lg font-bold text-lg transition-all duration-300 mb-4 ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-gradient-to-br from-[#f21b6a] to-[#fb6da0] text-white cursor-pointer hover:bg-gradient-to-br hover:from-[#e60b5e] hover:to-[#f94e8b]'
                } md:text-base md:py-3`}
              >
                {loading ? 'Verifying...' : 'Verify & Reset Password'}
              </button>
            </form>
          )}

          <div className="text-center mt-6 space-y-2">
            <button 
              onClick={handleBack}
              className="text-[#f15b84] font-medium no-underline hover:underline block mx-auto"
            >
              ← {step === 1 ? 'Back to Login' : 'Back to Email'}
            </button>
            <div className="flex items-center justify-center space-x-2">
              <Link to="/login" className="text-[#f15b84] font-medium no-underline hover:underline">Login</Link>
              <span className="text-[#ccc]">|</span>
              <Link to="/signup" className="text-[#f15b84] font-medium no-underline hover:underline">Create Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
