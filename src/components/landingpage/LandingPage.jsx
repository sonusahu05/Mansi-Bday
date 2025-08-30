import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./LandingPage.css";
import card1 from '/public/LandingPage/arancia-rossa-48599.avif'; // replace with actual paths
import card2 from '/public/LandingPage/island-time-48254.avif';

// Celebration Section (Hero)
const CelebrationSection = () => {
  const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="flex h-screen w-full bg-pink-50 font-sans">
      {/* LEFT PANEL */}
      <div className="flex h-screen w-full font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] bg-[#fdf6f9] animate-[fadeIn_0.6s_ease-out]"
               style={{
                 animation: 'fadeIn 0.6s ease-out both'
               }}>
            {/* LEFT PANEL: Carousel */}
            <div className="flex-1 relative bg-[#fdf6f9] overflow-hidden flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <button className="absolute left-[-180px] top-1/2 -translate-y-1/2 z-20 bg-white border-none text-2xl cursor-pointer p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors duration-300 flex items-center justify-center text-[#333] select-none hover:bg-gray-100 md:left-[-180px]" 
                        onClick={prevSlide}>
                  <FaChevronLeft />
                </button>
      
                <div className="relative w-[300px] h-[520px] flex items-center justify-center md:w-[260px] md:h-[460px]">{images.map((img, index) => {
                    let position = "nextSlide";
                    if (index === current) {
                      position = "activeSlide";
                    } else if (
                      index === current - 1 ||
                      (current === 0 && index === images.length - 1)
                    ) {
                      position = "lastSlide";
                    }
      
                    let positionClasses = "absolute w-[260px] h-[480px] object-cover rounded-[40px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-500 z-[1] opacity-0 scale-80";
                    
                    if (position === "activeSlide") {
                      positionClasses = "absolute w-[260px] h-[380px] object-cover rounded-[40px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-600 opacity-100 translate-x-0 scale-100 z-[1]";
                    } else if (position === "lastSlide") {
                      positionClasses = "absolute w-[260px] h-[480px] object-cover rounded-[40px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-600 opacity-60 -translate-x-[180px] scale-[0.85] z-0";
                    } else if (position === "nextSlide") {
                      positionClasses = "absolute w-[260px] h-[480px] object-cover rounded-[40px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-600 opacity-60 translate-x-[180px] scale-[0.85] z-0";
                    }
      
                    return (
                      <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={positionClasses}
                      />
                    );
                  })}
      
                  {/* Phone frame overlays the center image */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[523px] border-[5px] border-black rounded-[60px] bg-white shadow-[0_12px_25px_rgba(0,0,0,0.3)] z-10 pointer-events-none before:content-[''] before:absolute before:top-[5px] before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[28px] before:bg-black before:rounded-[20px/50%] before:z-30 after:content-[''] after:absolute after:top-[8px] after:left-[150px] after:w-[12px] after:h-[12px] after:bg-[#111] after:rounded-full after:shadow-[0_0_4px_rgba(0,0,0,0.9)] md:w-[260px] md:h-[460px]">
                    <div className="absolute top-[100px] left-[-7px] w-[5px] h-[60px] bg-gradient-to-r from-[#444] to-[#222] rounded-[20px] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.7)]"></div>
                    <div className="absolute top-[80px] left-[-7px] w-[5px] h-[18px] bg-gradient-to-r from-[#444] to-[#222] rounded-[20px] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.7)]"></div>
                    <div className="absolute top-[130px] right-[-7px] w-[5px] h-[90px] bg-gradient-to-r from-[#444] to-[#222] rounded-[20px] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.7)]"></div>
                    <div className="w-full h-full overflow-hidden rounded-[52px] relative">
                      <div className="w-full h-full">
                        <img
                          src={images[current]}
                          alt={`Slide ${current + 1}`}
                          className="w-full h-full object-cover rounded-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
      
                <button className="absolute right-[-180px] top-1/2 -translate-y-1/2 z-20 bg-white border-none text-2xl cursor-pointer p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors duration-300 flex items-center justify-center text-[#333] select-none hover:bg-gray-100 md:right-[-180px]" 
                        onClick={nextSlide}>
                  <FaChevronRight />
                </button>
              </div>
            </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-1 max-w-[480px] flex-col items-center justify-center p-8 mr-36 text-gray-800">
        <h1 className="font-bold text-[3.5rem] leading-tight mb-4">
          Ready to <span className="text-pink-500">celebrate?</span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-[400px]">
          Life's a party, and it all starts with the perfect invite or card.
        </p>
      </div>
      /</div>
    </section>
  );
};

// Trending Section
const trendingItems = [
  {
    id: 1,
    title: 'Back to school',
    backgroundImage: '/public/LandingPage/trending_bg_general01pink.svg',
    foregroundImage: '/public/LandingPage/hand-drawn-picnic-50195.avif',
  },
  {
    id: 2,
    title: 'Housewarming parties',
    backgroundImage: '/public/LandingPage/trending_bg_general02pink.svg',
    foregroundImage: '/public/LandingPage/mid-century-pool-50060.avif',
  },
];

// Trending Section with Tailwind
const TrendingSection = () => {
  return (
    <section className="px-6 py-16 bg-pink-50 text-center font-sans">
      <h2 className="text-4xl font-bold mb-10 text-gray-900">
        Explore what's <span className="text-pink-500">trending</span>
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {trendingItems.map(({ id, title, backgroundImage, foregroundImage }) => (
          <div key={id} className="flex flex-col items-center w-[450px]">
            {/* Card with background image */}
            <div
              className="w-full bg-cover bg-center rounded-2xl flex flex-col items-center shadow-md hover:-translate-y-1 transition-transform duration-200 cursor-pointer overflow-hidden pt-10 px-6"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              {/* Foreground image */}
              <img
                src={foregroundImage}
                alt={title}
                className="w-[200px] max-h-[300px] object-contain rounded-xl shadow-lg mb-6"
              />

              {/* Footer */}
              <div className="flex justify-between items-center bg-gray-100 w-[112%] px-5 py-2 rounded-b-2xl -mb-2">
                <span className="text-lg font-medium text-gray-900">{title}</span>
                <button className="bg-indigo-500 w-7 h-7 flex items-center justify-center rounded-full text-white shadow-md hover:bg-indigo-600 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                             5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                             4.5 2.09C13.09 3.81 14.76 3 
                             16.5 3 19.58 3 22 5.42 
                             22 8.5c0 3.78-3.4 6.86-8.55 
                             11.54L12 21.35z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Birthday Showcase
// Birthday Showcase with Tailwind
const BirthdayShowcase = () => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-16 px-12 py-24 bg-pink-50">
      {/* LEFT side with cards */}
      <div className="flex-1 min-w-[580px] flex justify-center items-center">
        <div className="relative flex justify-center items-center bg-orange-100 rounded-[40px] p-14 w-[550px] h-[480px] overflow-hidden gap-1">
          {/* Decorative bg (optional: you can add bg-image if needed) */}
          <div className="absolute inset-0 bg-[url('/public/LandingPage/download2.png')] bg-cover bg-center opacity-100 scale-110 rounded-[40px]"></div>
          <img
            src="/public/LandingPage/tubular-letters-49340.avif"
            alt="Pool Party"
            className="w-[220px] h-[320px] object-cover rounded-xl rotate-[3.5deg] right-4 shadow-lg mb-25 relative z-10 transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/public/LandingPage/party-in-the-jungle-48913.avif"
            alt="Birthday Girl"
            className="w-[220px] h-[320px] object-cover rounded-xl rotate-[-4.5deg] shadow-lg relative z-10 ml-2 mt-26 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* RIGHT side with text + buttons */}
      <div className="flex-1 min-w-[400px] flex flex-col justify-center items-start">
        <h2 className="text-[3.5rem] leading-snug font-extrabold mb-10 text-gray-900">
          <span className="text-orange-500">Make a wish</span> and <br />
          celebrate with <span className="text-gray-800">style</span>
        </h2>

        <div className="flex flex-col gap-3 items-center sm:items-start">
          <button className="flex justify-between items-center w-[280px] px-6 py-4 text-lg font-medium text-gray-900 bg-gray-100 rounded-full transition duration-300 hover:bg-orange-500 hover:text-white">
            Birthday invites
            <span className="ml-3 w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white text-sm">
              💡
            </span>
          </button>
          <button className="flex justify-between items-center w-[280px] px-6 py-4 text-lg font-medium text-gray-900 bg-gray-100 rounded-full transition duration-300 hover:bg-orange-500 hover:text-white">
            Birthday cards
            <span className="ml-3 w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white text-sm">
              🧾
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};


const WeddingHero = () => {
  return (
    <section className="flex flex-wrap items-start justify-between px-[6%] py-16 bg-pink-50 relative overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex-1 min-w-[320px] flex flex-col items-start gap-8 z-10">
        <h1 className="text-[3rem] leading-tight font-semibold text-gray-800 mb-8 mt-16 ml-24">
          Say <span className="text-pink-500">"I do"</span> to <br />
          happily ever after
        </h1>

        <div className="flex flex-col gap-6 ml-24">
          <button className="flex items-center justify-between px-6 py-4 bg-gray-100 rounded-full min-w-[280px] text-lg font-medium text-gray-800 hover:bg-pink-500 hover:text-white transition duration-300 shadow-md">
            <span>Wedding invites</span>
            <span className="ml-12 bg-pink-500 text-white p-3 rounded-full">💒</span>
          </button>

          <button className="flex items-center justify-between px-6 py-4 bg-gray-100 rounded-full min-w-[280px] text-lg font-medium text-gray-800 hover:bg-pink-500 hover:text-white transition duration-300 shadow-md">
            <span>Engagement party</span>
            <span className="ml-12 bg-pink-500 text-white p-3 rounded-full">💍</span>
          </button>

          <button className="flex items-center justify-between px-6 py-4 bg-gray-100 rounded-full min-w-[280px] text-lg font-medium text-gray-800 hover:bg-pink-500 hover:text-white transition duration-300 shadow-md">
            <span>Save the date</span>
            <span className="ml-12 bg-pink-500 text-white p-3 rounded-full">🗓️</span>
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 min-h-[350px] flex justify-center items-start relative bg-orange-100 rounded-[40px] p-12 mt-8">
        {/* Background Shape (optional background-image) */}
        <div className="absolute inset-0 bg-[url('/public/LandingPage/download1.png')] bg-cover bg-center opacity-100 scale-110 rounded-[40px]"></div>

        {/* Cards */}
        <img
          src={card1}
          alt="Main card"
          className="w-[280px] rotate-[-4.5deg] relative z-20 shadow-2xl rounded-lg mr-[300px] transition-transform duration-300 hover:scale-110"
        />
        <img
          src={card2}
          alt="Behind card"
          className="w-[230px] absolute bottom-10 right-16 rotate-[5.5deg] shadow-xl rounded-lg z-10 transition-transform duration-300 hover:scale-120"
        />
      </div>
    </section>
  );
};

// Greeting Island Section (directly added)
const GreetingIsland = () => {
  const icons = {
    gift: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="#5EC6D8 !important"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="8" width="18" height="13" rx="2" ry="2"></rect>
        <line x1="12" y1="8" x2="12" y2="21"></line>
        <path d="M12 8V3.5a2.5 2.5 0 014 2"></path>
        <path d="M12 8V3.5a2.5 2.5 0 00-4 2"></path>
      </svg>
    ),
    gender: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="#5EC6D8 !important"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
    baptism: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="#5EC6D8 !important"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <line x1="12" y1="2" x2="12" y2="22"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <circle cx="12" cy="7" r="3"></circle>
      </svg>
    ),
  };

  return (
    <section className="flex justify-center items-start px-20 py-28 gap-72 bg-pink-50 font-sans flex-wrap">
      {/* LEFT SIDE - Decorative images */}
      <div className="relative flex gap-8 max-w-[640px]">
        <div className="relative flex gap-8 bg-[url('/public/LandingPage/download1.png')] bg-cover bg-center opacity-100 scale-110 rounded-[30px] p-10 shadow-xl">
          {/* Stars */}
          <div className="absolute top-4 left-14 w-3 h-3 bg-cyan-400 rounded-full opacity-50 shadow-sm"></div>
          <div className="absolute top-10 left-56 w-2.5 h-2.5 bg-cyan-400 rounded-full opacity-50 shadow-sm"></div>
          <div className="absolute bottom-5 left-8 w-2 h-2 bg-cyan-400 rounded-full opacity-50 shadow-sm"></div>

          {/* Loops */}
          <div className="absolute -top-12 -left-10 w-[130px] h-[130px] border-4 border-cyan-400 rounded-full opacity-40"></div>
          <div className="absolute -bottom-20 -right-12 w-[170px] h-[170px] border-4 border-cyan-400 rounded-full opacity-40"></div>

          {/* Cards */}
          <img
            src="public/LandingPage/cutie-fins-48785.avif"
            alt="Baby Shower Invitation"
            className="w-[220px] rounded-lg shadow-lg transform -rotate-6 transition-transform duration-300 hover:scale-110"
          />
          <img
            src="public/LandingPage/velveteen-rabbits-49047.avif"
            alt="Gender Reveal Invitation"
            className="w-[220px] rounded-lg shadow-lg transform -rotate-6 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* RIGHT SIDE - Text + Buttons */}
      <div className="max-w-[350px] flex flex-col gap-8">
        <h1 className="text-[3rem] font-bold leading-tight">
          <span className="text-cyan-400">Welcome</span> tiny treasures
        </h1>

        <div className="flex flex-col gap-4">
          <button className="flex justify-between items-center px-6 py-3 text-lg font-medium bg-gray-100 rounded-full shadow-md hover:bg-cyan-400 hover:text-white transition">
            Baby shower
            <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-white">
              🎁
            </span>
          </button>

          <button className="flex justify-between items-center px-6 py-3 text-lg font-medium bg-gray-100 rounded-full shadow-md hover:bg-cyan-400 hover:text-white transition">
            Gender reveal
            <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-white">
              ⚧
            </span>
          </button>

          <button className="flex justify-between items-center px-6 py-3 text-lg font-medium bg-gray-100 rounded-full shadow-md hover:bg-cyan-400 hover:text-white transition">
            Baptism
            <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-white">
              ✝️
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Review Slider Section
const ReviewSlider = () => {
  const reviews = [
    {
      stars: 5,
      title: "Really really good",
      content: "Really really good, amazing templates to choose from. I can edit at go! Have always used this...",
      author: "Smita Lakra Juneja",
      timeAgo: "6 days ago",
    },
    {
      stars: 5,
      title: "I love this application",
      content: "I love this application, it makes my corporate socials something to look forward to...",
      author: "Zainonechia Manell",
      timeAgo: "6 days ago",
    },
    // More reviews...
      {
    stars: 4,
    title: "best",
    content: "pro and this ai is the best",
    author: "Vijayalakshmi Suresh",
    timeAgo: "August 18",
  },
  {
    stars: 5,
    title: "I'm not good in this techn...",
    content: "I'm not good in this thing",
    author: "Martha Skippers",
    timeAgo: "August 18",
  },
  {
    stars: 5,
    title: "I'm not good in this techn...",
    content: "I'm not good in this thing",
    author: "Martha Skippers",
    timeAgo: "August 18",
  },
  {
    stars: 5,
    title: "I'm not good in this techn...",
    content: "I'm not good in this thing",
    author: "Martha Skippers",
    timeAgo: "August 18",
  },
  {
    stars: 5,
    title: "I'm not good in this techn...",
    content: "I'm not good in this thing",
    author: "Martha Skippers",
    timeAgo: "August 18",
  },
  {
    stars: 5,
    title: "I'm not good in this techn...",
    content: "I'm not good in this thing",
    author: "Martha Skippers",
    timeAgo: "August 18",
  },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 px-10 bg-pink-50 text-center font-sans">
      <h2 className="text-4xl font-semibold mb-10 text-gray-900">
        See how others celebrate with us
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-0 bottom-0 my-auto bg-white w-12 h-12 rounded-full shadow-md flex justify-center text-4xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition z-10"
        >
          ‹
        </button>

        {/* Scrollable list */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth px-4 py-5 no-scrollbar"
        >
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-gray-50 min-w-[260px] max-w-[300px] p-6 rounded-xl shadow-md flex-shrink-0 text-left"
            >
              {/* Stars */}
              <div className="text-green-500 text-lg mb-2">
                {Array(r.stars)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>

              <h4 className="text-base font-bold text-gray-900 mb-2">
                {r.title}
              </h4>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {r.content}
              </p>
              <div className="text-xs text-gray-500">
                <strong>{r.author}</strong>, {r.timeAgo}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-0 bottom-0 my-auto bg-white w-12 h-12 rounded-full shadow-md flex justify-center text-4xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition z-10"
        >
          ›
        </button>
      </div>

      {/* Summary */}
      <div className="mt-8 text-sm text-gray-700">
        Rated <strong>4.8</strong> / 5 based on <strong>1,360</strong> reviews.
        Showing our 5-star reviews.{" "}
        <span className="ml-2 font-semibold">Trustpilot</span>
      </div>
    </section>
  );
};

// RSVP Landing Section
const RSVPLanding = () => {
  const navigate = useNavigate();

  const handleBrowseInvitations = () => {
    navigate('/invitations');
    console.log('Browse invitations clicked');
  };

  const features = [
    {
      icon: '🎯',
      text: 'Add maps, gift registries, and extras to your RSVP'
    },
    {
      icon: '⚙️',
      text: 'Set RSVP rules like deadlines, guest limits, and more'
    },
    {
      icon: '🔗',
      text: 'Share it seamlessly with a link or QR code'
    },
    {
      icon: '👥',
      text: 'Guests RSVP in one click'
    },
    {
      icon: '💬',
      text: 'Communicate easily with your guests'
    },
    {
      icon: '📧',
      text: 'Track responses in real time and get email notifications'
    }
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* LEFT SIDE */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Turn any invitation into<br />
              an online <span className="text-green-500">RSVP</span>
            </h1>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-lg text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <button 
              className="bg-green-500 text-white py-3 px-8 rounded-full text-xl font-semibold shadow-md hover:bg-green-600 transition"
              onClick={handleBrowseInvitations}
            >
              Browse Invitations
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex justify-center">
            <img 
              src="/public/LandingPage/playing_8.png" 
              alt="RSVP Interface Mockup" 
              className="w-full max-w-[500px] rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


const LandingPage = () => {
  return (
    <div>
      <CelebrationSection />
      <TrendingSection />
      <BirthdayShowcase />
      <WeddingHero />
      <GreetingIsland />
      <RSVPLanding />
      <ReviewSlider />
    </div>
  );
};

export default LandingPage;
