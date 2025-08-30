// Footer.jsx
import { FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-rose-600 text-white py-10 px-5 font-sans" style={{backgroundColor: '#A55578'}}>
      <div className="flex flex-wrap justify-between border-b border-white pb-8">
        {/* Footer Branding */}
        <div className="flex-1 min-w-[250px] mb-5">
          <h2 className="font-serif text-3xl mb-2.5 font-normal">EazyInvites</h2>
          <p className="text-base mb-5 max-w-xs leading-relaxed">
            The future of events is here - EazyInvites, powered by AI.
          </p>
          <div className="flex gap-4 text-2xl flex-wrap items-center mt-2.5">
            <FaLinkedinIn className="cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:text-gray-300" />
            <FaInstagram className="cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:text-gray-300" />
            <FaYoutube className="cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:text-gray-300" />
            <FaXTwitter className="cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:text-gray-300" />
            <FaFacebookF className="cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:text-gray-300" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-2 flex-wrap justify-between gap-8 min-w-[300px]">
          <div className="flex flex-col min-w-[120px]">
            <h4 className="font-bold mb-2.5">Company</h4>
            <Link to="/about-us" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              About Us
            </Link>
            <Link to="/contact-us" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Contact Us
            </Link>
            <Link to="/help" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Help
            </Link>
          </div>
          
          <div className="flex flex-col min-w-[120px]">
            <h4 className="font-bold mb-2.5">Product</h4>
            <Link to="/blog" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Blogs
            </Link>
            <Link to="/pricing" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Pricing
            </Link>
            <Link to="/faq" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              FAQ's
            </Link>
          </div>
          
          <div className="flex flex-col min-w-[120px]">
            <h4 className="font-bold mb-2.5">Website</h4>
            <a href="#" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Chat Support
            </a>
            <a href="#" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Report Bug
            </a>
          </div>
          
          <div className="flex flex-col min-w-[120px]">
            <h4 className="font-bold mb-2.5">Support</h4>
            <Link to="/refund-policy" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Refund Policy
            </Link>
            <Link to="/terms-conditions" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Terms & Condition
            </Link>
            <Link to="/shipping-policy" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Shipping Policy
            </Link>
            <Link to="/privacy-security" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-white no-underline mb-2 text-sm hover:underline transition-all duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-gray-100">
        <p>© 2025 EazyInvites. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
