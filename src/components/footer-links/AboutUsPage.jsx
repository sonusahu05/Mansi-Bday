// AboutUsPage.jsx
import React from 'react';
import './AboutUsPage.css';

const aboutData = [
  {
    title: 'Our Mission',
    content:
      "We created Samaro to be a handy tool for all your social events — from birthdays and anniversaries to weddings and outings with friends and family. Our mission is to make event planning seamless and fun, with tools that engage guests and help planners stay organized.",
  },
  {
    title: 'What We Offer',
    content:
      "Samaro is a unique web app that helps you host your events by adding guests, sharing and collecting photos, and elevating the overall event experience. Since everyone uses WhatsApp, our bot lets you use most features directly on WhatsApp without downloading any other app.",
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
  return (
    <div className="about-wrapper">
      <nav className="breadcrumb">
        <span>Home</span> &gt; <span className="breadcrumb-current">About Us</span>
      </nav>

      <h1 className="about-title">About Us</h1>

      <p className="about-intro">
        We created Samaro to be a handy tool for all your social events whether it's a birthday, an outing with friends and family, an anniversary, or even a wedding. Samaro aims to make planning social events fun and be the ultimate solution for planners, guests, and vendors.
      </p>

      <div className="about-content">
        {aboutData.map(({ title, content }, index) => (
          <section key={index} className="about-section">
            <h2 className="section-title">{title}</h2>
            <p className="section-content">{content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
