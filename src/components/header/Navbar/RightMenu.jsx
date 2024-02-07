import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom';

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

function RightMenu({mode}) {
  return (
    <Menu mode={mode} style={{background:"yellow"}}>
        {
          items.map((item, ind)=>{
            return(
                 <Menu.Item key={ind}>
                    <NavLink to={item.key}>
                        {item.label}
                    </NavLink>
                </Menu.Item>
            )
          })  
        }

        
      </Menu>
  )
}

export default RightMenu;