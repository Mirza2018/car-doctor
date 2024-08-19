import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import Checkout from './Pages/Checkout/Checkout';
import Register from './Pages/Register/Register';
import Booking from './Pages/Booking/Booking';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';

import Services from './Pages/Home/Services/Services';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/ourservices',
        element: <Services></Services>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/booking',
        element: <PrivetRoute><Booking></Booking></PrivetRoute>
      },
      {
        path: '/ourservices/checkout/:id',
        element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
        loader: ({ params }) => fetch(`https://car-doctor-server-538k.onrender.com/checkout/${params.id}`)
      }
    ]
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <div className='max-w-7xl mx-auto'>
    <AuthProvider><React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode></AuthProvider>
  </div>

);