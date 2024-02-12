import axios from "axios";

const API_URL = "https://wishesunbox-backend.onrender.com/";

// Signup user
const signup = async (userData) => {
  const response = await axios.post(API_URL + "signup", userData);

  // Save the user to the database
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  // Save the user to the database
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout User
const logout = async () => {
  const response = await axios.get(API_URL + "logout");

  localStorage.removeItem("user");

  return response.data;
};

// Forgotpassword
const forgotpassword = async (userData) => {
  const response = await axios.post(API_URL + "forgotpassword", userData);

  return response.data;
};

// Resetpassword
const resetpassword = async (userData) => {
  // It seems the resettoken will be add dynamically to the url
  const response = await axios.put(
    API_URL + "resetpassword/:resettoken",
    userData
  );

  return response.data;
};

// Google Auth
const googleAuth = async (userData) => {
  const response = await axios.get(API_URL + "google", userData);

  return response.data;
};

// Google Callback
const googleCallback = async () => {
  const response = await axios.get(API_URL + "google/redirect");

  return response.data;
};

const authService = {
  signup,
  login,
  logout,
  forgotpassword,
  resetpassword,
  googleAuth,
  googleCallback,
};

export default authService;
