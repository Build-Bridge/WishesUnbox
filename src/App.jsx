import Dashboard from "./sections/Dashboard";
import LoginPage from "./sections/LoginPage";
import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Signup from "./sections/SignupPage";
import LandingPage from "./sections/LandingPage";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Routes>
          {/* Will have to change the signup path later */}
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
