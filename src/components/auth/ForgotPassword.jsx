import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Auth.css";

export default function ForgotPassword() {
  const carouselImages = ["/1.jpeg", "/2.jpeg", "/3.jpeg"]; // adjust paths

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
        <div className="auth-form-wrapper">
          <div className="auth-logo-circle">🌸</div>
          <h2>Forgot Password?</h2>
          <p style={{ textAlign: "center", color: "#627d98", marginBottom: "1.8rem" }}>
            Enter your email address to receive a password reset link.
          </p>

          <form>
            <div className="auth-field-group">
              <label htmlFor="email">Email address</label>
              <input
                className="auth-input"
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <button type="submit" className="auth-submit-btn">
              Send Reset Link
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link to="/login">Back to Login</Link>
            <span style={{ margin: "0 8px", color: "#ccc" }}>|</span>
            <Link to="/signup">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
