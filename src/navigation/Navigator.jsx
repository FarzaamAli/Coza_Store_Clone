import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from '../layout/Layout';
import App from '../App'
import About from '../pages/About';
import Feature from '../pages/Feature';
import Contact from '../pages/Contact';
import Shop from '../pages/Shop';
import Blog from '../pages/Blog';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path:"/",
            element:<App/>
        },
        {
            path:"/About",
            element:<About/>
        },
        {
            path:"/Feature",
            element: <Feature/>
        },
        {
            path:"/Shop",
            element: <Shop/>
        },
        {
            path:"/Blog",
            element: <Blog/>
        },
        {
            path:"/Contact",
            element:<Contact/>
        }
      ]
    },
  ]);



export default function Navigator() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
