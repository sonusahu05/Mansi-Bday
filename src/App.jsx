import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ForgotPassword from "./components/auth/ForgotPassword";
import VerifyEmail from "./components/auth/VerifyEmail";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import RefundPolicy from './components/footer-links/RefundPolicy';
import TermsAndConditions from './components/footer-links/TermsAndConditions';
import ShippingPolicy from "./components/footer-links/ShippingPolicy";
import PrivacySecurity from "./components/footer-links/PrivacySecurity";
import CookiePolicy from "./components/footer-links/CookiePolicy";
import BlogPage from "./components/footer-links/BlogPage";
import PricingPage from "./components/footer-links/PricingPage";
import FaqPage from "./components/footer-links/FaqPage";
import AboutUsPage from "./components/footer-links/AboutUsPage";
import ContactUs from "./components/footer-links/ContactUs";
import Help from "./components/footer-links/Help";
import LandingPage from "./components/landingpage/LandingPage";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* Default route */}
        <Route path="*" element={<> <Navbar /> <LandingPage /> <Footer /> </>} />
        <Route path="/" element={<> <Navbar /> <LandingPage /> <Footer /> </>} />

        {/* Auth Routes */}
        <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
        <Route path="/signup" element={<><Navbar /><Signup /><Footer /></>} />
        <Route path="/forgot-password" element={<><Navbar /><ForgotPassword /><Footer /></>} />
        <Route path="/verify-email" element={<><Navbar /><VerifyEmail /><Footer /></>} />
        <Route path="/refund-policy" element={<><Navbar /><RefundPolicy /><Footer /></>} />
        <Route path="/terms-conditions" element={<><Navbar /><TermsAndConditions /><Footer /></>} />
        <Route path="/shipping-policy" element={<><Navbar /><ShippingPolicy /><Footer /></>} />
        <Route path="/privacy-security" element={<><Navbar /><PrivacySecurity /><Footer /></>} />
        <Route path="/cookie-policy" element={<><Navbar /><CookiePolicy /><Footer /></>} />
        <Route path="/blog" element={<><Navbar /><BlogPage /><Footer /></>} />
        <Route path="/pricing" element={<><Navbar /><PricingPage /><Footer /></>} />
        <Route path="/faq" element={<><Navbar /><FaqPage /><Footer /></>} />
        <Route path="/about-us" element={<><Navbar /><AboutUsPage /><Footer /></>} />
        <Route path="/contact-us" element={<><Navbar /><ContactUs /><Footer /></>} />
        <Route path="/help" element={<><Navbar /><Help /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
