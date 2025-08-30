import React, { useState, useEffect } from "react";

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
  const [fadeClass, setFadeClass] = useState("opacity-0"); // Initially hidden

  useEffect(() => {
    // Fade-in effect when the component mounts
    setFadeClass("opacity-100 transition-opacity duration-1000");

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      // Fade-out effect when the component unmounts
      setFadeClass("opacity-0 transition-opacity duration-1000");
      clearInterval(interval);
    };
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
    <div
      className={`font-['Inter',sans-serif] max-w-[1200px] mx-auto my-[100px] px-5 py-10 text-center ${fadeClass}`}
    >
      <div className="inline-block border border-[#ccc] rounded-[20px] px-[14px] py-[6px] font-medium mb-5">🎖️ Pricing</div>
      <h1 className="text-[2.2rem] font-bold">Choose a plan & start today</h1>
      <p className="text-base text-[#555] mt-[10px] mb-[30px]">
        Innovative event experience and AI media sharing at best prices!
      </p>

      <div className="my-[30px] text-[0.95rem] text-[#9a3b53]">
        <p className="inline mr-[5px]">
          Get 30% off <span className="mx-[5px] text-[#ccc]">|</span> Ends in
        </p>
        <span className="bg-[#9a3b53] text-white px-[10px] py-1 rounded-lg font-bold ml-[10px]">{formatTime()}</span>
        <p className="mt-[5px] font-medium">Use Code : <strong>OOH30S</strong></p>
      </div>

      <div className="flex justify-center my-5">
        <button
          className={`px-5 py-[10px] mx-[5px] border border-[#ddd] rounded-[10px] bg-white cursor-pointer font-medium ${activeTab === "personal" ? "bg-[#f3f3f3]" : ""}`}
          onClick={() => {
            setActiveTab("personal");
            setSelectedCardIndex(null);
          }}
        >
          Personal
        </button>
        <button
          className={`px-5 py-[10px] mx-[5px] border border-[#ddd] rounded-[10px] bg-white cursor-pointer font-medium ${activeTab === "photographer" ? "bg-[#f3f3f3]" : ""}`}
          onClick={() => {
            setActiveTab("photographer");
            setSelectedCardIndex(null);
          }}
        >
          Photographers
        </button>
      </div>

      <div className="mt-[30px] mb-10 text-center">
        <label className="relative inline-block w-[60px] h-[30px] mr-[15px]">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
            className="opacity-0 w-0 h-0"
          />
          <span className="absolute cursor-pointer bg-[#9a3b53] rounded-[30px] top-0 left-0 right-0 bottom-0 transition-all duration-400 before:content-[''] before:absolute before:h-[22px] before:w-[22px] before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all before:duration-400 peer-checked:before:translate-x-[30px]"></span>
        </label>
        <div className="flex justify-center gap-[60px] font-medium mt-[5px]">
          <span>Monthly</span>
          <span>Yearly</span>
        </div>
        <div className="text-[#9a3b53] text-[0.8rem] mt-[5px]">33% cheaper than monthly</div>
      </div>

      <div className="flex overflow-x-auto gap-5 py-5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex-[0_0_280px] bg-[#fdf7f7] rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-5 text-left border border-[#eee] transition-all duration-300 cursor-pointer hover:-translate-y-[5px] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:border-[#d48b9c] ${
              selectedCardIndex === index 
                ? "bg-[#9a3b53] text-white border-2 border-[#9a3b53] scale-[1.03]" 
                : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="mb-2">
              <h3 className="mb-2">{plan.name}</h3>
              {plan.tag && <span className={`${selectedCardIndex === index ? "bg-white text-[#9a3b53]" : "bg-white text-[#9a3b53]"} text-xs px-2 py-[2px] rounded-xl font-bold mb-[10px] inline-block`}>{plan.tag}</span>}
              <div className="text-[1.4rem] font-bold">
                <span className={selectedCardIndex === index ? "text-white" : ""}>{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                {(isYearly ? plan.oldPriceYearly : plan.oldPriceMonthly) && (
                  <span className={`line-through text-[0.9rem] ml-[10px] ${selectedCardIndex === index ? "text-white" : "text-[#999]"}`}>
                    {isYearly ? plan.oldPriceYearly : plan.oldPriceMonthly}
                  </span>
                )}
              </div>
              <small className={`text-xs mt-[2px] ${selectedCardIndex === index ? "text-white" : ""}`}>
                +taxes ({isYearly ? "Monthly billed yearly" : "Monthly billing"})
              </small>
            </div>
            <button className={`${selectedCardIndex === index ? "bg-white text-[#9a3b53]" : "bg-black text-white"} p-[10px] w-full border-none rounded-[10px] mt-[15px] mb-[15px] font-semibold cursor-pointer`}>
              {plan.cta || "Purchase"}
            </button>
            <ul className="list-none pl-0 text-[0.9rem]">
              {plan.features.map((item, idx) => (
                <li key={idx} className={`mb-2 ${selectedCardIndex === index ? "text-white" : ""}`}>✔ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="bg-[#f6efed] rounded-[20px] p-10 mt-[60px] text-left">
        <div className="bg-[#b05a7a] text-white inline-block px-[14px] py-[6px] text-[0.8rem] rounded-[20px] font-semibold mb-3">Hurry ! Flat 50% off on Personal Events</div>
        <h2 className="text-[2rem] font-bold text-[#9a3b53] my-[10px]">Join EazyInvites</h2>
        <p className="text-base text-[#9a3b53] mb-[25px]">
          Host your next event for free with EazyInvites and bring your ideas to life !
        </p>
        <div className="flex gap-[15px]">
          <button className="px-[25px] py-[10px] border-2 border-[#9a3b53] rounded-[10px] bg-[#9a3b53] text-white font-semibold cursor-pointer transition-all duration-300">Sign Up</button>
          <button className="px-[25px] py-[10px] border-2 border-[#9a3b53] rounded-[10px] bg-white text-[#9a3b53] font-semibold cursor-pointer transition-all duration-300">Whatsapp Us</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;