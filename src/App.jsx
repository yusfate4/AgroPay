
import React from 'react'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

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
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/login',
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
  },
])

const App = () => {
  return <RouterProvider router={router}/>

 
  
}

export default App