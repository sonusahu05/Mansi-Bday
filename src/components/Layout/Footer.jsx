// Footer.jsx
import './Footer.css';
import { FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-branding">
          <h2 className="logo">EazyInvites</h2>
          <p className="tagline">The future of events is here - EazyInvites, powered by AI.</p>
          <div className="social-icons">
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
            <FaXTwitter />
            <FaFacebookF />
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>Company</h4>
            <a href="/about-us">About Us</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/help">Help</a>
          </div>
          <div className="link-column">
            <h4>Product</h4>
            <a href="/blog">Blogs</a>
            <a href="/pricing">Pricing</a>
            <a href="/faq">FAQ's</a>
          </div>
          <div className="link-column">
            <h4>Website</h4>
            <a href="#">Chat Support</a>
            <a href="#">Report Bug</a>
          </div>
          <div className="link-column">
            <h4>Support</h4>
            <a href="/refund-policy">Refund Policy</a>
            <a href="/terms-conditions">Terms & Condition</a>
            <a href="/shipping-policy">Shipping Policy</a>
            <a href="/privacy-security">Privacy Policy</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 EazyInvites. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
