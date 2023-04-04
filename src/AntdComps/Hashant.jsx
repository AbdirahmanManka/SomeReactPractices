import React from "react";

import './Hash.css'
import { Layout, Typography, Col, Row, Button, Form, Input, Image } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const Hashant = () => (
  <Layout className="Container">
    <Content >
      <Row className="Grid">
        <Col span={16} className="col-1">
          <Image src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800" preview={false} className="Image" />
        </Col>
        <Col span={8} className="col-2"  style={{backgroundColor:"grey"}}>
          <Content className="col-2-body">
            
           

            <Form>
              <Input style={{borderRadius:"0"}} className="Input" placeholder="Name" type="text" />
              <Input style={{borderRadius:"0"}}  className="Input" placeholder="Email" type="email" />
              <Input.Password style={{borderRadius:"0"}} className="Input" placeholder="Password" type="password" />
              <Button type="primary" block className="Button">Create Account</Button>
            </Form>
          
       
          </Content>
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default Hashant;
