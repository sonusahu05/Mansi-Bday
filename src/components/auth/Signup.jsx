import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"]; // Adjust paths as needed

export default function Signup() {
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
    <div className="flex h-screen w-full font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] bg-[#fdf6f9]"
         style={{
           animation: 'fadeIn 0.6s ease-out both'
         }}>
      {/* LEFT PANEL: Carousel */}
      <div className="flex-1 relative bg-[#fdf6f9] overflow-hidden flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <button className="absolute left-[-180px] top-1/2 -translate-y-1/2 z-20 bg-white border-none text-2xl cursor-pointer p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors duration-300 flex items-center justify-center text-[#333] select-none hover:bg-gray-100 md:left-[-40px]" 
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

          <button className="absolute right-[-180px] top-1/2 -translate-y-1/2 z-20 bg-white border-none text-2xl cursor-pointer p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors duration-300 flex items-center justify-center text-[#333] select-none hover:bg-gray-100 md:right-[-40px]" 
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

          <form>
            <div className="space-y-4 mb-6">
              {/* First Row: First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="floating-label relative">
                  <input
                    type="text"
                    id="firstName"
                    placeholder=" "
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
                    placeholder=" "
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
                  placeholder=" "
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
                    type="password"
                    id="password"
                    placeholder=" "
                    required
                    autoComplete="new-password"
                  />
                  <label htmlFor="password" style={{ margin: "-.5rem" }}>
                    Password
                  </label>
                </div>
                <div className="floating-label relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder=" "
                    required
                    autoComplete="new-password"
                  />
                  <label htmlFor="confirmPassword" style={{ margin: "-.5rem" }}>
                    Confirm Password
                  </label>
                </div>
              </div>

              {/* Fourth Row: Contact & State */}
              <div className="grid grid-cols-2 gap-4">
                <div className="floating-label relative">
                  <input
                    type="tel"
                    id="contact"
                    placeholder=" "
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
                    placeholder=" "
                    autoComplete="address-level1"
                  />
                  <label htmlFor="state" style={{ margin: "-.5rem" }}>
                    State (optional)
                  </label>
                </div>
              </div>

              {/* Fifth Row: Gender */}
              <fieldset className="border-none p-0" aria-label="Gender">
                <legend className="font-semibold text-[#555] mb-3">Gender</legend>
                <div className="flex gap-6">
                  <label className="cursor-pointer font-semibold text-[#444] inline-flex items-center">
                    <input type="radio" name="gender" value="male" required className="mr-2 w-[18px] h-[18px] cursor-pointer" />
                    Male
                  </label>
                  <label className="cursor-pointer font-semibold text-[#444] inline-flex items-center">
                    <input type="radio" name="gender" value="female" className="mr-2 w-[18px] h-[18px] cursor-pointer" />
                    Female
                  </label>
                  <label className="cursor-pointer font-semibold text-[#444] inline-flex items-center">
                    <input type="radio" name="gender" value="other" className="mr-2 w-[18px] h-[18px] cursor-pointer" />
                    Other
                  </label>
                </div>
              </fieldset>
            </div>

            <button type="submit" 
                    className="w-full py-4 border-none rounded-[10px] bg-gradient-to-br from-[#f21b6a] to-[#fb6da0] text-white font-bold text-lg cursor-pointer transition-colors duration-300 select-none hover:bg-gradient-to-br hover:from-[#e60b5e] hover:to-[#f94e8b] md:text-base md:py-3" 
                    aria-label="Sign Up Button">
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6 font-semibold">
            <Link to="/login" className="text-[#ff3b3b] no-underline transition-colors duration-[250ms] hover:text-[#d12e2e]">Already have an account? Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
