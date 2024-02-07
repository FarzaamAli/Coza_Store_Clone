import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Row, Col, Typography, Divider, Flex } from "antd"
import Navbar from "./Navbar"
import "../../index.css"

const { Paragraph} = Typography;



function Header() {
  // const navigate = useNavigate();
  // const clickHandle = ({key})=>{
  //   console.log(key)
  //   navigate(key);

  // }
  return (
    <header>
      <div className='container' style={{ backgroundColor: "pink" }}>
        <Row style={{ backgroundColor: "yellow"}} align={'middle'}>
          <Col span={18} style={{ backgroundColor: "red",}} >
            <Flex>
              <Paragraph >Free shipping for standard order over $100</Paragraph>
            </Flex>
          </Col>
          <Col span={6} style={{ backgroundColor: "red" }} >
            <Flex  justify='end' >
              <div>
                <Divider type="vertical" />
                  <Link to={"#"}>Help & FAQ</Link>
                <Divider type="vertical" />
                  <Link to={"#"}>My Account</Link>
                <Divider type="vertical" />
                  <Link to={"#"}>EN</Link>
                <Divider type="vertical" />
                  <Link to={"#"}>USD</Link>
                <Divider type="vertical" />
              </div>
            </Flex>
          </Col>
        </Row>
      </div>
      <div className='container'>
        <Navbar />
      </div>
    </header>
  )
}

export default Header;
