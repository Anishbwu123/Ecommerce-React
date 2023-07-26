import { AppBar, Toolbar,Grid, Typography, Tab,Tabs,Button,Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ChildProvider, ParentProvider1,ParentProvider,ChildProvider1 } from '../Context/Context';
import LoginModal from '../Modal/LoginModal';
import {useNavigate} from 'react-router-dom';
import DiologeBox from '../DiologeBox/DiologeBox';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import TootlTip from '../const/TootlTip';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import SignUpModal from '../Modal/SignUpModal';
import qq from '../Image/front-5.jpg'
import tt from '../Image/front-6.jpg'
import ss from '../Image/front-7.jpg'
import ee from '../Image/sad.jpg'




const NavBar = () => {
  const navigate = useNavigate();
    const[value,setValue]=useState()
    const [open, setOpen] = useState(false);
    const [openSignup, setOpensignup] = useState(false);
    const [wrongChoice,setWrongChoice]=useState(false);
    const [wrongChoiceData,setWrongChoiceData]=useState(''||null)
    const data=useContext(ChildProvider)
    const valueData = { open, setOpen };
    const openLogin=()=>{
     
        setOpen(true)
    }
    const openSignUp=()=>{
      setOpensignup(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const clickTab=(e,link)=>{
      switch(link)
      {
        case 'Contact':
          navigate('\page1');
          break;
        case 'About':
          navigate('\page2');
          break;
        case 'Services':
          navigate('\page3');
          break;
        case 'News':
          navigate('\page4');
          break;
        default:
          setWrongChoiceData(link)
          setWrongChoice(true);
          break;
      }
    }
  return (
    <>
  
    <AppBar sx={{backgroundImage:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(201,51,183,1) 64%, rgba(78,111,117,1) 100%)"}}>
        <Toolbar>
            <Grid container>
                <Grid item xs={1}>
                     {/* <Typography>
                            <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
                     </Typography> */}
                </Grid>
                <Grid item xs={7}>
                    {/* <ChildProvider> */}
                        <Tabs indicatorColor='secondary' textColor='inherit' value={value}
                         onChange={(e,val)=>setValue(val)}
                         >
                            {/* {
                                 data.ServiceArray.map((link,index)=>(
                                    <Tooltip title={link} arrow>
                                      <Tab key={index} label={link} onClick={(e)=>clickTab(e,link)}/>
                                    </Tooltip>
                                    
                                         
                                   
                                 ))
                            } */}
                           <div className='casc'>
                           
                           </div>
                           
                         </Tabs> 

                        
                </Grid>
                {/* <div className='search-box'>
                            <input type='text' placeholder='Search Product' id="search-box" style={{ borderRadius: "30px", paddingRight: "75px" }} /> <SearchIcon />
                        </div> */}
                <Grid item xs={2}/>
                <Grid item xs={2}>
                        <Box class="abc">
                            <Button xs={{merginLeft:"auto" }} variant="contained" onClick={openLogin}>Login</Button>
                            <Button xs={{merginLeft:1}} variant="contained" onClick={openSignUp}>SignUp</Button>
                        </Box>
                </Grid>
            </Grid>
           
        </Toolbar>
        
    </AppBar>
    {/* Its show when click on Login Button */}
    
      
        {open?
         <ParentProvider1 valueData={"data"}>
        <LoginModal
        value={setOpen}
        />
         </ParentProvider1>
        
        :null
        }
       
       {openSignup?
         <ParentProvider1 valueData={"data"}>
        <SignUpModal
        value={setOpensignup}
        login={setOpen}
        />
         </ParentProvider1>
        
        :null
        }
       
      
      {/* end of login Modal */}

      {/* Its show when choose wrong choice */}
      {
        wrongChoice?
        <DiologeBox
        setWrongChoice={setWrongChoice}
        data={wrongChoiceData}
        ></DiologeBox>
        :
        null
      }
      
      {/* end of wrong choice Diologe box */}
      <div className='bgimg'>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={qq} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={ee} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={ss} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    </div>
    </>
  )
}

export default NavBar
