import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ForgotPassword from "./components/auth/ForgotPassword";
import VerifyEmail from "./components/auth/VerifyEmail";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth Routes */}
        <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
        <Route path="/signup" element={<><Navbar /><Signup /><Footer /></>} />
        <Route path="/forgot-password" element={<><Navbar /><ForgotPassword /><Footer /></>} />
        <Route path="/verify-email" element={<><Navbar /><VerifyEmail /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
