import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Auth.css";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"]; // Add actual image paths

export default function Login() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="auth-split-container fade-in">
      {/* LEFT PANEL: Phone Carousel */}
      <div className="auth-left-panel">
        <div className="carousel-container">
          <button className="nav-btn left" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="carousel">
            <div className="phone-frame">
               <div className="side-mute-switch"></div>
  <div className="side-button-left"></div>
  <div className="side-button-right"></div>
              <div className="phone-frame-capsule">
                <div className="phone-inner">
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
                </div>
              </div>
            </div>
          </div>

          <button className="nav-btn right" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* RIGHT PANEL: Login Form */}
      <div className="auth-right-panel">
        <div className="auth-form-wrapper">
          <div className="auth-logo-circle">🌸</div>
          <h2>Welcome Back</h2>

          <form>
            <div className="auth-field-group">
              <label htmlFor="email">Email address</label>
              <input
                className="auth-input"
                type="email"
                id="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="auth-field-group">
              <label htmlFor="password">Password</label>
              <input
                className="auth-input"
                type="password"
                id="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="auth-checkbox-row">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="auth-submit-btn">
              Log In
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <span style={{ color: "#ccc" }}>Don't have an account?</span>{" "}
            <Link to="/signup">Create one</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
