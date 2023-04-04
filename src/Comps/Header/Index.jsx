import React from 'react'
import { Badge, Image, Space, Typography } from 'antd';
import smartPayLogo from '../../Assets/smart_pay_logo.png'
import {UserOutlined} from '@ant-design/icons';

function AppHeader() {
  return (
    <div className='AppHeader'>
      <Image width={80} preview={false} className={"logo"} alt={"smart pay logo"} src={smartPayLogo}></Image>
      <Typography.Title>
        Payment Dashboard                             
      </Typography.Title>
      <Space>
      <UserOutlined />
      </Space>
    </div>
  )
}

export default AppHeader;