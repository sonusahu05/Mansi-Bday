import React, { useState, useEffect } from "react";
import "./PricingPage.css";

const personalPlans = [
  {
    name: "Free Trial",
    priceMonthly: "₹0",
    priceYearly: "₹0",
    oldPriceMonthly: null,
    oldPriceYearly: null,
    features: ["10GB ~ 10K Media", "2 Events", "40 Guests", "15 Days Grace Period"],
    cta: "Get started",
  },
  {
    name: "Starter",
    priceMonthly: "₹129",
    priceYearly: "₹744",
    oldPriceMonthly: "₹159",
    oldPriceYearly: "₹1,063",
    features: ["100GB ~ 100K Media", "100 Events", "2000 Guests per event", "15 Days Grace Period"],
  },
  {
    name: "Amateur",
    priceMonthly: "₹249",
    priceYearly: "₹1,488",
    oldPriceMonthly: "₹354",
    oldPriceYearly: "₹2,125",
    features: ["500GB ~ 500K Media", "250 Events", "2000 Guests per event", "15 Days Grace Period"],
  },
  {
    name: "Pro",
    priceMonthly: "₹439",
    priceYearly: "₹2,618",
    oldPriceMonthly: "₹628",
    oldPriceYearly: "₹3,740",
    tag: "Most Popular",
    features: ["1TB ~ 1M Media", "500 Events", "2000 Guests per event", "15 Days Grace Period"],
  },
  {
    name: "Pro Max",
    priceMonthly: "₹689",
    priceYearly: "₹4,106",
    oldPriceMonthly: "₹983",
    oldPriceYearly: "₹5,865",
    features: ["4TB ~ 4M Media", "1000 Events", "2000 Guests per event", "15 Days Grace Period"],
  },
  {
    name: "Advanced",
    priceMonthly: "₹949",
    priceYearly: "₹5,653",
    oldPriceMonthly: "₹1,359",
    oldPriceYearly: "₹8,075",
    features: ["8TB ~ 8M Media", "2000 Events", "2000 Guests per event", "15 Days Grace Period"],
  },
];

const photographerPlans = [
  {
    name: "Amateur",
    priceMonthly: "₹249",
    priceYearly: "₹1,488",
    oldPriceMonthly: "₹354",
    oldPriceYearly: "₹2,125",
    features: ["500GB ~ 500K Media", "250 Events", "2000 Guests per event", "15 Days Grace Period"],
  },
  {
    name: "Pro Max",
    priceMonthly: "₹689",
    priceYearly: "₹4,106",
    oldPriceMonthly: "₹983",
    oldPriceYearly: "₹5,865",
    features: ["4TB ~ 4M Media", "1000 Events", "2000 Guests per event", "15 Days Grace Period"],
  },
  {
    name: "Advanced",
    priceMonthly: "₹949",
    priceYearly: "₹5,653",
    oldPriceMonthly: "₹1,359",
    oldPriceYearly: "₹8,075",
    features: ["8TB ~ 8M Media", "2000 Events", "2000 Guests per event", "15 Days Grace Period"],
  },
   {
    name: "Studio Plan",
    priceMonthly: "₹1,299",
    priceYearly: "₹7,999",
    oldPriceMonthly: "₹1,899",
    oldPriceYearly: "₹11,000",
    tag: "Best for Teams",
    features: [
      "10TB ~ 10M Media",
      "Unlimited Events",
      "5000 Guests per event",
      "Team Collaboration Tools",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    priceMonthly: "₹1,999",
    priceYearly: "₹11,988",
    oldPriceMonthly: "₹2,899",
    oldPriceYearly: "₹16,999",
    features: [
      "20TB ~ Unlimited Media",
      "Unlimited Events",
      "Unlimited Guests",
      "White-label Branding",
      "Dedicated Support Manager",
    ],
  },
  {
    name: "Custom Plan",
    priceMonthly: "Let's Talk",
    priceYearly: "Custom Pricing",
    oldPriceMonthly: null,
    oldPriceYearly: null,
    cta: "Contact Us",
    features: [
      "Custom Storage",
      "Custom Events",
      "API Access",
      "SLA & Legal Compliance",
      "Full Customization",
    ],
  },
];

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");
  const [timer, setTimer] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const hrs = String(Math.floor(timer / 3600)).padStart(2, "0");
    const mins = String(Math.floor((timer % 3600) / 60)).padStart(2, "0");
    const secs = String(timer % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const plans = activeTab === "personal" ? personalPlans : photographerPlans;

  const handleCardClick = (index) => {
    setSelectedCardIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="pricing-container">
      <div className="badge">🎖️ Pricing</div>
      <h1 className="pricing-title">Choose a plan & start today</h1>
      <p className="pricing-subtitle">
        Innovative event experience and AI media sharing at best prices!
      </p>

      <div className="discount-section">
        <p className="discount-text">
          Get 30% off <span className="divider">|</span> Ends in
        </p>
        <span className="timer-box">{formatTime()}</span>
        <p className="discount-code">Use Code : <strong>OOH30S</strong></p>
      </div>

      <div className="plan-type-toggle">
        <button
          className={`plan-tab ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("personal");
            setSelectedCardIndex(null);
          }}
        >
          Personal
        </button>
        <button
          className={`plan-tab ${activeTab === "photographer" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("photographer");
            setSelectedCardIndex(null);
          }}
        >
          Photographers
        </button>
      </div>

      <div className="billing-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <span className="slider"></span>
        </label>
        <div className="billing-labels">
          <span>Monthly</span>
          <span>Yearly</span>
        </div>
        <div className="discount-hint">33% cheaper than monthly</div>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${selectedCardIndex === index ? "highlight" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-header">
              <h3>{plan.name}</h3>
              {plan.tag && <span className="tag">{plan.tag}</span>}
              <div className="price">
                <span>{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                {(isYearly ? plan.oldPriceYearly : plan.oldPriceMonthly) && (
                  <span className="old-price">
                    {isYearly ? plan.oldPriceYearly : plan.oldPriceMonthly}
                  </span>
                )}
              </div>
              <small className="price-note">
                +taxes ({isYearly ? "Monthly billed yearly" : "Monthly billing"})
              </small>
            </div>
            <button className="cta-btn">{plan.cta || "Purchase"}</button>
            <ul className="features">
              {plan.features.map((item, idx) => (
                <li key={idx}>✔ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* ✅ Join Samaro Banner Section */}
      <div className="samaro-banner">
        <div className="samaro-offer">Hurry ! Flat 50% off on Personal Events</div>
        <h2 className="samaro-title">Join EazyInvites</h2>
        <p className="samaro-subtitle">
          Host your next event for free with EazyInvites and bring your ideas to life !
        </p>
        <div className="samaro-buttons">
          <button className="samaro-btn primary">Sign Up</button>
          <button className="samaro-btn">Whatsapp Us</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
