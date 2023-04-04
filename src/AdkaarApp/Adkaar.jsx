import React, {useState} from 'react'
import './Adkaar.css'
import {Button, Card,Space,Typography,Popconfirm,message} from 'antd'

const confirm = (e) => {
  console.log(e);
  message.success('Cleared votes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Not cleared');
};

function Adkaar() {
  const [count, setCount] = useState(0);

  return (
    <div className='header'> 

    <Space>

    <Card className='one'>
      
        <Typography.Text className='two'>Vote Count App</Typography.Text>

<div className='count'>
<h2>{count}</h2>
</div>
<Space size={22} direction="horizontal">

<Button style={{backgroundColor:"white",color:"black",borderColor:"black"}} onClick={()=>setCount(count-1)} disabled={count===0}>Count -1</Button>
<Button style={{backgroundColor:"green",color:"black",borderColor:"white"}}onClick={()=>setCount(count+1)}>Count +1</Button>
<Button style={{backgroundColor:"red",color:"white",borderColor:"white"}} disabled={count===0}>
<Popconfirm
    title="clear all votes"
    description="Are you sure you want to clear all the data"
    onConfirm={()=>setCount(0) }
   
    onCancel={cancel}
    okText="yes clear"
    cancelText="No don't clear"
    disabled={count===0}>
    <a href="#">Reset</a>
  </Popconfirm>
  
  </Button>

  

</Space>

 


    </Card>
    </Space>
      
    </div>
  )
}

export default Adkaar
