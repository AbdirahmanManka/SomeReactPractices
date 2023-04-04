// import { Button } from 'antd';
import React from 'react'
import Adkaar from './AdkaarApp/Adkaar';
// import { Routes, Route ,useNavigate} from 'react-router-dom'
// import Calendly from './Calendly/Calendly';
import CounterClock from './Pages/PRC/CounterClock';
import Filter1 from './Pages/PRC/Filter1';
import TicTac from './Pages/PRC/TicTac';
// import About from './Routing/About';
// import Contact from './Routing/Contact';
// import Err from './Routing/Err';
// import Home from './Routing/Home';
// import Men from './Routing/Men';





function App() {

  
 

  return (
    <div className="App">
      {/* <Routes>
        
        <Route path='/' element={<Home/>}>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Calendly' element={<Calendly/>}></Route>
        <Route path='Men' element={<Men/>}></Route>
        </Route>
        <Route path='*' element={<Err/>}></Route>

      </Routes> */}
      {/* <CounterClock/>
      <TicTac/>
      <Filter1/> */}
<Adkaar/>
 
    </div>
  );
}

export default App;
