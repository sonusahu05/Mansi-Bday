import React, { useState } from "react";

const faqs = [
  {
    question: "How can I reset my password?",
    answer:
      "To reset your password, go to the login page and click on 'Forgot Password'. You'll receive an email with instructions.",
  },
  {
    question: "Where can I view my order history?",
    answer:
      "Your order history is available in the 'My Account' section under 'Orders'. You can track, cancel or reorder from there.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact customer support via the 'Contact Us' page or by calling our support number at +1 123 456 7890.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Returns are accepted within 30 days of purchase. Please ensure items are in original condition and packaging.",
  },
];

export default function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[800px] mx-auto mt-[100px] mb-[10px] px-5 pb-[60px] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-[#222] min-h-screen box-border animate-[helpFadeIn_0.8s_ease_forwards]">
      <nav className="text-sm mb-6 text-[#999] flex items-center gap-[6px]">
        <span className="cursor-pointer text-[#bbb] transition-colors duration-300 hover:text-[#666]"><a href="/" className="no-underline">Home</a></span>
        <span className="text-[#bbb]">›</span>
        <span className="text-[#222] font-semibold">Help</span>
      </nav>

      <h1 className="text-4xl font-black mb-5 text-center text-[#1a202c] tracking-[1.1px] md:text-[28px]">Help Center</h1>
      <p className="max-w-[600px] mx-auto mb-10 text-lg text-center text-[#555] font-medium leading-[1.7] opacity-0 animate-[helpFadeIn_1s_ease_0.3s_forwards] md:text-base">
        Find answers to common questions or get in touch with our support team.
      </p>

      <div className="mb-12">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[10px] shadow-[0_6px_18px_rgba(0,0,0,0.07)] mb-4 overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
            onClick={() => toggleFAQ(index)}
          >
            <button className="bg-[#a55d7a] text-white font-bold text-lg px-6 py-[18px] border-none w-full text-left flex justify-between items-center rounded-[10px] cursor-pointer select-none md:text-base md:px-[18px] md:py-[14px]" aria-expanded={openIndex === index}>
              {item.question}
              <span className="text-2xl leading-none select-none">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-5 text-base text-[#444] bg-[#fff5f8] border-t border-[#e2b8c9] animate-[helpFadeIn_0.5s_ease_forwards] md:text-[15px] md:px-[18px] md:py-4">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-[22px] text-[#1a202c] mb-3 font-bold">Still need help?</h2>
        <p className="text-base text-[#555]">
          Contact our support team via <a href="/contact-us" className="text-[#a55d7a] font-semibold no-underline transition-colors duration-300 hover:text-[#864b5d]">Contact Us</a> page or call us at{" "}
          <a href="tel:+11234567890" className="text-[#a55d7a] font-semibold no-underline transition-colors duration-300 hover:text-[#864b5d]">+1 123 456 7890</a>.
        </p>
      </div>
    </div>
  );
}
