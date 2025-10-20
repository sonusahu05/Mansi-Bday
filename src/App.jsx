import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPage from "./components/landingpage/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><LandingPage /> </>} />
      </Routes>
    </Router>
  );
}

export default App;
