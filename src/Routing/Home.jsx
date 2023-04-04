import { Typography } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import './Home.css'
import React from 'react'

function Home() {
  return (
    <div >

       
        <nav className='navbar'>
        <ul className='dropdown'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/About'>
            <li>About</li>
          </Link>
          <Link to='/Contact'>
            <li>Contact</li>
          </Link>
          <Link to='/Men'>
            <li>Men</li>
          </Link>
        </ul>
      </nav>
      <Outlet/>
      
    </div>
  )
}

export default Home
