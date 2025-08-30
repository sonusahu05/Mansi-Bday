import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./LandingPage.css";
import card1 from '/public/LandingPage/arancia-rossa-48599.avif'; // replace with actual paths
import card2 from '/public/LandingPage/island-time-48254.avif';

// Celebration Section (Hero)
const CelebrationSection = () => {
  const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"]; // Update with correct paths
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="celebration-container">
      {/* LEFT PANEL: Carousel */}
      <div className="celebration-left-panel">
        <div className="carousel-container">
          <button className="nav-btn left" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="carousel">
            {images.map((img, index) => {
              let position = "nextSlide";
              if (index === current) {
                position = "activeSlide";
              } else if (
                index === current - 1 ||
                (current === 0 && index === images.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`slide ${position}`}
                />
              );
            })}

            {/* Phone frame overlays the center image */}
            <div className="phone-frame">
              <div className="side-mute-switch"></div>
              <div className="side-button-left"></div>
              <div className="side-button-right"></div>
              <div className="phone-frame-capsule">
                <div className="phone-inner">
                  <img
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="carousel-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="nav-btn right" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* RIGHT PANEL: Celebration Text */}
      <div className="celebration-text">
        <h1>
          Ready to <span className="highlight">celebrate?</span>
        </h1>
        <p>Life's a party, and it all starts with the perfect invite or card.</p>
      </div>
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

const TrendingSection = () => {
  return (
    <section className="trending-section">
      <h2 className="trending-title">
        Explore what's <span className="highlight">trending</span>
      </h2>
      <div className="trending-cards-container">
        {trendingItems.map(({ id, title, backgroundImage, foregroundImage }) => (
          <div key={id} className="trending-card-wrapper">
            <div
              className="trending-card"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <img src={foregroundImage} alt={title} className="card-foreground" />
              <div className="card-footer">
                <span className="card-title">{title}</span>
                <button className="favorite-btn" aria-label="Add to favorites">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
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
const BirthdayShowcase = () => {
  return (
    <section className="birthday-section">
      <div className="birthday-left">
        <div className="birthday-bg">
          <img src="/public/LandingPage/tubular-letters-49340.avif" alt="Pool Party" className="birthday-card" />
          <img src="/public/LandingPage/party-in-the-jungle-48913.avif" alt="Birthday Girl" className="birthday-card overlap" />
        </div>
      </div>

      <div className="birthday-right">
        <h2 className="birthday-title">
          <span className="highlight-orange">Make a wish</span> and<br />
          celebrate with <span className="highlight-dark">style</span>
        </h2>

        <div className="birthday-buttons">
          <button className="birthday-btn">
            Birthday invites
            <span className="icon-lightbulb">💡</span>
          </button>
          <button className="birthday-btn">
            Birthday cards
            <span className="icon-card">🧾</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const WeddingHero = () => {
  return (
    <section className="wedding-hero">
      <div className="wedding-left">
        <h1>
          Say <span className="highlight">"I do"</span> to<br />happily ever after
        </h1>
        <div className="pill-buttons">
          <button><span>Wedding invites</span><i className="icon">💒</i></button>
          <button><span>Engagement party</span><i className="icon">💍</i></button>
          <button><span>Save the date</span><i className="icon">🗓️</i></button>
        </div>
      </div>
      <div className="wedding-right">
        <div className="bg-shape" />
        <img src={card1} alt="Main card" className="card1" />
        <img src={card2} alt="Behind card" className="card2" />
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
    <div className="greeting-container">
      <div className="left-image-container">
        <div className="decorative-bg">
          <div className="star star1" />
          <div className="star star2" />
          <div className="star star3" />
          <div className="loop loop1" />
          <div className="loop loop2" />
          <img
            className="card-img"
            src="public/LandingPage/cutie-fins-48785.avif"
            alt="Baby Shower Invitation"
          />
          <img
            className="card-img"
            src="public/LandingPage/velveteen-rabbits-49047.avif"
            alt="Gender Reveal Invitation"
          />
        </div>
      </div>
      <div className="right-text-container">
        <h1 className="welcome-text">
          <span className="blue-text">Welcome</span> tiny treasures
        </h1>
        <div className="btn-list">
          <button className="pill-btn">
            Baby shower <span className="icon">{icons.gift}</span>
          </button>
          <button className="pill-btn">
            Gender reveal <span className="icon">{icons.gender}</span>
          </button>
          <button className="pill-btn">
            Baptism <span className="icon">{icons.baptism}</span>
          </button>
        </div>
      </div>
    </div>
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
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 300;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="review-section">
      <h2 className="review-heading">See how others celebrate with us</h2>
      <div className="review-carousel">
        <button className="arrow-btn left" onClick={() => scroll("left")}>◀</button>
        <div className="review-list" ref={scrollRef}>
          {reviews.map((r, idx) => (
            <div key={idx} className="review-card">
              <div className="stars">
                {Array(r.stars).fill().map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <h4 className="review-title">{r.title}</h4>
              <p className="review-content">{r.content}</p>
              <div className="review-author">
                <strong>{r.author}</strong>, {r.timeAgo}
              </div>
            </div>
          ))}
        </div>
        <button className="arrow-btn right" onClick={() => scroll("right")}>▶</button>
      </div>
      <div className="review-summary">
        Rated <strong>4.8</strong> / 5 based on <strong>1,360</strong> reviews. Showing our 5-star reviews.
        <div className="trustpilot-logo">
          <span>Trustpilot</span>
        </div>
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
    // Add your navigation logic here
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
    <section className="rsvp-landing">
      <div className="rsvp-container">
        <div className="rsvp-content">
          <div className="rsvp-left">
            <h1 className="rsvp-title">
              Turn any invitation into<br />
              an online <span className="rsvp-highlight">RSVP</span>
            </h1>
            
            <div className="rsvp-features">
              {features.map((feature, index) => (
                <div key={index} className="rsvp-feature">
                  <span className="rsvp-feature-icon">{feature.icon}</span>
                  <span className="rsvp-feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <button 
              className="rsvp-browse-btn" 
              onClick={handleBrowseInvitations}
            >
              Browse invitations
            </button>
          </div>
          
          <div className="rsvp-right">
            <img 
              src="/public/LandingPage/playing_8.png" 
              alt="RSVP Interface Mockup" 
              className="rsvp-mockup-image"
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
