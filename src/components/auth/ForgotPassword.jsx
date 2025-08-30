import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Auth.css";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"]; // Update with correct paths

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

      {/* RIGHT PANEL: Forgot Password Form */}
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
