import React from 'react'
import Header from '../components/header/header.jsx'
import Footer from '../components/footer/footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
       <Header/>
       <Outlet/>
       <Footer/>
    </>
  )
}
