<<<<<<< HEAD
import SignupPage from "./sections/signupPage";
import LoginPage from "./sections/loginPage";
import LandingPage from "./sections/landingPage";
=======
import SignupPage from "./sections/SignupPage";
import LoginPage from "./sections/LoginPage";
import Dashboard from "./sections/Dashboard";
>>>>>>> 141576d2ea81f9d68287b34c24b5f99fc274118e
import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
<<<<<<< HEAD
      <ParallaxProvider>
        <Routes>
          {/* Will have to change the signup path later */}
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ParallaxProvider>
=======
      <Routes>
        {/* Will have to change the signup path later */}
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
>>>>>>> 141576d2ea81f9d68287b34c24b5f99fc274118e
    </>
  );
}

export default App;
