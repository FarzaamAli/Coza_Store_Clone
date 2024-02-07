import { Drawer, Flex } from 'antd'
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch, CiHeart, CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Avatar, Badge, Space } from 'antd';
import React, {useState} from 'react'
import Drawers from '../../Drawer/Drawers';

function LeftMenu({method, value}) {
  const [favriote, setFavriote] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
      setOpen(true);
  };
  const onClose = () => {
      setOpen(false);
  };


  const handlerShopCart = () => {
    setFavriote(true)
  };

  function closeFavriote() {
    setFavriote(false)
  }

  return (
    <Flex justify='center' align='center'>
      <div>
        <Space size="large">
          <Badge count={9}>
            <CiHeart size={26} cursor={"pointer"} onClick={showDrawer} />
          </Badge>
            <Drawers method={onClose} value={open} item={"Favriote"}/>
          <Badge count={9}>
            <FaCartShopping size={26} cursor={"pointer"} onClick={handlerShopCart} />
          </Badge>
          <Drawers method={closeFavriote} value={favriote} item={"Card"}/>
          <div className='mobile-toggle'>
            <button onClick={method}>
              {
                value ? <IoMdClose size={25} /> : <CiMenuBurger size={25} />
              }
            </button>
          </div>
        </Space>
      </div>
    </Flex>
  )
}

export default LeftMenu