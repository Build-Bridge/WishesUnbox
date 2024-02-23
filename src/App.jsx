import Dashboard from "./sections/Dashboard";
import LoginPage from "./sections/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Signup from "./sections/SignupPage";
import LandingPage from "./sections/LandingPage";
import DashboardCardList from "./components/Dashboard/DashboardCardList";

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
        // Replace this with the actual child component and correct path
        path: "/dashboard/cardlist",
        element: <DashboardCardList />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </>
  );
}

export default App;
