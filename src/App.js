
import { BrowserRouter as Router,  Routes,Switch, Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import { ParentProvider } from './Context/Context';
import NavBar from './NavBar/NavBar';
import { Fragment } from 'react';
import Footer from './Component/Footer';
import LoginModal from './Modal/LoginModal';
import Page1 from '../src/Component/Page1'
import Page2 from '../src/Component/page2'
import Page3 from '../src/Component/Page3'
import Page4 from '../src/Component/Page4'
import DiologeBox from './DiologeBox/DiologeBox';
import DashboardPpage from './Pages/DashboardPpage';
import PrivateOutlet from './Component/PrivateOutlet';
import progress from './const/Progress';
import Progress from './const/Progress';
import Sidebar from './Pages/Sidebar';
import About from './Component/Sidebarfolder/About';
import ContactUs from './Component/Sidebarfolder/ContactUs';
import Help from './Component/Sidebarfolder/Help';
import Services from './Component/Sidebarfolder/Services';
import Cart from './Component/Cart';

const ServiceArray=['Contact','About','Service','News']
const myArray = ['apple', 'banana', 'orange'];

function App() {
  return (
    <div className="App">
      
      <Router>
     
        <Routes>
          <Route exact path="/" element={
        
          <HomePage/>
       
        } />
          <Route exact path="/about" element={<About/>}/>
          <Route  exact path="/contact" element={<ContactUs/>}/>
          <Route exact path="/help" element={<Help/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/dashboard/cart" element={<Cart/>}/>
        
          <Route exact pexactath="page1" element={<Page1/>} />
          <Route exact path="page2" element={<Page2/>} />
          <Route exact path="page3" element={<Page3 />} />
          <Route exact path="page4" element={<Progress/>} />
          <Route exact path="sidebar" element={<Sidebar/>} />
          <Route path='/*' element={<PrivateOutlet/>}>
          <Route  path="dashboard" element={<DashboardPpage/>} />
          </Route>
          
        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
