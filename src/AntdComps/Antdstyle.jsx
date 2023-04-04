import React from "react";
import { Button, Typography,  Input, Space ,Image, DatePicker} from "antd";
import "./ant.css";
// import "./override.scss"

function Antdstyle() {
  return (
    <div className="App-header">
        <Space size={20} direction="vertical">

         
          <Image src="https://images.pexels.com/photos/4417069/pexels-photo-4417069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" preview={false}  style={{borderRadius:"100%"}}/>

      <Typography.Text
        
      >
        Code with Abdirahman 
      </Typography.Text>
 
     <Typography.Text className="welcome">
       Welcome Back 
      </Typography.Text>

      <Input placeholder="Type Here"/>
      <Input placeholder="Type Here"/>
      <Button>Submit</Button>
      <DatePicker  style={{width:"60%"}} className="datePicker"/>
      </Space>

     
       
    </div>
  );
}

export default Antdstyle;
 