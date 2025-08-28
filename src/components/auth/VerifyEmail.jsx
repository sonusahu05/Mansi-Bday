import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Auth.css";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"]; // Adjust paths as needed

export default function VerifyEmail() {
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

      {/* RIGHT PANEL: Verify Email Content */}
      <div className="auth-right-panel">
        <div className="auth-form-wrapper">
          <div className="auth-logo-circle">🌸</div>
          <h2>Verify Your Email</h2>
          <p style={{ color: "#627d98", textAlign: "center", marginBottom: "1.8rem" }}>
            We have sent a verification link to your email address. Please check your inbox and click the link to verify your account.
          </p>
          <form>
            <button type="submit" className="auth-submit-btn" aria-label="Resend Verification Email Button">
              Resend Verification Email
            </button>
          </form>

          <div className="auth-links" style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
