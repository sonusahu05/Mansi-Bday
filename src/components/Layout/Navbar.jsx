import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/brand/eazyvenue-logo.svg";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const trendingLinks = [
  "Fall baby shower",
  "Picnic invites", 
  "Teacher appreciation cards",
  "Back to school parties",
  "Fall wedding invites",
  "Housewarming invites",
];

const trendingCards = [
  {
    imgSrc: "/baby-bear-47261.avif",
    label: "Fall baby shower",
  },
  {
    imgSrc: "/vibrant-tie-dye-50062.avif",
    label: "Back to School parties",
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  
  const menuItems = [
    {
      title: "Wedding",
      columns: [
        { heading: "Wedding Invites", links: ["AI", "Elegant", "Rustic", "Floral & Botanical", "Modern", "Simple"] },
        { heading: "Save the Date", links: ["Rustic", "Simple", "Destination", "Photo"] },
        { heading: "Party", links: ["Engagement party", "Bridal shower", "Bachelor party"] },
        { heading: "Stationery", links: ["RSVP cards", "Bridesmaid cards", "Announcements"] },
        { heading: "Greetings", links: ["Wedding", "Thank you", "Engagement"] },
      ]
    },
    {
      title: "Birthday",
      columns: [
        { heading: "Invitations", links: ["Kids", "Adult", "Milestone", "Theme"] },
        { heading: "Decorations", links: ["Banners", "Balloons", "Tableware", "Lighting"] },
        { heading: "Party Ideas", links: ["Games", "Food", "Music", "Costumes"] },
        { heading: "Gifts", links: ["Toys", "Gift Cards", "Custom Gifts"] },
      ]
    },
    {
      title: "Baby & Kids",
      columns: [
        {
          heading: "Baby",
          links: ["Baby shower", "Gender reveal", "Baby sprinkle", "Sip & See"]
        },
        {
          heading: "Baby shower themes",
          links: [
            "Floral", "Woodland", "Butterfly", "Safari", "Princess",
            "Rustic", "Elephant", "Rainbow", "Dinosaur", "Fiesta"
          ]
        },
        {
          heading: "Announcements",
          links: ["Birth", "Pregnancy"]
        },
        {
          heading: "Religious",
          links: ["Baptism & Christening", "Bar & Bat Mitzvah", "First communion"]
        },
        {
          heading: "Birthday invites",
          links: ["Kids", "1st birthday", "Sweet 16", "Quinceanera"]
        }
      ]
    },
    {
      title: "Party",
      columns: [
        {
          heading: "Celebrations",
          links: [
            "AI", "Graduation party", "Anniversary", "Retirement & Farewell",
            "Engagement party", "Baby shower", "Rehearsal dinner",
            "Bridal shower", "Bachelor party", "Memorial", "Save the date"
          ]
        },
        {
          heading: "Gatherings",
          links: [
            "Housewarming", "Dinner party", "Cocktail party", "Lunch & Brunch",
            "Family reunion", "Back to school", "Sleepover", "BBQ",
            "Potluck", "Summer & Pool", "Luau", "Sports & Games", "Picnic"
          ]
        },
        {
          heading: "Holidays",
          links: [
            "Labor day", "Rosh Hashanah", "Halloween", "Diwali",
            "Christmas", "Thanksgiving", "New year", "Hanukkah"
          ]
        },
        {
          heading: "Religious",
          links: ["Baptism & Christening", "Bar & Bat Mitzvah", "First communion"]
        },
        {
          heading: "Business events",
          links: [
            "Gala", "Grand opening", "Open house", "Cocktail party",
            "Dinner party", "Retirement", "Save the date"
          ]
        }
      ]
    },
    {
      title: "Greeting cards",
      columns: [
        {
          heading: "Birthday",
          links: [
            "AI", "Kids", "Funny", "Milestone", "Belated", "Add a photo",
            "Family", "For her", "For him"
          ]
        },
        {
          heading: "Events & Occasions",
          links: [
            "New baby", "Graduation", "Wedding", "Anniversary", "Retirement",
            "Engagement", "Bar Mitzvah", "New home"
          ]
        },
        {
          heading: "Thank you",
          links: [
            "General", "Graduation", "Teacher appreciation", "For support",
            "Wedding", "Birthday", "Baby", "Baptism"
          ]
        },
        {
          heading: "Thoughts & Feelings",
          links: [
            "Get well", "Sympathy", "Love & Romance", "Congratulations",
            "Good luck", "Sorry", "Miss you", "Farewell & goodbye"
          ]
        },
        {
          heading: "Holidays",
          links: [
            "Grandparents day", "Rosh Hashanah", "Boss day", "Halloween",
            "Christmas", "Diwali", "Veterans day", "Thanksgiving"
          ]
        },
        {
          heading: "Announcements",
          links: [
            "Graduation", "Memorial", "Save the date", "Engagement",
            "Wedding", "Pregnancy", "Birth", "Moving"
          ]
        }
      ]
    }
  ];

  const handleMouseEnter = (menuTitle) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuTitle);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Main Navbar - Fixed with height matching CSS (72px) */}
      <header className="fixed top-0 left-0 right-0 h-[72px] bg-white flex items-center justify-between px-4 md:px-6 lg:px-10 shadow-md z-[1000] border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-[40px] md:h-[50px]" />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 font-semibold text-sm lg:text-base flex-1 justify-center max-w-6xl mx-4">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`text-gray-800 hover:text-[#9b4de0] transition-all duration-300 ${
                  activeMenu === item.title ? 'bg-gray-100 rounded-[30px] px-5 py-1.5 font-bold text-[#9b4de0]' : ''
                }`}
              >
                {item.title}
              </button>
              
              {/* Full-width dropdown matching CSS style */}
              {activeMenu === item.title && (
                <div
                  className="fixed left-0 top-[72px] w-full bg-white shadow-lg z-[10000] text-sm text-[#222] border-t border-gray-100"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-w-7xl mx-auto px-8 py-8">
                    <div className={`grid gap-8 ${
                      item.title === "Greeting cards" ? "grid-cols-6" : 
                      item.title === "Party" ? "grid-cols-5" : 
                      item.title === "Baby & Kids" ? "grid-cols-5" : 
                      "grid-cols-5"
                    }`}>
                      {item.columns.map((col) => (
                        <div key={col.heading} className="flex flex-col gap-2 min-w-[150px]">
                          <h4 className="font-bold mb-3 text-gray-900 text-sm uppercase tracking-wide">
                            {col.heading}
                          </h4>
                          {col.links.map((link) => (
                            <a
                              key={link}
                              href="#"
                              className="text-[#222] font-normal leading-tight hover:text-[#9b4de0] transition-colors duration-200 py-1 hover:bg-gray-50 px-2 rounded"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Trending Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("Trending")}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`text-gray-800 hover:text-[#9b4de0] transition-all duration-300 ${
                activeMenu === "Trending" ? 'bg-gray-100 rounded-[30px] px-5 py-1.5 font-bold text-[#9b4de0]' : ''
              }`}
            >
              Trending
            </button>

            {activeMenu === "Trending" && (
              <div
                className="fixed left-0 top-[72px] w-full bg-white shadow-lg z-[10000] border-t border-gray-100"
                onMouseEnter={() => handleMouseEnter("Trending")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-8 py-8">
                  <div className="flex gap-12">
                    {/* Trending links */}
                    <div className="flex-1 flex flex-col gap-3">
                      <h4 className="font-bold mb-3 text-gray-900 text-sm uppercase tracking-wide">
                        Trending Now
                      </h4>
                      {trendingLinks.map((link) => (
                        <a
                          key={link}
                          href="#"
                          className="text-[#222] font-semibold py-2 hover:text-[#9b4de0] transition-all duration-300 cursor-pointer hover:bg-gray-50 px-2 rounded"
                        >
                          {link}
                        </a>
                      ))}
                    </div>

                    {/* Trending cards */}
                    <div className="flex-1 flex gap-6 justify-center items-start">
                      <h4 className="font-bold mb-3 text-gray-900 text-sm uppercase tracking-wide sr-only">
                        Featured Templates
                      </h4>
                      {trendingCards.map(({ imgSrc, label }) => (
                        <div 
                          key={label} 
                          className="bg-white rounded-2xl shadow-sm overflow-hidden w-[160px] cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col items-center text-center pb-4 border border-gray-100"
                        >
                          <img 
                            src={imgSrc} 
                            alt={label} 
                            className="w-full h-32 border-b border-gray-100 rounded-t-2xl object-cover" 
                          />
                          <div className="mt-3 font-semibold text-sm text-[#222] px-2">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search Icon */}
          <div className="bg-gray-200 p-2.5 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition-colors duration-200">
            <FaSearch className="text-base text-gray-700" />
          </div>
        </nav>

        {/* Right side actions */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* Desktop (md and up) */}
        <div className="max-md:hidden flex items-center gap-3 lg:gap-4">
          <Link
            to="/login"
            className="bg-gray-100 text-gray-600 px-4 py-3 rounded-[30px] font-semibold text-center transition-colors duration-200 hover:bg-gray-200"
          >
            Log in
          </Link>

          <button className="bg-[#9b4de0] text-white border-2 border-[#9b4de0] rounded-[30px] px-5 lg:px-6 py-2.5 font-bold cursor-pointer hover:bg-[#8a42c7] hover:border-[#8a42c7] transition-colors duration-200 whitespace-nowrap text-sm lg:text-base shadow-lg">
            Go Premium
          </button>
        </div>

        {/* Mobile (below md) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-800 hover:text-[#9b4de0] transition-colors duration-200"
        >
          {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-white shadow-xl z-[999] max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="px-6 py-6 space-y-6">
            {/* Mobile Menu Items */}
            {menuItems.map((item) => (
              <div key={item.title} className="border-b border-gray-200 pb-4">
                <button 
                  onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 hover:text-[#9b4de0] transition-colors duration-200"
                >
                  <span>{item.title}</span>
                  <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === item.title ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeMenu === item.title && (
                  <div className="mt-4 space-y-4">
                    {item.columns.map((col) => (
                      <div key={col.heading} className="ml-4">
                        <h4 className="font-semibold text-gray-800 text-sm mb-2">{col.heading}</h4>
                        <div className="space-y-1">
                          {col.links.map((link) => (
                            <a
                              key={link}
                              href="#"
                              className="block text-sm text-gray-600 hover:text-[#9b4de0] py-1 transition-colors duration-200"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Trending */}
            <div className="border-b border-gray-200 pb-4">
              <button 
                onClick={() => setActiveMenu(activeMenu === "Trending" ? null : "Trending")}
                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 hover:text-[#9b4de0] transition-colors duration-200"
              >
                <span>Trending</span>
                <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeMenu === "Trending" ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeMenu === "Trending" && (
                <div className="mt-4 ml-4 space-y-3">
                  {trendingLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-sm text-gray-600 hover:text-[#9b4de0] py-1 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  ))}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {trendingCards.map(({ imgSrc, label }) => (
                      <div key={label} className="cursor-pointer">
                        <img 
                          src={imgSrc} 
                          alt={label} 
                          className="w-full h-20 object-cover rounded-lg shadow-md" 
                        />
                        <div className="text-xs text-gray-600 mt-2 font-medium">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Login/Premium */}
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                to="/login" 
                className="bg-gray-100 text-gray-600 px-4 py-3 rounded-[30px] font-semibold text-center transition-colors duration-200 hover:bg-gray-200"
              >
                Log in
              </Link>
              <button className="bg-[#9b4de0] text-white px-4 py-3 rounded-[30px] font-semibold transition-colors duration-200 hover:bg-[#8a42c7]">
                Go Premium
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
