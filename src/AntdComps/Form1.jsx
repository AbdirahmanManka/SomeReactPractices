import React,{useState}  from'react'
import {Form,Input,Button}  from 'antd'


function Form1() {
   
  return (
    <div>
     
        <Form>
        <Form.Item label="User Name" name="username">
            <Input placeholder='User Name'></Input>

        </Form.Item>
        <Form.Item label="Password" name="password">
            <Input.Password placeholder='Password'></Input.Password>

        </Form.Item>
        <Form.Item>
            <Button block type='primary' htmlType='primary'>Log in</Button>
        </Form.Item>
        </Form>
        

    </div>
  )
}

export default Form1
