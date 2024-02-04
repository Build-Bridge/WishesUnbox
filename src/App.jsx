import SignupPage from "./sections/signupPage";
import LoginPage from "./sections/loginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* Will have to change the signup path later */}
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
