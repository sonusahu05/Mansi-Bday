// PrivacySecurity.jsx
import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <button className="bg-[#f0eae7] text-[#2a2f3b] px-5 py-[15px] w-full border-none rounded-[15px] text-left font-semibold text-[1.1rem] cursor-pointer flex justify-between items-center box-border transition-colors duration-300 hover:bg-[#e0d5ce]" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className="bg-[#2a2f3b] text-white font-bold rounded-full w-[30px] h-[30px] flex items-center justify-center text-[1.2rem] select-none transition-transform duration-300">{isOpen ? '-' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 bg-white mt-2 rounded-b-[15px] px-5 text-[#2a2f3b] text-[1.1rem] leading-[1.7] box-border ${isOpen ? 'max-h-[300px] py-[15px]' : 'max-h-0 py-0'}`}>
        {children}
      </div>
    </div>
  );
};

const PrivacySecurity = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-[100px] mb-10 px-5 text-[#2a2f3b] font-['Arial',sans-serif] opacity-0 translate-y-5 animate-[privacyFadeIn_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]">
      <h1 className="text-[2rem] font-bold mb-[30px] text-black text-center">Our Privacy Policy</h1>
      <p className="text-[1.1rem] leading-[1.7] mb-5 text-[#2a2f3b] max-w-[700px] mx-auto text-center">
        This privacy notice for Samaro Software Pvt Ltd (doing business as Samaro) ('Samaro', 'we', 'us', or 'our',), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you:
      </p>
      <p className="text-[1.1rem] leading-[1.7] mb-5 text-[#2a2f3b] max-w-[700px] mx-auto text-center">
        Visit our website at https://samaro.ai, or any website of ours that links to this privacy notice. Download and use our Facebook application (Samaro), or any other application of ours that links to this privacy notice.
      </p>
      <p className="text-[1.1rem] leading-[1.7] mb-5 text-[#2a2f3b] max-w-[700px] mx-auto text-center">
        Engage with us in other related ways, including any sales, marketing, or events.
      </p>
      <p className="text-[1.1rem] leading-[1.7] mb-5 text-[#2a2f3b] max-w-[700px] mx-auto text-center">
        Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at anupam@samaro.ai.
      </p>

      <div className="inline-block bg-[#e9e2df] text-[#4a4745] px-4 py-2 rounded-[20px] text-[0.9rem] my-[30px] text-center select-none font-semibold max-w-fit block mx-auto">
        <span role="img" aria-label="clock">⏲️</span> Last updated September 01, 2022
      </div>

      <h2 className="text-[1.75rem] font-bold my-[40px_0_10px_0] text-black text-center">Summary of Key Points</h2>
      <p className="text-[1.1rem] leading-[1.7] mb-[30px] text-[#2a2f3b] max-w-[700px] mx-auto text-center">
        This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.
      </p>
<div className="">{/* accordion-wrapper */}
      <AccordionItem title="What information do we collect?">
        <p>
          When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Samaro and the Services, the choices you make, and the products and features you use.
        </p>
      </AccordionItem>

      <AccordionItem title="Do we process any sensitive personal information?">
        <p>We do not process sensitive personal information.</p>
      </AccordionItem>

      <AccordionItem title="Do we receive any information from third parties?">
        <p>We do not receive any information from third parties.</p>
      </AccordionItem>

      <AccordionItem title="How do we process your information?">
        <p>
          We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
        </p>
      </AccordionItem>

      <AccordionItem title="In what situations and with which parties do we share personal information?">
        <p>We may share information in specific situations and with specific third parties.</p>
      </AccordionItem>

      <AccordionItem title="What are your rights?">
        <p>
          Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
        </p>
      </AccordionItem>

      <AccordionItem title="How do you exercise your rights?">
        <p>
          The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </p>
      </AccordionItem>
      </div>
    </div>
  );
};

export default PrivacySecurity;
