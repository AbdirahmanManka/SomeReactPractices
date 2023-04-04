import React, { useState } from 'react'
import {Button} from 'antd'
import './Counter.css'

function Counter() {
    const [count, setCount]=useState(0);
    // const increment=()=>{
    //     setCount(count+1);
    //     console.log(count)

    // }
    const decrement=()=>{
        setCount(count-1)
        console.log(count)


    }
  return (
    <div className='count'>
        <h4>{count}</h4>

        <Button onClick={()=>setCount(count+1)} style={{marginLeft:"100px", backgroundColor:"beige",width:"50%"}}>Increment+</Button>
        <Button onClick={decrement} style={{marginLeft:"100px", backgroundColor:"orange",width:"50%",marginTop:"100px"}}>Decrement-</Button>
      
    </div>
  )
}


export default Counter


