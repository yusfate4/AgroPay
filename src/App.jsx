import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Login, SignUp, HomeLayout } from "./pages";
import Navbar from "./components/LandingPage/Navbar";
import HeroSection from "./components/LandingPage/HeroSection";
import About from "./components/LandingPage/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },

  {
    path: "/landing-page",
    element: (
      <div>
        <Navbar />
        <HeroSection />
        <About />

      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
