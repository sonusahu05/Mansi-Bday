import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import phone screen images
import phoneImage1 from '../../assets/phone_screen/1.jpeg';
import phoneImage2 from '../../assets/phone_screen/2.jpeg';
import phoneImage3 from '../../assets/phone_screen/3.jpeg';

const images = [phoneImage1, phoneImage2, phoneImage3];

export default function ForgotPassword() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

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
          <div className="bg-[#e8ecf3] rounded-full w-20 h-20 flex items-center justify-center text-3xl text-[#4b5c6b] mx-auto mb-6 shadow-[0_0_12px_rgba(0,0,0,0.06)] md:w-15 md:h-15 md:text-2xl md:mb-4">🌸</div>
          <h2 className="text-3xl font-semibold mb-8 text-[#1e2a38] text-center md:text-2xl">Forgot Password?</h2>
          <p className="text-center text-[#627d98] mb-7">
            Enter your email address to receive a password reset link.
          </p>

          <form>
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="text-[0.95rem] font-medium text-[#555] mb-2">Email address</label>
              <input
                className="bg-[#f9f9f9] border border-[#dcdce1] rounded-lg py-3 px-4 text-[#333] text-[0.95rem] transition-colors duration-200 focus:border-[#fb6da0] focus:outline-none focus:shadow-[0_0_0_3px_rgba(251,109,160,0.2)] placeholder-[#999]"
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <button type="submit" className="bg-gradient-to-br from-[#f21b6a] to-[#fb6da0] border-none text-white font-bold py-4 rounded-lg cursor-pointer w-full text-lg transition-colors duration-300 hover:bg-gradient-to-br hover:from-[#e60b5e] hover:to-[#f94e8b] md:text-base md:py-3">
              Send Reset Link
            </button>
          </form>

          <div className="text-center mt-6">
            <Link to="/login" className="text-[#f15b84] font-medium no-underline hover:underline">Back to Login</Link>
            <span className="mx-2 text-[#ccc]">|</span>
            <Link to="/signup" className="text-[#f15b84] font-medium no-underline hover:underline">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
