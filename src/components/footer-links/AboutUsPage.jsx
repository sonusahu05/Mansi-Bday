import React, { useState, useEffect } from 'react';

const aboutData = [
  {
    title: 'Our Mission',
    content:
      "We created EazyInvites to be a handy tool for all your social events — from birthdays and anniversaries to weddings and outings with friends and family. Our mission is to make event planning seamless and fun, with tools that engage guests and help planners stay organized.",
  },
  {
    title: 'What We Offer',
    content:
      "EazyInvites is a unique web app that helps you host your events by creating beautiful invitations, managing guests, and elevating the overall event experience. Our AI-powered platform makes creating stunning invitations effortless and engaging.",
  },
  {
    title: 'Our Vision',
    content:
      "We aim to become the ultimate solution for event planners, guests, and vendors by continuously innovating and simplifying the social event management process, making memorable moments easier to create and share.",
  },
  {
    title: 'Our Team',
    content:
      "Our team is made up of passionate developers, designers, and event enthusiasts committed to creating a smooth and enjoyable experience for all our users.",
  },
];

export default function AboutUsPage() {
  const [fadeClass, setFadeClass] = useState('opacity-0'); // Initially set to hidden

  useEffect(() => {
    // Fade-in effect when the component mounts
    setFadeClass('opacity-100 transition-opacity duration-1000');

    // Cleanup to fade-out effect when the component unmounts
    return () => {
      setFadeClass('opacity-0 transition-opacity duration-1000');
    };
  }, []);

  return (
    <div className={`max-w-4xl mx-auto px-5 py-10 font-sans text-gray-800 leading-relaxed min-h-screen ${fadeClass}`}>
      {/* Breadcrumb */}
      <nav className="text-sm mb-5 text-gray-500">
        <span>Home</span> &gt; <span className="text-gray-700 font-semibold">About Us</span>
      </nav>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-black mb-5 text-center text-gray-900 tracking-wide">
        About Us
      </h1>

      {/* Intro Paragraph */}
      <p className="max-w-3xl mx-auto mb-10 text-lg md:text-xl text-center text-gray-600 font-medium leading-loose">
        We created EazyInvites to be a handy tool for all your social events whether it's a birthday, an outing with friends and family, an anniversary, or even a wedding. EazyInvites aims to make planning social events fun and be the ultimate solution for planners, guests, and vendors.
      </p>

      {/* Content Sections */}
      <div className="flex flex-col gap-9">
        {aboutData.map(({ title, content }, index) => (
          <section 
            key={index} 
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-3 text-gray-900 tracking-wide">
              {title}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {content}
            </p>
          </section>
        ))}
      </div>

      {/* Add some bottom spacing for better UX */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          Ready to create amazing events? Let's get started!
        </p>
      </div>
    </div>
  );
}
