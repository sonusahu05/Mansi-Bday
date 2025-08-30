import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-[100px] mb-10 px-5 text-[#2a2f3b] font-['Arial',sans-serif]">
      <nav className="text-sm flex items-center gap-2 mb-[30px] font-['Arial',sans-serif]" aria-label="breadcrumb">
        <Link to="/" className="text-[#bfbfbf] cursor-pointer transition-colors duration-300 no-underline hover:text-[#7a7a7a]">Home</Link>
        <span className="block text-[#bfbfbf]"> &gt; </span>
        <span className="font-semibold text-[#3b4454]">Terms & Conditions</span>
      </nav>

      <h1 className="text-[2rem] font-bold mb-[30px] text-black">Terms and Conditions</h1>

<div className="space-y-5">
  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    Welcome to EazyInvites. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    Please read these terms carefully. If you do not agree to these terms, you should not use our services.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    <strong className="font-semibold">Use of Service:</strong> You agree to use EazyInvites for lawful purposes only. You must not use the platform for any illegal, unauthorized, or harmful activities.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    <strong className="font-semibold">Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately if you suspect any unauthorized use.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    <strong className="font-semibold">Intellectual Property:</strong> All content, trademarks, logos, and data on this site are the property of EazyInvites Software Pvt Ltd and are protected by applicable intellectual property laws.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    <strong className="font-semibold">Payment and Refunds:</strong> Payments made for EazyInvites services are non-refundable unless otherwise stated. We encourage you to use our free trial and demo resources before making a purchase.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    <strong className="font-semibold">Termination:</strong> We reserve the right to suspend or terminate your access to the service at any time, without prior notice, if you violate these terms or engage in harmful behavior.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    <strong className="font-semibold">Limitation of Liability:</strong> EazyInvites shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the platform or inability to use the services.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    <strong className="font-semibold">Changes to Terms:</strong> We may update these terms from time to time. Continued use of the service constitutes acceptance of any changes. Please review this page periodically.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    For any questions or concerns regarding these terms, please contact our support team.
  </p>

  <p className="text-[1.1rem] leading-[1.7] text-[#2a2f3b]">
    Sincerely, <br />
    The EazyInvites Team <br />
    EazyInvites Software Pvt Ltd
  </p>
</div>

    </div>
  );
};

export default TermsAndConditions;
