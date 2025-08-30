import React from 'react';
import { Link } from 'react-router-dom';
import './ShippingPolicy.css';

const ShippingPolicy = () => {
  return (
    <div className="shipping-container">
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-arrow"> &gt; </span>
        <span className="breadcrumb-current">Shipping Policy</span>
      </nav>

      <h1 className="shipping-title">Shipping & Delivery Policy</h1>

<p className="shipping-intro">
  This Shipping & Delivery Policy is part of our Terms and Conditions ("Terms") and should be read alongside our main Terms & Conditions.
  Please carefully review this Shipping & Delivery Policy when purchasing our products or subscriptions. This policy applies to any order you place with us.
</p>

<section className="shipping-section">
  <h2>WHAT ARE MY SHIPPING & DELIVERY OPTIONS?</h2>
  <p>Free Instant Delivery</p>
  <p>As a SaaS business based in India, EazyInvites offers free instant delivery on all subscriptions and services across India.</p>
</section>

<hr />

<section className="shipping-section">
  <h2>HOW IS MY SUBSCRIPTION FULFILLED?</h2>
  <p>Subscriptions and service purchases are activated immediately upon successful billing and payment confirmation.</p>
</section>

<hr />

<section className="shipping-section">
  <h2>DO YOU DELIVER INTERNATIONALLY?</h2>
  <p>We offer worldwide delivery. Since we operate as a SaaS platform, delivery is instant and free for all international orders.</p>
  <p>
    Please note that international deliveries may be subject to local laws, taxes, and regulations in the destination country. You are responsible for complying with such laws and any additional fees or taxes.
  </p>
</section>

<hr />

<section className="shipping-section">
  <h2>WHAT HAPPENS IF MY ORDER IS DELAYED?</h2>
  <p>Since delivery is digital and instant, delays are uncommon. However, if any issues arise, we will notify you promptly with updated information.</p>
  <p>
    For Indian consumers: This does not affect your statutory rights. Please refer to our Terms & Conditions for more details.
  </p>
</section>

<hr />

<section className="shipping-section">
  <h2>QUESTIONS ABOUT RETURNS?</h2>
  <p>If you have questions about refunds or cancellations, please review our Refund and Cancellation Policy: <a href="https://www.eazyinvites.com/refund-cancellation" target="_blank" rel="noopener noreferrer">https://www.eazyinvites.com/refund-cancellation</a>.</p>
</section>

<hr />

<section className="shipping-section">
  <h2>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
  <p>If you have any questions or comments about this policy, please contact us by: Email: <a href="mailto:support@eazyinvites.com">support@eazyinvites.com</a></p>
</section>

    </div>
  );
};

export default ShippingPolicy;
