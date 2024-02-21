import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      </ParallaxProvider>
    </>
  );
}

export default App;
