import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  const footerSections = {
    'Invitations & Cards': [
      'Cards'
    ],
    'Wedding': [
      'Wedding invites',
      'Save the date',
      'Engagement party',
      'Bridal shower',
      'RSVP cards',
      'Bachelorette Party'
    ],
    'Birthday': [
      'Birthday',
      'Birthday cards',
      'Milestone',
      '1st Birthday',
      'Kids',
      'Surprise'
    ],
    'Baby & Kids': [
      'Baby shower',
      'Gender Reveal',
      'Baptism & Christening',
      'Baby sprinkle',
      'Birth announcements',
      'Communion'
    ],
    'Party': [
      'Housewarming',
      'Graduation Party',
      'Dinner Party',
      'Anniversary',
      'Retirement & Farewell',
      'Professional Events'
    ],
    'Greeting cards': [
      'Birthday cards',
      'Thank you',
      'Anniversary',
      'Holidays',
      'Get well',
      'New baby'
    ],
    'Company': [
      'About us',
      'Blog'
    ],
    'Support': [
      'Contact us',
      'Help',
      'Premium membership'
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h2 className="newsletter-title">Make every occasion count</h2>
          <p className="newsletter-subtitle">
            Stay ahead with exclusive tips and inspiration for your next celebration
          </p>
          
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="email-input"
                disabled={isLoading}
                required
              />
              <button 
                type="submit" 
                className={`subscribe-btn ${isLoading ? 'loading' : ''} ${isSubscribed ? 'success' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>

        {/* Trust Pilot Section */}
        <div className="trustpilot-section">
          <div className="rating-container">
            <span className="rating-text">Excellent</span>
            <span className="rating-score">4.8</span>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star">★</span>
              ))}
            </div>
            <span className="review-text">Based on <strong>+1K reviews</strong></span>
            <span className="trustpilot-logo">★ Trustpilot</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-navigation">
          {Object.entries(footerSections).map(([sectionTitle, links]) => (
            <div key={sectionTitle} className="footer-column">
              <h3 className="column-title">{sectionTitle}</h3>
              <ul className="footer-links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="logo-social-section">
              <div className="footer-logo">
                <div className="logo-icon">🎨</div>
                <span className="logo-text">Eazy Invites</span>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">📘</a>
                <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                <a href="#" className="social-link" aria-label="Instagram">📷</a>
                <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
                <a href="#" className="social-link" aria-label="Pinterest">📌</a>
              </div>
            </div>

            <div className="app-links">
              <div className="help-section">
                <span className="help-text">Need Help?</span>
              </div>
              <div className="download-apps">
                <a href="#" className="app-store-link">
                  <div className="app-store-btn">📱 App Store</div>
                </a>
                <a href="#" className="google-play-link">
                  <div className="google-play-btn">🤖 Google Play</div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-legal">
            <div className="copyright">
              <span>©Eazy Invites 2025. All rights reserved.</span>
            </div>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy policy</a>
              <a href="#" className="legal-link">Terms of use</a>
              <a href="#" className="legal-link">Site map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;