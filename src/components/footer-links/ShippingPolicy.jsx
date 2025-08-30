import React from 'react';
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-[100px] mb-10 px-5 text-[#2a2f3b] font-['Arial',sans-serif] opacity-0 translate-y-5 animate-[smoothFadeIn_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]">
      <nav className="text-sm flex items-center gap-2 mb-[30px] font-['Arial',sans-serif]" aria-label="breadcrumb">
        <Link to="/" className="text-[#bfbfbf] cursor-pointer transition-colors duration-300 no-underline hover:text-[#7a7a7a]">Home</Link>
        <span className="block"> &gt; </span>
        <span className="font-semibold text-[#3b4454]">Shipping Policy</span>
      </nav>

      <h1 className="text-[2rem] font-bold mb-5 text-black text-center">Shipping & Delivery Policy</h1>

<p className="text-center text-[#495763] text-base leading-6 mb-[50px] max-w-[700px] mx-auto">
  This Shipping & Delivery Policy is part of our Terms and Conditions ("Terms") and should be read alongside our main Terms & Conditions.
  Please carefully review this Shipping & Delivery Policy when purchasing our products or subscriptions. This policy applies to any order you place with us.
</p>

<section className="mb-[30px] text-[#495763]">
  <h2 className="font-bold text-[1.125rem] mb-[10px] text-black">WHAT ARE MY SHIPPING & DELIVERY OPTIONS?</h2>
  <p className="mb-[10px] leading-6">Free Instant Delivery</p>
  <p className="mb-[10px] leading-6">As a SaaS business based in India, EazyInvites offers free instant delivery on all subscriptions and services across India.</p>
</section>

<hr className="border-none border-t border-[#d2d9df] my-[30px]" />

<section className="mb-[30px] text-[#495763]">
  <h2 className="font-bold text-[1.125rem] mb-[10px] text-black">HOW IS MY SUBSCRIPTION FULFILLED?</h2>
  <p className="mb-[10px] leading-6">Subscriptions and service purchases are activated immediately upon successful billing and payment confirmation.</p>
</section>

<hr className="border-none border-t border-[#d2d9df] my-[30px]" />

<section className="mb-[30px] text-[#495763]">
  <h2 className="font-bold text-[1.125rem] mb-[10px] text-black">DO YOU DELIVER INTERNATIONALLY?</h2>
  <p className="mb-[10px] leading-6">We offer worldwide delivery. Since we operate as a SaaS platform, delivery is instant and free for all international orders.</p>
  <p className="mb-[10px] leading-6">
    Please note that international deliveries may be subject to local laws, taxes, and regulations in the destination country. You are responsible for complying with such laws and any additional fees or taxes.
  </p>
</section>

<hr className="border-none border-t border-[#d2d9df] my-[30px]" />

<section className="mb-[30px] text-[#495763]">
  <h2 className="font-bold text-[1.125rem] mb-[10px] text-black">WHAT HAPPENS IF MY ORDER IS DELAYED?</h2>
  <p className="mb-[10px] leading-6">Since delivery is digital and instant, delays are uncommon. However, if any issues arise, we will notify you promptly with updated information.</p>
  <p className="mb-[10px] leading-6">
    For Indian consumers: This does not affect your statutory rights. Please refer to our Terms & Conditions for more details.
  </p>
</section>

<hr className="border-none border-t border-[#d2d9df] my-[30px]" />

<section className="mb-[30px] text-[#495763]">
  <h2 className="font-bold text-[1.125rem] mb-[10px] text-black">QUESTIONS ABOUT RETURNS?</h2>
  <p className="mb-[10px] leading-6">If you have questions about refunds or cancellations, please review our Refund and Cancellation Policy: <a href="https://www.eazyinvites.com/refund-cancellation" target="_blank" rel="noopener noreferrer" className="text-[#3b4454] underline hover:text-[#1a1a1a]">https://www.eazyinvites.com/refund-cancellation</a>.</p>
</section>

<hr className="border-none border-t border-[#d2d9df] my-[30px]" />

<section className="mb-[30px] text-[#495763]">
  <h2 className="font-bold text-[1.125rem] mb-[10px] text-black">HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
  <p className="mb-[10px] leading-6">If you have any questions or comments about this policy, please contact us by: Email: <a href="mailto:support@eazyinvites.com" className="text-[#3b4454] underline hover:text-[#1a1a1a]">support@eazyinvites.com</a></p>
</section>

    </div>
  );
};

export default ShippingPolicy;
