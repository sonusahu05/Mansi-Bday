import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';  // Reuse the same CSS

const TermsAndConditions = () => {
  return (
    <div className="refund-container">
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-arrow"> &gt; </span>
        <span className="breadcrumb-current">Terms & Conditions</span>
      </nav>

      <h1 className="terms-title">Terms and Conditions</h1>

<div className="terms-content">
  <p>
    Welcome to EazyInvites. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
  </p>

  <p>
    Please read these terms carefully. If you do not agree to these terms, you should not use our services.
  </p>

  <p>
    <strong>Use of Service:</strong> You agree to use EazyInvites for lawful purposes only. You must not use the platform for any illegal, unauthorized, or harmful activities.
  </p>

  <p>
    <strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately if you suspect any unauthorized use.
  </p>

  <p>
    <strong>Intellectual Property:</strong> All content, trademarks, logos, and data on this site are the property of EazyInvites Software Pvt Ltd and are protected by applicable intellectual property laws.
  </p>

  <p>
    <strong>Payment and Refunds:</strong> Payments made for EazyInvites services are non-refundable unless otherwise stated. We encourage you to use our free trial and demo resources before making a purchase.
  </p>

  <p>
    <strong>Termination:</strong> We reserve the right to suspend or terminate your access to the service at any time, without prior notice, if you violate these terms or engage in harmful behavior.
  </p>

  <p>
    <strong>Limitation of Liability:</strong> EazyInvites shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the platform or inability to use the services.
  </p>

  <p>
    <strong>Changes to Terms:</strong> We may update these terms from time to time. Continued use of the service constitutes acceptance of any changes. Please review this page periodically.
  </p>

  <p>
    For any questions or concerns regarding these terms, please contact our support team.
  </p>

  <p>
    Sincerely, <br />
    The EazyInvites Team <br />
    EazyInvites Software Pvt Ltd
  </p>
</div>

    </div>
  );
};

export default TermsAndConditions;
