import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function VerifyEmail() {
  return (
    <div className="auth-container">
      <div className="auth-card" role="main" aria-label="Email Verification">
        <div className="auth-logo" aria-hidden="true" />
        <h2>Verify Your Email</h2>
        <p style={{ color: "#627d98", textAlign: "center", marginBottom: "1.8rem" }}>
          We have sent a verification link to your email address. Please check your inbox and click the link to verify your account.
        </p>
        <form>
          <button type="submit" aria-label="Resend Verification Email Button">Resend Verification Email</button>
        </form>

        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
