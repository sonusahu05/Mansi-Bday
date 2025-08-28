import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card signup-card" role="main" aria-label="Signup Form">
        <div className="auth-logo" aria-hidden="true" />
        <h2>Create Account</h2>
        <form>
          <div className="form-grid">
            {/* First Name */}
            <div className="floating-label">
              <input
                type="text"
                id="firstName"
                placeholder=" "
                required
                autoComplete="given-name"
                aria-describedby="firstNameHelp"
              />
              <label htmlFor="firstName" style={{ margin: "-.5rem" }}>First Name</label>
            </div>

            {/* Last Name */}
            <div className="floating-label">
              <input
                type="text"
                id="lastName"
                placeholder=" "
                required
                autoComplete="family-name"
                aria-describedby="lastNameHelp"
              />
              <label htmlFor="lastName" style={{ margin: "-.5rem" }}>Last Name</label>
            </div>

            {/* Email */}
            <div className="floating-label full-width">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
                autoComplete="email"
                aria-describedby="emailHelp"
              />
              <label htmlFor="email" style={{ margin: "-.5rem" }}>Email address</label>
            </div>

            {/* Password */}
            <div className="floating-label">
              <input
                type="password"
                id="password"
                placeholder=" "
                required
                autoComplete="new-password"
                aria-describedby="passwordHelp"
              />
              <label htmlFor="password" style={{ margin: "-.5rem" }}>Password</label>
            </div>

            {/* Confirm Password */}
            <div className="floating-label">
              <input
                type="password"
                id="confirmPassword"
                placeholder=" "
                required
                autoComplete="new-password"
                aria-describedby="confirmPasswordHelp"
              />
              <label htmlFor="confirmPassword" style={{ margin: "-.5rem" }}>Confirm Password</label>
            </div>

            {/* Contact */}
            <div className="floating-label">
              <input
                type="tel"
                id="contact"
                placeholder=" "
                required
                autoComplete="tel"
                aria-describedby="contactHelp"
                pattern="[0-9\s+-]{7,15}"
                title="Please enter a valid phone number"
              />
              <label htmlFor="contact" style={{ margin: "-.5rem" }}>Contact Number</label>
            </div>

            {/* State (optional) */}
            <div className="floating-label">
              <input
                type="text"
                id="state"
                placeholder=" "
                autoComplete="address-level1"
                aria-describedby="stateHelp"
              />
              <label htmlFor="state" style={{ margin: "-.5rem" }}>State (optional)</label>
            </div>

            {/* Gender - full width */}
            <fieldset className="gender-group full-width" aria-label="Gender">
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

          <button type="submit" aria-label="Sign Up Button">Sign Up</button>
        </form>

        <div className="auth-links">
          <Link to="/login">Already have an account? Log In</Link>
        </div>
      </div>
    </div>
  );
}
