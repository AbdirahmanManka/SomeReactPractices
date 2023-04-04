import React, {useState} from 'react'
import './Adkaar.css'
import {Button, Card,Space,Typography,Popconfirm,message} from 'antd'

const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Haye Kaama masaxin');
};

function Adkaar() {
  const [count, setCount] = useState(0);

  return (
    <div className='header'> 

    <Space>

    <Card className='one'>
      
        <Typography.Text className='two'>Adkaar App</Typography.Text>

<div className='count'>
<h2>{count}</h2>
</div>
<Space size={22} direction="horizontal">

<Button style={{backgroundColor:"white",color:"black",borderColor:"black"}} onClick={()=>setCount(count-1)} disabled={count===0}>Kajar</Button>
<Button style={{backgroundColor:"green",color:"black",borderColor:"white"}}onClick={()=>setCount(count+1)}>Kudar</Button>
<Button style={{backgroundColor:"red",color:"white",borderColor:"white"}} disabled={count===0}>
<Popconfirm
    title="Masax Adkaartadi oo dhan"
    description="Dhaaro inaa rabtid inaa masaxdid"
    onConfirm={()=>setCount(0) }
   
    onCancel={cancel}
    okText="Wallahi iga masax"
    cancelText="Maya"
    disabled={count===0}>
    <a href="#">Tirtir</a>
  </Popconfirm>
  
  </Button>

  

</Space>

 


    </Card>
    </Space>
      
    </div>
  )
}

export default Adkaar
