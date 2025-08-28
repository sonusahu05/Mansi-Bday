import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Auth.css";

export default function Signup() {
  const carouselImages = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="auth-split-container fade-in">
      <div className="auth-left-panel">
        <Slider {...sliderSettings} className="auth-carousel">
          {carouselImages.map((src, index) => (
            <div key={index} className="carousel-slide">
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>

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
