import React from 'react'
import { Col, Row, Space, Flex, Input, Button, Typography} from 'antd';
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const categories = [
  {
    label: "Men",
    key: "/"
  },
  {
    label: "Women",
    key: "/"
  },
  {
    label: "Shone",
    key: "/"
  },
  {
    label: "Watches",
    key: "/"
  }
]

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <Row gutter={[32, 24]}>
          <Col className="gutter-row" span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <div>
              <Title level={5} >CATEGORIES</Title>
            </div>

            <ul>
              <Space direction='vertical' size={'middle'}>
                {
                  categories.map((item, ind) => {
                    return (
                      <li key={ind} >
                        <NavLink to={item.key}>
                          {item.label}
                        </NavLink>
                      </li>
                    )
                  })
                }
              </Space>
            </ul>
          </Col>
          <Col className="gutter-row" span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <div>
              <Title level={5} >HELP</Title>
            </div>

            <ul>
              <Space direction='vertical' size={'middle'}>
                {
                  categories.map((item, ind) => {
                    return (
                      <li key={ind}>
                        <NavLink to={item.key}>
                          {item.label}
                        </NavLink>
                      </li>
                    )
                  })
                }

              </Space>
            </ul>
          </Col>
          <Col className="gutter-row" span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <div>
              <Title level={5} >GET IN TOUCH</Title>
            </div>
            <Space direction='vertical' size={"middle"}>
              <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 7166879</p>
              <div className='Social-icon'>
                <Space size={"middle"}>
                  <FaFacebookF size={20} />
                  <FaInstagram size={20} />
                  <FaPinterestP size={20} />
                </Space>
              </div>
            </Space>
          </Col>
          <Col className="gutter-row" span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <div>
              <Title level={5} >NEWSLETTER</Title>
            </div>
            <Flex vertical gap={12}>
              <Input placeholder="Outlined" />
              <div>
                <Button type="primary" shape="round" size={"large"}>
                  SUBSCRIBE
                </Button>
              </div>
            </Flex>

          </Col>
          <Col span={24}>
            <Flex justify='center' align='center'>
              <Paragraph >Copyright ©2024 All rights reserved | Made with  by Colorlib & distributed by ThemeWagon</Paragraph>
            </Flex>
          </Col>
        </Row>


      </div>
    </footer>
  )
}
