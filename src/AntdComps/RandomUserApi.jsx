import React,{useEffect} from 'react'
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone ,UserOutlined,StarFilled,StarOutlined,StarTwoTone,MessageOutlined} from '@ant-design/icons';
import { Space } from 'antd';

function RandomUserApi() {
    useEffect(() => {
      
    }, [])
  return (
    <div>

        <h3>User .......</h3>
        <Space>
    <SmileTwoTone twoToneColor="red" spin={true} />
    <HeartTwoTone twoToneColor="green"  spin={false}/>
    <CheckCircleTwoTone twoToneColor="blue" spin={false}/>
    <UserOutlined  spin={false}/>
    <StarOutlined spin={false} />
<StarFilled  spin={false}/>
<StarTwoTone twoToneColor="#eb2f96" spin={false} />
<MessageOutlined style={{ fontSize: '16px', color: 'darkorange' }} />
  </Space>
      
    </div>
  )
}

export default RandomUserApi
