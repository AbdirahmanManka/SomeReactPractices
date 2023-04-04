import { Button } from 'antd';
import React,{useState} from 'react'
// import './clock.css'


function CounterClock() {
    const [ramadan,setRamadan]=useState(0)
    const handleClick=()=>{
        setRamadan(ramadan+1);
    }
  return (
    <div>
        <Button onClick={handleClick} style={{color:"white",backgroundColor:"blue"}}>Ramadan Count</Button>
       <div className='one'> <h1>{ramadan}</h1></div>
      
    </div>
  )
}

export default CounterClock
