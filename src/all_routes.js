import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Products from './pages/products'
import Cars from './pages/cars'
import About from './pages/About'
import Blog from './pages/Blog'
import HelicopterBooking from './pages/HelicopterBooking'
import YachtBooking from './pages/YachtBooking'
export default function all_routes() {
  let  all_allroutes = createBrowserRouter(
    [
        {
            path:'/',
            element:<App />

        },
        {
            path:'p',
            element: <Products />

        },
        {
          path:'c',
          element: <Cars />
        }
        ,{
          path:'about',
          element: <About />
        },
        {
          path:'blog',
          element: <Blog />
        },{
          path:'helicopter',
          element:<HelicopterBooking   />     },
          {
            path:'yacht',
            element:<YachtBooking   />     }
    ]
  )
  return all_allroutes;

}