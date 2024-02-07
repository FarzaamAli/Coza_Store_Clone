import {Flex} from 'antd'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import Logo from "../../../assets/images/logo.png"
import React, { useState } from 'react'

function index() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Flex gap="middle" justify='space-between' align='center'>
        <div className='logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='menu'>
          <RightMenu mode={"horizontal"} />
        </div>
        <div>
          <LeftMenu method={toggleNavbar} value={isOpen} />
        </div>
      </Flex>

      {/* Mobile Toggle Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <RightMenu mode={"vertical"} />
        </div>
      )}
    </>
  )
}

export default index