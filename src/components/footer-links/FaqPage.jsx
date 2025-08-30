import React, { useState } from 'react';
import './FaqPage.css';

const faqCategories = [
  'About EazyInvites',
  'Photographers',
  'Event Management',
  'General & Onboarding',
  'Media',
  'WhatsApp Support',
];

const faqData = [
  {
    category: 'About EazyInvites',
    question: 'What is EazyInvites?',
    answer: 'EazyInvites is an AI-powered event management platform that helps you create, customize, and manage event invitations seamlessly.',
  },
  {
    category: 'About EazyInvites',
    question: 'Why should I use EazyInvites?',
    answer: 'It simplifies event planning with automation, real-time updates, and smart guest management features.',
  },
  {
    category: 'About EazyInvites',
    question: 'How safe is my data?',
    answer: 'Your data is encrypted and stored securely on compliant cloud infrastructure.',
  },
  {
    category: 'Event Management',
    question: 'Is there any guest limit in EazyInvites events?',
    answer: 'Guest limits depend on your subscription plan. Free plans have basic limits.',
  },
  {
  category: 'Event Management',
  question: 'Can I host multiple events at the same time with EazyInvites?',
  answer: 'Yes, depending on your subscription plan, you can manage and host multiple concurrent events.',
},
{
  category: 'Event Management',
  question: 'Can I customize the event page for my guests?',
  answer: 'Absolutely! EazyInvites allows you to personalize your event page with themes, banners, and custom messages.',
},
  {
    category: 'General & Onboarding',
    question: 'How can I install the EazyInvites app?',
    answer: 'Currently, EazyInvites is accessible via browser. Mobile apps are coming soon.',
  },
  {
  category: 'General & Onboarding',
  question: 'Do I need to create an account to use EazyInvites?',
  answer: 'Yes, creating an account helps you manage your events, track guest responses, and access additional features.',
},
{
  category: 'General & Onboarding',
  question: 'Is there a tutorial or demo to help me get started?',
  answer: 'Yes, once you sign up, you’ll have access to a guided onboarding process and demo events to explore features easily.',
},
  {
    category: 'WhatsApp Support',
    question: 'Can I send invites through WhatsApp?',
    answer: 'Yes, you can share digital invites via WhatsApp directly from the dashboard.',
  },
  {
  category: 'WhatsApp Support',
  question: 'Will guests be able to RSVP through WhatsApp?',
  answer: 'Yes, the WhatsApp invite includes a direct RSVP link for guests to confirm their attendance easily.',
},
{
  category: 'WhatsApp Support',
  question: 'Can I customize the message sent via WhatsApp?',
  answer: 'Yes, you can personalize the WhatsApp message before sending invites to match your event tone.',
},
  {
    category: 'Photographers',
    question: 'Can I integrate with photographers?',
    answer: 'Yes, EazyInvites offers tools to invite, tag, and collaborate with photographers for events.',
  },
  {
  category: 'Photographers',
  question: 'Can photographers upload photos directly to the event album?',
  answer: 'Yes, photographers can upload their photos to the event gallery through a secure link provided by EazyInvites.',
},
{
  category: 'Photographers',
  question: 'Is there a limit on the number of photographers per event?',
  answer: 'No, you can invite multiple photographers to cover your event and collaborate seamlessly.',
},
  {
    category: 'Media',
    question: 'Can I upload and manage media content?',
    answer: 'Yes, you can upload images, videos, and customize your event gallery.',
  },
  {
  category: 'Media',
  question: 'What media formats are supported for upload?',
  answer: 'EazyInvites supports popular formats like JPG, PNG, MP4, and GIF for your event media.',
},
{
  category: 'Media',
  question: 'Can I control who views the media content?',
  answer: 'Yes, you can set privacy settings to restrict access to your event gallery and media.',
},
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('About EazyInvites');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredFaqs = faqData.filter((faq) => faq.category === activeCategory);

  return (
    <div className="faq-wrapper">
      <div className="breadcrumb">
        <span>Home</span> &gt; <span className="breadcrumb-current">FAQ</span>
      </div>

      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-subtitle">Find quick answers to common questions in our FAQ section</p>

      <div className="faq-categories">
        {faqCategories.map((category) => (
          <button
            key={category}
            className={`faq-category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(category);
              setOpenItems({});
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="faq-grid">
        {filteredFaqs.map((item, index) => {
          const isOpen = openItems[index];
          return (
            <div key={index} className="faq-card">
              <div className="faq-question" onClick={() => toggleItem(index)}>
                <span>{item.question}</span>
                <div className="framer-icon-container">
                  <div className={`icon minus-icon ${isOpen ? 'visible' : 'hidden'}`}>
                    <img
                      src="https://framerusercontent.com/images/ilTrUqtaRn3OV7UKGJjSNsQC1w.svg"
                      alt="Minus Icon"
                    />
                  </div>
                  <div className={`icon plus-icon ${isOpen ? 'hidden' : 'visible'}`}>
                    <img
                      src="https://framerusercontent.com/images/ROg7tkXh5h3JY9OVXT66zDJMFUw.svg"
                      alt="Plus Icon"
                    />
                  </div>
                </div>
              </div>
              {isOpen && <div className="faq-answer">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
