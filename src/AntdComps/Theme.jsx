import React,{useState}from "react";
import {
  Button,
  Select,
  Checkbox,
  Radio,
  Input,
  ConfigProvider,
  Table,
  Space,
  Switch
} from "antd";
import './Theme.css'




function Theme() {
    const [currentTheme, setcurrentTheme] = useState("light");
    const lightTheme={
        colorPrimary:"Black",
        colorTextBase:"blue",
        colorTextLightSolid:"white"

    }
    const darkTheme={
        colorPrimary:"green",
        colorTextBase:"green",
        colorTextLightSolid:"red",
       

    }
    
  return <div className="Theme">

<ConfigProvider theme={{
    token: currentTheme==="light"?lightTheme:darkTheme,

}}>
<Space direction="vertical" size={12}>
    <Radio.Group value={currentTheme} onChange={(e)=>{
        setcurrentTheme(e.target.value)
    }}>
        <Radio value={'light'}>Light</Radio>
        <Radio value={'dark'}>Dark</Radio>

    </Radio.Group>
    <Button type="primary">Theme Button</Button>
    <Radio>Male</Radio>
    <Radio>Female</Radio>
    <Checkbox>My tick</Checkbox>
    <Input placeholder="Type Here......."/>
    <Switch checkedChildren="Yes" unCheckedChildren="No"></Switch>
    <Select defaultValue={"Kenya"}   style={{ width: 120 }}  options={[
        { value: 'Somalia', label: 'Somalia' },
        { value: 'Netherlands', label: 'Netherlands' },
        { value: 'USA', label: 'USA' },
        { value: 'UK', label: 'UK', disabled: true },
        { value: 'USA', label: 'South Africa' },
        { value: 'USA', label: 'Tanzania' , disabled: true  },

        { value: 'USA', label: 'USA' },


      ]} placeholder="Choose country..."></Select>
      <Table columns={[{title:"columns",dataIndex:"col"}]} dataSource={[{col:"Abdirahman"}]} />
      <ConfigProvider theme={{inherit:false,
      token:{
        colorPrimary:"purple"
      }
      }}
      >
    <Button type="primary">Submit</Button>
    </ConfigProvider>  
    </Space>
    </ConfigProvider>
    
  </div>;
}

export default Theme;
