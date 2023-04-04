import { Typography,Button } from 'antd'
import { useNavigate} from 'react-router-dom'

import React from 'react'
// import Calendly from '../Calendly/Calendly'

function Contact() {
    const navigate = useNavigate();
    const handleClick=()=>{
      navigate('/Calendly')
    }
  return (
    <div>
        <Typography.Text>Contacts +25470987656</Typography.Text>
      
      <Button  style={{alignItems:"centre", justifyContent:"centre",display:"flex",marginLeft:"200px",marginTop:"300px"}} onClick={handleClick}>Book a meeting</Button>

      
    </div>
  )
}

export default Contact
