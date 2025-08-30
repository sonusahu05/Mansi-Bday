import React, { useState } from "react";
import "./ContactUs.css";

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const OfficeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21v-9a9 9 0 0 1 18 0v9"></path>
    <rect x="7" y="10" width="10" height="11" rx="2"></rect>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Simple validation logic
  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    else if (form.firstName.trim().length < 2)
      newErrors.firstName = "First name must be at least 2 characters";

    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    else if (form.lastName.trim().length < 2)
      newErrors.lastName = "Last name must be at least 2 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    )
      newErrors.email = "Email address is invalid";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contact-wrapper">
      <nav className="breadcrumb">
        <span className="breadcrumb-link">
          <a href="/">Home</a>
        </span>
        <span className="breadcrumb-arrow">›</span>
        <span className="breadcrumb-link">
          <a href="/contact-us" style={{ textDecoration: "none" }}>
            Contact
          </a>
        </span>
        <span className="breadcrumb-arrow">›</span>
        <span className="breadcrumb-current">Get in Touch</span>
      </nav>

      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-intro">
        We'd love to hear from you! Whether you have questions, feedback, or
        just want to say hello, feel free to reach out to us.
      </p>

      <div className="contact-info">
        <div className="info-card" style={{ animationDelay: "0.2s" }}>
          <div className="icon">
            <PhoneIcon />
          </div>
          <h3>Phone</h3>
          <p className="desc">Call us for quick support</p>
          <ul>
            <li>+1 123 456 7890</li>
            <li>+1 987 654 3210</li>
          </ul>
        </div>

        <div className="info-card" style={{ animationDelay: "0.4s" }}>
          <div className="icon">
            <EmailIcon />
          </div>
          <h3>Email</h3>
          <p className="desc">Send us an email anytime</p>
          <ul>
            <li>support@example.com</li>
            <li>info@example.com</li>
          </ul>
        </div>

        <div className="info-card" style={{ animationDelay: "0.6s" }}>
          <div className="icon">
            <OfficeIcon />
          </div>
          <h3>Office</h3>
          <p className="desc">Visit us at our office</p>
          <address>
            3010, 1 Aerocity, NIBR Corporate Park
            <br />
            Andheri Kurla Road, Sakinaka
            <br />
            Mumbai - 400072
          </address>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <h2>Send us a message</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Your first name"
              value={form.firstName}
              onChange={handleChange}
              className={errors.firstName ? "input-error" : ""}
            />
            {errors.firstName && (
              <small className="error-text">{errors.firstName}</small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Your last name"
              value={form.lastName}
              onChange={handleChange}
              className={errors.lastName ? "input-error" : ""}
            />
            {errors.lastName && (
              <small className="error-text">{errors.lastName}</small>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              className={errors.message ? "input-error" : ""}
            />
            {errors.message && (
              <small className="error-text">{errors.message}</small>
            )}
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
