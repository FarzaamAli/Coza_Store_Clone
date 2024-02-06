import { Menu } from 'antd'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const items=[
  {
    label:"Home",
    key: "/"
  },
  {
    label:"Shop",
    key: "/Shop"
  },
  {
    label:"Features",
    key: "/Feature"
  },
  {
    label:"Blog",
    key: "/Blog"
  },
  {
    label:"About",
    key: "/About"
  },
  {
    label:"Contact",
    key: "/Contact"
  },
  
]

export default function Header() {
  const navigate = useNavigate();
  const clickHandle = ({key})=>{
    console.log(key)
    navigate(key);
    
  }
  return (
    <>
      <Menu items={items} mode="horizontal" onClick={clickHandle}/>
    </>
  )
}
