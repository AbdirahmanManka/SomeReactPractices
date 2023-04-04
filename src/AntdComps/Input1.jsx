import React from 'react'
import {UserOutlined} from '@ant-design/icons'
import {Input} from 'antd'

function Input1() {
  return (
    <div className='Input1'>
        <Input
        placeholder='Name'
        maxLength={18}
        prefix={<UserOutlined/>}
        allowClear
       style={{width:"200px"}}
        
        
       / >
        
    
      
    </div>
  )
}

export default Input1
