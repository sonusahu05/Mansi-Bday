import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

import "./Navbar.css";
import logo from "/eazyvenue-logo.svg";
import { FaSearch } from "react-icons/fa";
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
    imgSrc: "/baby-bear-47261.avif", // your Fall baby shower image
    label: "Fall baby shower",
  },
  {
    imgSrc: "/vibrant-tie-dye-50062.avif", // your Back to School parties image
    label: "Back to School parties",
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = React.useState(null);
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
      ],
      specialButton: true
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
      ],
      specialButton: true
    },
    {
      title: "Greeting cards",
      columns: [
        {
          heading: "Birthday",
          links: [
            "AI",
            "Kids",
            "Funny",
            "Milestone",
            "Belated",
            "Add a photo",
            "Family",
            "For her",
            "For him",
          ],
        },
        {
          heading: "Events & Occasions",
          links: [
            "New baby",
            "Graduation",
            "Wedding",
            "Anniversary",
            "Retirement",
            "Engagement",
            "Bar Mitzvah",
            "New home",
          ],
        },
        {
          heading: "Thank you",
          links: [
            "General",
            "Graduation",
            "Teacher appreciation",
            "For support",
            "Wedding",
            "Birthday",
            "Baby",
            "Baptism",
          ],
        },
        {
          heading: "Thoughts & Feelings",
          links: [
            "Get well",
            "Sympathy",
            "Love & Romance",
            "Congratulations",
            "Good luck",
            "Sorry",
            "Miss you",
            "Farewell & goodbye",
          ],
        },
        {
          heading: "Holidays",
          links: [
            "Grandparents day",
            "Rosh Hashanah",
            "Boss day",
            "Halloween",
            "Christmas",
            "Diwali",
            "Veterans day",
            "Thanksgiving",
          ],
        },
        {
          heading: "Announcements",
          links: [
            "Graduation",
            "Memorial",
            "Save the date",
            "Engagement",
            "Wedding",
            "Pregnancy",
            "Birth",
            "Moving",
          ],
        },
      ],
      specialButtons: true, // To indicate presence of two buttons on right side
    },

    // other menu items ...
  ];


  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200); // 200ms delay before closing dropdown
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
  <Link to="/">
    <img src={logo} alt="Logo" />
  </Link>
</div>

      <nav className="navbar__menu">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className="navbar__menu-item"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className={activeMenu === item.title ? "active" : ""}>
              {item.title}
            </a>
            {activeMenu === item.title && (
              <div
                className="navbar__dropdown"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.columns.map((col) => (
                  <div key={col.heading} className="navbar__dropdown-column">
                    <strong>{col.heading}</strong>
                    {col.links.map((link) => (
                      <a key={link} href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div
          className="navbar__menu-item"
          onMouseEnter={() => handleMouseEnter("Trending")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className={activeMenu === "Trending" ? "active" : ""}>
            Trending
          </a>

          {activeMenu === "Trending" && (
            <div
              className="navbar__dropdown trending-dropdown"
              onMouseEnter={() => handleMouseEnter("Trending")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="trending-dropdown__links">
                {trendingLinks.map((link) => (
                  <a key={link} href="#" className="trending-dropdown__link">
                    {link}
                  </a>
                ))}
              </div>

              <div className="trending-dropdown__cards">
                {trendingCards.map(({ imgSrc, label }) => (
                  <div key={label} className="trending-dropdown__card">
                    <img src={imgSrc} alt={label} />
                    <div className="trending-dropdown__card-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="navbar__search">
          <FaSearch />
        </div>
      </nav>

      <div className="navbar__actions">
        <button className="navbar__login">Log in</button>
        <button className="navbar__premium">Go Premium</button>
      </div>
    </header>
  );
};

export default Navbar;
