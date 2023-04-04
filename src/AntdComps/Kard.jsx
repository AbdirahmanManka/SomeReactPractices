import React from 'react'
import {Avatar, Button, Card} from 'antd'
import { FacebookFilled, InstagramOutlined, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'
import './Kard.css'
function Kard() {
  return (
    <div>
        <Card 
        hoverable={true}
        actions={[
            <FacebookFilled style={{color:"blue"}}/>,
            <TwitterOutlined style={{color:"skyblue"}}/>,
            <InstagramOutlined style={{color:"purple"}}/>,
            <YoutubeFilled style={{color:"red"}}/>
            
            
        ]} className="Kard"
        title="Somcoders.com"
        extra={<Button type='primary'>Details</Button>}
        cover={<div style={{
            height:"150px",
            width:"100%",
            background:"linear-gradient(#caefd7,#f5bfd7)",
            color:"black",
            fontSize:20,
            paddingTop:"20px",
            fontFamily:"monospace"
        
        }}>
           <h3 style={{marginLeft:"40px"}}>Coding Bootcamp</h3>

        </div>}
        >
            <Card.Meta
            style={{
                display:"flex",
                flexDirection:"column",
                marginTop:"-50px",
                marginLeft:"100px"
            }}
            avatar={<Avatar size={70} src={"https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}>

            </Avatar>}
                title={"Somcoders"}
                description={"Somali's Udemy"}

            >

            </Card.Meta>
            <p style={{marginTop:"20px"}}>Visit<a href="https://somcoders.com/"> Somcoders</a> Today</p>
        </Card>

      
    </div>
  )
}

export default Kard
