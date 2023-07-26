import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import '../../src/Modal/Style.css'
import Footernavbar from './Footernavbar';
// import CartPrice from './CartPrice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  

const CartMOdal = (props) => {
  // const[cart,setCart]=useState([])
    const handleClose=()=>{
    props.setcartoption(false)
    }
    const open=()=>{
  
    }
  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className='modal-view'  sx={style}  >
      {props.cartdata.length > 0? props.cartdata.map((e) => {
        return (
          <>
            <div className='products-list'>
              <div className='product-style'>
                <Card sx={{ maxWidth: 345}}>
                  <CardMedia style={{ objectFit: 'contain'}}
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={e.image}
                  />
                  <CardContent style={{}}>
                    <Typography gutterBottom variant="h5" component="div" style={{margin:'0',height:'90px'}}>
                      {e.title.substring(0,10)}..... 
                    </Typography>
                    <Typography className='fw-bold' variant="body2" color="text.black"> 
                      $-{e.price}  
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={()=>props.removecartdata(e.id)}>Remove</Button>
                    <Button size="small">Buy Now</Button>
                  </CardActions>
                </Card>
              </div>
            </div>
           
          </>
        )
      })
      :
      <Typography id="modal-modal-title" variant="h6" component="h2">
     Your Cart is Empty
    </Typography>
      }
    <Footernavbar data={props.cartdata}></Footernavbar>
    {/* <CartPrice cart={cart} setCart={setCart} /> */}
      </Box>
   
    </Modal>
    
  </div>
  )
}

export default CartMOdal