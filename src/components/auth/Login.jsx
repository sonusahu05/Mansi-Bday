import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Auth.css";

export default function Login() {
const carouselImages = ["/1.jpeg", "/2.jpeg", "/3.jpeg"]; // Update paths

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