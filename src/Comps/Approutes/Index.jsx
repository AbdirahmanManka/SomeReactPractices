import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Admin from '../../Pages/Admin';
import Business from '../../Pages/Business/Index';
import Board from '../../Pages/Dashboard/Index';
import PRC from '../../Pages/PRC/Index';


function AppRoutes() {
  return (
    <div>
        
        <Routes>
            <Route path='/' element={<Board/>}></Route>
            <Route path='/PRC' element={<PRC/>}></Route>
            <Route path='/Business' element={<Business/>}></Route>
            <Route path='/Admin' element={<Admin/>}></Route>
            
        </Routes>
        
      
    </div>
  )
}  

export default AppRoutes;
