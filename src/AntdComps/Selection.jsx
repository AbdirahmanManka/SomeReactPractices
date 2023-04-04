import React ,{useState}from 'react';
import {Select,Menu,Button,Upload} from 'antd'
import './select.css'


function Selection() {
    const teams=['Manchester United','Manchester City','Liverpool','Arsenal', 'Chelsea','PSG','FC Barcelona', 'Real Madrid','Ac Milan','Juventus','FC porto']
console.table(teams)
const [likes, setLikes] =useState(0)
function handleClick() {
  setLikes(likes +1);
  console.log("increment like count")
}
  return (
    <div className='sss'>

        <p>Which are your favourite football teams?</p>
        <Select mode='multiple'
        maxTagCount={2} 
        allowClear
        placeholder="select team" style={{width:"50%"}} className="s1">
           {teams.map((team,index)=>{
            return <Select.Option key={index} value={team}>{team}</Select.Option>
           })}
        </Select>


       ( {likes})


        <Menu
        items={[
          {label:"Home"},
          {label:"Users"},
          {label:"Dashboard"},
        ]}
        >

        </Menu>
     

      
        <Button onClick={handleClick}>Click Me</Button>
        <Upload>
          
        </Upload>
    </div>
  )
}

export default Selection
