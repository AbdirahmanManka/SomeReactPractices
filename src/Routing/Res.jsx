import React ,{useState}from 'react'
import { Drawer, Menu } from 'antd'
import { MenuOutlined,CloseCircleOutlined } from '@ant-design/icons'
import './Res.css'
function Res() {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='res' style={{height:"100vh", backgroundColor:"#092637"}}>
        <div style={{backgroundColor:"#DB72BFFF",height:"60px"}} className="menuIcon">
            <MenuOutlined style={{color:"white" ,fontSize:"30px",paddingLeft:"12px",paddingTop:"12px"}} onClick={()=>{
                setOpenMenu(true)
            }}></MenuOutlined>
        </div>
      
    <span className='headerMenu'> <AppMenu/></span> 
      <Drawer open={openMenu}
      placement='left'
      onClose={()=>{
        setOpenMenu(false)
      }}
       closable={false} bodyStyle={{backgroundColor:"#DB72BFFF"}}>
         <CloseCircleOutlined  onClick={()=>{
            setOpenMenu(false)
         }} style={{color:"brown",fontSize:"40px"}}/>
        <AppMenu isInline/>
       
      </Drawer>
    </div>
  )
}
 const AppMenu=({isInline=false})=>{
    return (
        <Menu 
        style={{backgroundColor:"#DB72BFFF",color:"white", fontSize:"20px",border:"none"}}
        mode={isInline? "inline" :'horizontal'}
        items={[
            {
                label:"Home",
                key:"home"
            },
            {
                label:"About",
                key:"about"
            },
            {
                label:"Contact",
                key:"contact"
            },
            {
                label:"Location",
                key:"location"
            }

        ]}>

        </Menu>

    )
 }

export default Res
