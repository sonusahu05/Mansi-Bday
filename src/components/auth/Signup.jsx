import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Auth.css";

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
    <div className="auth-split-container fade-in">
      {/* LEFT PANEL: Carousel */}
      <div className="auth-left-panel">
        <div className="carousel-container">
          <button className="nav-btn left" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="carousel">
            {images.map((img, index) => {
              let position = "nextSlide";
              if (index === current) {
                position = "activeSlide";
              } else if (
                index === current - 1 ||
                (current === 0 && index === images.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`slide ${position}`}
                />
              );
            })}

            <div className="phone-frame">
              <div className="side-mute-switch"></div>
              <div className="side-button-left"></div>
              <div className="side-button-right"></div>
              <div className="phone-frame-capsule">
                <div className="phone-inner">
                  <img
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="carousel-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="nav-btn right" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* RIGHT PANEL: Signup Form */}
      <div className="auth-right-panel">
        <div className="signup-form-wrapper">
          <div className="auth-logo-circle">🌸</div>
          <h2>Create Account</h2>

          <form>
            <div className="signup-form-grid">
              {/* First Name */}
              <div className="floating-label signup-floating-label">
                <input
                  type="text"
                  id="firstName"
                  className="signup-input"
                  placeholder=" "
                  required
                  autoComplete="given-name"
                />
                <label htmlFor="firstName" style={{ margin: "-.5rem" }}>
                  First Name
                </label>
              </div>

              {/* Last Name */}
              <div className="floating-label signup-floating-label">
                <input
                  type="text"
                  id="lastName"
                  className="signup-input"
                  placeholder=" "
                  required
                  autoComplete="family-name"
                />
                <label htmlFor="lastName" style={{ margin: "-.5rem" }}>
                  Last Name
                </label>
              </div>

              {/* Email */}
              <div className="floating-label signup-floating-label full-width">
                <input
                  type="email"
                  id="email"
                  className="signup-input"
                  placeholder=" "
                  required
                  autoComplete="email"
                />
                <label htmlFor="email" style={{ margin: "-.5rem" }}>
                  Email address
                </label>
              </div>

              {/* Password */}
              <div className="floating-label signup-floating-label">
                <input
                  type="password"
                  id="password"
                  className="signup-input"
                  placeholder=" "
                  required
                  autoComplete="new-password"
                />
                <label htmlFor="password" style={{ margin: "-.5rem" }}>
                  Password
                </label>
              </div>

              {/* Confirm Password */}
              <div className="floating-label signup-floating-label">
                <input
                  type="password"
                  id="confirmPassword"
                  className="signup-input"
                  placeholder=" "
                  required
                  autoComplete="new-password"
                />
                <label htmlFor="confirmPassword" style={{ margin: "-.5rem" }}>
                  Confirm Password
                </label>
              </div>

              {/* Contact */}
              <div className="floating-label signup-floating-label">
                <input
                  type="tel"
                  id="contact"
                  className="signup-input"
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

              {/* State */}
              <div className="floating-label signup-floating-label">
                <input
                  type="text"
                  id="state"
                  className="signup-input"
                  placeholder=" "
                  autoComplete="address-level1"
                />
                <label htmlFor="state" style={{ margin: "-.5rem" }}>
                  State (optional)
                </label>
              </div>

              {/* Gender */}
              <fieldset className="gender-group signup-gender-group full-width" aria-label="Gender">
                <legend>Gender</legend>
                <label>
                  <input type="radio" name="gender" value="male" required />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
                <label>
                  <input type="radio" name="gender" value="other" />
                  Other
                </label>
              </fieldset>
            </div>

            <button type="submit" className="signup-submit-btn" aria-label="Sign Up Button">
              Sign Up
            </button>
          </form>

          <div className="auth-links" style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <Link to="/login">Already have an account? Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
