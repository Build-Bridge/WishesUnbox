import SignupPage from "./sections/SignupPage";
import LoginPage from "./sections/LoginPage";
import Dashboard from "./sections/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>login
        {/* Will have to change the signup path later */}
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
