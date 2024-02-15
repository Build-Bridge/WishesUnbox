import LandingPage from "./sections/landingPage";
import Dashboard from "./sections/Dashboard";
import SignupPage from "./sections/SignupPage";
import LoginPage from "./sections/LoginPage";
import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Routes>
          {/* Will have to change the signup path later */}
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ParallaxProvider>
      <Routes>
        {/* Will have to change the signup path later */}
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
