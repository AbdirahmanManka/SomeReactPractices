import { Drawer, Menu } from 'antd';
import React ,{useState}from 'react'
import {DashboardOutlined,MoneyCollectOutlined,StockOutlined,UserOutlined,SettingFilled,DollarOutlined, MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


function SideMenu() {
  const [openMenu, setOpenMenu] = useState(false)

  
  return (
    <div className='SideMenu'>
      <div className='menuIcon' style={{backgroundColor:"darkorange", height:"60px", paddingLeft:"12px" ,paddingTop:"12px"}}>
        <MenuOutlined style={{color:"white",fontSize:"30px"}}  onClick={()=>{
          setOpenMenu(true)
        }} />
      </div>
      <span className='headerMenu'>
       <AppMenu/>
       </span>
       <Drawer 
       placement='left'
       open={openMenu}
       onClose={()=>{
        setOpenMenu(false)
       }}
       closable={false} 
       bodyStyle={{backgroundColor:"bisque"}}>
        <AppMenu/>
       </Drawer>
    </div>
  )
}
function AppMenu(){
  const navigate=useNavigate()
  return(
    <Menu style={{backgroundColor:"bisque", height:"400px", borderRadius:"10px", color:"blueviolet", fontSize:"12px",border:"none"}}
       onClick={(item)=>{
        //item.key
        navigate(item.key);


       }}

        items={[{
        label:"Dashboard",
        icon:<DashboardOutlined />,
        key:'/'

       },
       {
        label:"PRC",
        icon:<DollarOutlined />,
        key:'/PRC'

       },
       {
        label:"Business Codes",
        icon:<StockOutlined />,
        key:'/Business'

       },
       {
        label:"Administration",
        icon:<SettingFilled />,
        key:'/admin',
        children: [
            {
                label:"Clients",
                icon:<UserOutlined/>,
                // key:'/Business'
        
               },
               {
                label:"Settings",
                icon:<SettingFilled/>,
                // key:'/Business'
        
               },
        ]
       }
    ]}
    mode={"inline"}
    >

       </Menu>
      
  )
}

export default SideMenu;
