import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card" role="main" aria-label="Login Form">
        <div className="auth-logo" aria-hidden="true" />
        <h2>Welcome Back</h2>
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

          <div className="floating-label">
            <input
              type="password"
              id="password"
              placeholder=" "
              required
              autoComplete="current-password"
              aria-describedby="passwordHelp"
            />
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit" aria-label="Log In Button">Log In</button>
        </form>

        <div className="auth-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <span> | </span>
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
