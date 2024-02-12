import SignupPage from "./sections/signupPage";
import LoginPage from "./sections/loginPage";
import LandingPage from "./sections/landingPage";
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
    </>
  );
}

export default App;
