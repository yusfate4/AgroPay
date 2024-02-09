import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Navbar from "./components/LandingPage/Navbar";
import HeroSection from "./components/LandingPage/HeroSection";
import About from "./components/LandingPage/About";


import {
  Login,
  SignIn,
  HomeLayout,
  SignUp,
  ResetPassword,
  ForgetPassword,
  SigninEmail,
  SigninNumber,
  OTP,
  RegMessage,
  PassWordMSG,
} from './pages'


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

    path: '/SignIn',
    element: <SignIn />,
  },
  {
    path: '/SignUp',
    element: <SignUp />,
  },
  {
    path: '/Reset',
    element: <ResetPassword />,
  },
  {
    path: '/Forget',
    element: <ForgetPassword />,
  },
  {
    path: '/SigninEmail',
    element: <SigninEmail />,
  },
  {
    path: '/SigninNumber',
    element: <SigninNumber />,
  },
  {
    path: '/otp',
    element: <OTP />,
  },
  {
    path: '/password',
    element: <PassWordMSG />,
  },
  {
    path: '/reg',
    element: <RegMessage />,

    path: "/SignUp",
    element: <SignUp />,

  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
