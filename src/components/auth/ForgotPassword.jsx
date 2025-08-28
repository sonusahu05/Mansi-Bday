import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="auth-card" role="main" aria-label="Forgot Password Form">
        <div className="auth-logo" aria-hidden="true" />
        <h2>Forgot Password?</h2>
        <p style={{ color: "#627d98", textAlign: "center", marginBottom: "1.8rem" }}>
          Enter your email address to receive a password reset link.
        </p>
        <form>
          <div className="floating-label">
            <input
              type="email"
              id="email"
              placeholder=" "
              required
              autoComplete="email"
              aria-describedby="emailHelp"
            />
            <label htmlFor="email">Email address</label>
          </div>

          <button type="submit" aria-label="Send Reset Link Button">Send Reset Link</button>
        </form>

        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
          <span> | </span>
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
