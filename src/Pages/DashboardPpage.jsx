import React, { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import ab from '../Image/bgsale.jpg'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './Sidebar';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Footer from './Footer';
import { Productsjson } from '../Dummydata/Productsjson';
import { Numbers } from '@mui/icons-material';
import CartMOdal from '../Modal/CartMOdal';
import SnakbarSuccess from '../const/SnakbarSuccess';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const DashboardPpage = () => {
  // const [warning,setwarning]=useState('')
  // const[data,setdata]=useState([])
  const[currentpage,setcurrentpage]=useState(1)
  const recordpage=3;
  const lastindex=currentpage*recordpage;
  const firstindex=lastindex-recordpage

  const [successPopup, setSuccessPopup] = useState(false)
  const [successOrNot, setSuccesOrNot] = useState('')
  const [cartoption, setcartoption] = useState(false)
  const [searchitem, setsearchitem] = useState('')
  const [cartdata, setcartdata] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [apidata, setapidata] = useState([])
  console.log(apidata)
  useEffect(() => {

    apidataraw()

  }, [])
  const apidataraw = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(data => {
        setapidata(data.data)
      }
      )

      .catch(error => console.log(error));
  }
  const records=apidata.slice(firstindex,lastindex)
  const npage=Math.ceil(apidata.length/recordpage)
  const number=[...Array(npage+1).keys()].slice(1)
  const navigate = useNavigate();
  const [isLogged, setisLogged] = useState(true);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const Logout = (values) => {
    localStorage.removeItem("name", values);
    setisLogged(false);
    navigate("/")
  }
  const Cart = (e) => {
    let isPresent = false
    cartdata.forEach((product) => {

      if (e.id === product.id) {
        isPresent = true
      }
    })
    if (isPresent) {
      // console.log(setwarning)
      // setwarning(true);
      // setTimeout(()=>{
      //   setwarning(false)
      // },2000)
      // return;
      setSuccessPopup(true)
      setSuccesOrNot("item already added")

    }
    else {
      setcartdata([...cartdata, e])
      setCartCount(cartCount + 1)
    }


    // navigate("/dashboard/cart",{state:{title:title,id:id,image:image}})
  }


  const SearchFunction = (e) => {
    console.log(e.target.value)
    // const search=e.target.value.toLowerCase()
    if (e.target.value === '') {
      apidataraw()


    }
    var c = apidata.filter(item => {
      return item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    })
    console.log(c)
    setapidata(c)
  }
  const CartModalOpen = () => {
    setcartoption(true)
  }
  const removecartdata = (id) => {

    const arr = cartdata.filter((e) => e.id !== id)
    setcartdata(arr)
  }
  // const filtersearch=(e)=>{
  //   const result=apidata.category.filter((item)=>{
  //     return item.category===e;
  //   })
  //   setdata(result)
  // }

  const prepage=()=>{
    if(currentpage!==1){
      setcurrentpage(currentpage-1)
    }
  }
  const ChangePage=(id)=>{
    setcurrentpage(id)
  }
  const nextPage=()=>{
    if(currentpage!==npage){
      setcurrentpage(currentpage+1)
    }
  }

  console.log(cartdata)
  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >

              <MenuIcon />
            </IconButton>
            <ShoppingCartCheckoutIcon />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Shopcart
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => SearchFunction(e)}
              />
            </Search>
            {/* //logout button */}



            <Button variant="outlined" style={{ margin: '3vh' }} color="error" size="small" onClick={() => {
              localStorage.clear()
              navigate('/')
            }}>
              Logout
            </Button>

            <IconButton color="#ffff" aria-label="add to shopping cart" onClick={() => CartModalOpen()}>
              <AddShoppingCartIcon />({cartdata && cartdata.length})
            </IconButton>


          </Toolbar>
        </AppBar>
        <TemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
      </Box>

      {/* products lists starts here */}

      {/* for category */}
      {/* <button className='text-center text-warning mb-4' onClick={()=>filtersearch('Men')} style={{position:'staitic'}}>Mens</button> */}

      {records && records.map((e) => {
        return (
          <>
            <div className='products-list'>
              <div className='product-style'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia style={{ objectFit: 'contain' }}
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={e.image}
                  />
                  <CardContent style={{}}>
                    <Typography gutterBottom variant="h5" component="div" style={{ margin: '0', height: '90px' }}>
                      {e.title.substring(0, 20)}..... {e.category}
                    </Typography>
                    <Typography className='fw-bold' variant="body2" color="text.black">
                      $-{e.price} Rateings-{e.rating.count}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => Cart(e)}>Add to Cart</Button>
                    <Button size="small">Buy Now</Button>
                  </CardActions>
                </Card>
              </div>
            </div>

          </>
        )
      })}

      {/* search function */}
      {searchitem && searchitem.map((e) => {
        return (
          <>
            <div>{e.id}</div>
            <div>{e.category}</div>
          </>
        )
      })}



      {cartoption ? <CartMOdal
        setcartoption={setcartoption}
        cartdata={cartdata}
        removecartdata={removecartdata}
      /> : ' '}


      {/* {warning && <div className='text-warning'>Item is already added to your cart</div>} */}
      {
        successPopup ?
          <SnakbarSuccess
            setSuccessPopup={setSuccessPopup}
            data={successOrNot}
          ></SnakbarSuccess>
          :
          null
      }
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a href='#' className='page-link' onClick={prepage}>
              Prev
            </a>
          </li>
          {
            number.map((n,i)=>{
              return(
                <>
                <li className={`page-item ${currentpage===n ? 'active': ' '}`}key={i}>
                  <a href='#' className='page-link' onClick={()=>ChangePage(n)}>{n}</a>
                </li>
                </>
              )
            })
          }
          <li className='page-item'>
            <a href='#' className='page-link' onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>




      <Footer  ></Footer>
    </>
  )
}

export default DashboardPpage;