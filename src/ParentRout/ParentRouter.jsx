import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import DashboardPpage from '../Pages/DashboardPpage'
import NavBar from '../NavBar/NavBar'
import Sidebar from '../Pages/Sidebar'
import Help from '../Component/Sidebarfolder/Help'




const ParentRouter = () => {
  return (
    <>
   
    <Router>
        <NavBar/>
        <Routes>
            {/* <Route path to="/" element={<Home/>}/> */}
            <Route path to="/dashboard" element={<DashboardPpage/>}/>
            <Route path to="/sidebar" element={<Sidebar/>}/>
            
           
            {/* <Route path to="/help" element={<Help/>}/> */}
           
        </Routes>
    </Router>
    </>
  )
}

export default ParentRouter