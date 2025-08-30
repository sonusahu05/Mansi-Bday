import React, { useState } from "react";

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const OfficeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21v-9a9 9 0 0 1 18 0v9"></path>
    <rect x="7" y="10" width="10" height="11" rx="2"></rect>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Simple validation logic
  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    else if (form.firstName.trim().length < 2)
      newErrors.firstName = "First name must be at least 2 characters";

    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    else if (form.lastName.trim().length < 2)
      newErrors.lastName = "Last name must be at least 2 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    )
      newErrors.email = "Email address is invalid";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="max-w-[960px] mx-auto mt-[100px] mb-[10px] px-5 pb-[60px] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-[#222] min-h-screen box-border animate-[contactFadeIn_0.8s_ease_forwards]">
      <nav className="text-sm mb-8 text-[#999] flex items-center gap-[6px]">
        <span className="cursor-pointer text-[#bbb] transition-colors duration-300 hover:text-[#666]">
          <a href="/">Home</a>
        </span>
        <span className="text-[#bbb]">›</span>
        <span className="cursor-pointer text-[#bbb] transition-colors duration-300 hover:text-[#666]">
          <a href="/contact-us" style={{ textDecoration: "none" }}>
            Contact
          </a>
        </span>
        <span className="text-[#bbb]">›</span>
        <span className="text-[#222] font-semibold">Get in Touch</span>
      </nav>

      <h1 className="text-[38px] font-black mb-3 text-center text-[#1a202c] tracking-[1.1px]">Get in Touch</h1>
      <p className="max-w-[700px] mx-auto mb-12 text-lg text-center text-[#555] font-medium leading-[1.8] opacity-0 animate-[contactFadeIn_1s_ease_0.3s_forwards]">
        We'd love to hear from you! Whether you have questions, feedback, or
        just want to say hello, feel free to reach out to us.
      </p>

      <div className="flex gap-6 mb-12 flex-wrap justify-center">
        <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] px-[30px] py-6 flex-[1_1_280px] min-w-[280px] opacity-0 translate-y-5 animate-[fadeInUp_0.7s_ease_forwards] cursor-default transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:-translate-y-[6px]" style={{ animationDelay: "0.2s" }}>
          <div className="w-9 h-9 bg-[#a55d7a] rounded-[10px] flex justify-center items-center mb-3">
            <PhoneIcon />
          </div>
          <h3 className="text-[#a55d7a] font-bold text-lg mt-[5px] mb-3 ml-10">Phone</h3>
          <p className="text-[#888] text-sm mb-3">Call us for quick support</p>
          <ul className="list-none p-0 m-0 text-[#222] text-[15px] font-medium">
            <li className="mb-2">+1 123 456 7890</li>
            <li className="mb-2">+1 987 654 3210</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] px-[30px] py-6 flex-[1_1_280px] min-w-[280px] opacity-0 translate-y-5 animate-[fadeInUp_0.7s_ease_forwards] cursor-default transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:-translate-y-[6px]" style={{ animationDelay: "0.4s" }}>
          <div className="w-9 h-9 bg-[#a55d7a] rounded-[10px] flex justify-center items-center mb-3">
            <EmailIcon />
          </div>
          <h3 className="text-[#a55d7a] font-bold text-lg mt-[5px] mb-3 ml-10">Email</h3>
          <p className="text-[#888] text-sm mb-3">Send us an email anytime</p>
          <ul className="list-none p-0 m-0 text-[#222] text-[15px] font-medium">
            <li className="mb-2">support@example.com</li>
            <li className="mb-2">info@example.com</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] px-[30px] py-6 flex-[1_1_280px] min-w-[280px] opacity-0 translate-y-5 animate-[fadeInUp_0.7s_ease_forwards] cursor-default transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:-translate-y-[6px]" style={{ animationDelay: "0.6s" }}>
          <div className="w-9 h-9 bg-[#a55d7a] rounded-[10px] flex justify-center items-center mb-3">
            <OfficeIcon />
          </div>
          <h3 className="text-[#a55d7a] font-bold text-lg mt-[5px] mb-3 ml-10">Office</h3>
          <p className="text-[#888] text-sm mb-3">Visit us at our office</p>
          <address className="not-italic font-semibold text-[15px] text-[#222] leading-6">
            3010, 1 Aerocity, NIBR Corporate Park
            <br />
            Andheri Kurla Road, Sakinaka
            <br />
            Mumbai - 400072
          </address>
        </div>
      </div>

      <form className="bg-white rounded-xl px-12 py-10 pb-[50px] shadow-[0_6px_20px_rgba(0,0,0,0.07)] max-w-[650px] mx-auto" onSubmit={handleSubmit} noValidate>
        <h2 className="font-bold text-lg mb-6 text-[#222] text-center">Send us a message</h2>
        <div className="flex gap-[18px] mb-5 flex-wrap">
          <div className="flex-1 flex flex-col">
            <label htmlFor="firstName" className="font-semibold text-sm mb-2 text-[#222]">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Your first name"
              value={form.firstName}
              onChange={handleChange}
              className={`px-[14px] py-[10px] rounded-lg border-[1.5px] text-[15px] transition-colors duration-300 resize-none font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] placeholder:text-[#bbb] placeholder:font-normal focus:border-[#a55d7a] focus:outline-none focus:shadow-[0_0_6px_rgba(165,93,122,0.4)] ${errors.firstName ? "border-[#e74c3c]" : "border-[#ccc]"}`}
            />
            {errors.firstName && (
              <small className="text-[#e74c3c] text-[13px] mt-[6px] font-semibold">{errors.firstName}</small>
            )}
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="lastName" className="font-semibold text-sm mb-2 text-[#222]">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Your last name"
              value={form.lastName}
              onChange={handleChange}
              className={`px-[14px] py-[10px] rounded-lg border-[1.5px] text-[15px] transition-colors duration-300 resize-none font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] placeholder:text-[#bbb] placeholder:font-normal focus:border-[#a55d7a] focus:outline-none focus:shadow-[0_0_6px_rgba(165,93,122,0.4)] ${errors.lastName ? "border-[#e74c3c]" : "border-[#ccc]"}`}
            />
            {errors.lastName && (
              <small className="text-[#e74c3c] text-[13px] mt-[6px] font-semibold">{errors.lastName}</small>
            )}
          </div>
        </div>

        <div className="flex gap-[18px] mb-5 flex-wrap">
          <div className="flex-[1_1_100%] flex flex-col">
            <label htmlFor="email" className="font-semibold text-sm mb-2 text-[#222]">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={`px-[14px] py-[10px] rounded-lg border-[1.5px] text-[15px] transition-colors duration-300 resize-none font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] placeholder:text-[#bbb] placeholder:font-normal focus:border-[#a55d7a] focus:outline-none focus:shadow-[0_0_6px_rgba(165,93,122,0.4)] ${errors.email ? "border-[#e74c3c]" : "border-[#ccc]"}`}
            />
            {errors.email && <small className="text-[#e74c3c] text-[13px] mt-[6px] font-semibold">{errors.email}</small>}
          </div>
        </div>

        <div className="flex gap-[18px] mb-5 flex-wrap">
          <div className="flex-[1_1_100%] flex flex-col">
            <label htmlFor="message" className="font-semibold text-sm mb-2 text-[#222]">Message</label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              className={`px-[14px] py-[10px] rounded-lg border-[1.5px] text-[15px] transition-colors duration-300 resize-none font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] min-h-[100px] placeholder:text-[#bbb] placeholder:font-normal focus:border-[#a55d7a] focus:outline-none focus:shadow-[0_0_6px_rgba(165,93,122,0.4)] ${errors.message ? "border-[#e74c3c]" : "border-[#ccc]"}`}
            />
            {errors.message && (
              <small className="text-[#e74c3c] text-[13px] mt-[6px] font-semibold">{errors.message}</small>
            )}
          </div>
        </div>

        <button className="block mx-auto mt-[26px] bg-[#a55d7a] text-white font-bold text-base px-[30px] py-3 border-none rounded-[10px] cursor-pointer tracking-[0.6px] transition-colors duration-300 w-[180px] text-center hover:bg-[#a3546a]" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
