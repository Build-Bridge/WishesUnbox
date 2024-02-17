import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import LoginPage from "./sections/LoginPage";
import Signup from "./sections/SignupPage";
import LandingPage from "./sections/LandingPage";
import Dashboard from "./sections/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/dashboard/:analytics",
          // Replace this with the actual child component
          element: <h1>Hello Analytics</h1>,
        },
      ],
    },
  ]);

  return (
    <>
      <ParallaxProvider>
        <RouterProvider router={router} />
        {/* <Routes>
          {/* Will have to change the signup path later */}
        {/* <Route exact path="/" element={<LandingPage />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        {/* </Routes> */}
      </ParallaxProvider>
    </>
  );
}

export default App;
