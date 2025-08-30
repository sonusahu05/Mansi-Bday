import React, { useState } from "react";
import "./Help.css";

const faqs = [
  {
    question: "How can I reset my password?",
    answer:
      "To reset your password, go to the login page and click on 'Forgot Password'. You'll receive an email with instructions.",
  },
  {
    question: "Where can I view my order history?",
    answer:
      "Your order history is available in the 'My Account' section under 'Orders'. You can track, cancel or reorder from there.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact customer support via the 'Contact Us' page or by calling our support number at +1 123 456 7890.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Returns are accepted within 30 days of purchase. Please ensure items are in original condition and packaging.",
  },
];

export default function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-wrapper">
      <nav className="breadcrumb">
        <span className="breadcrumb-link"><a href="/">Home</a></span>
        <span className="breadcrumb-arrow">›</span>
        <span className="breadcrumb-current">Help</span>
      </nav>

      <h1 className="help-title">Help Center</h1>
      <p className="help-intro">
        Find answers to common questions or get in touch with our support team.
      </p>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <button className="faq-question" aria-expanded={openIndex === index}>
              {item.question}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="help-contact">
        <h2>Still need help?</h2>
        <p>
          Contact our support team via <a href="/contact-us">Contact Us</a> page or call us at{" "}
          <a href="tel:+11234567890">+1 123 456 7890</a>.
        </p>
      </div>
    </div>
  );
}
