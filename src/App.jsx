
import React from 'react'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Login, SignUp, HomeLayout } from './pages'

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
    path: '/SignUp',
    element: <SignUp/>,
  },
])

const App = () => {
  return <RouterProvider router={router}/>

 
  
}

export default App