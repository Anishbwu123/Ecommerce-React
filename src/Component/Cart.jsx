import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { useLocation } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { array } from 'yup';
const Cart = (props) => {
    const[cartdata,setcartdata]=useState([])
    const data=useLocation();

    useEffect(()=>{
        let cartdata=data
        let data1=localStorage.getItem('arrdata')
        setcartdata([...data1,data])
   console.log(data)
   let string = JSON.stringify(cartdata)
   localStorage.setItem("arrdata",string)
   let prevdata=localStorage.getItem("arrdata")
   console.log(JSON.parse(prevdata))
       
    },[])  
   

    console.log(cartdata)
   
  return (
    <div>
       
       <Card sx={{ maxWidth: 345}}>
                  <CardMedia style={{ objectFit: 'contain' }}
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={data.state.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.state.title} 
                    </Typography>
                    <Typography variant="body2" color="text.black">
                      {/* Rs-{props.price} Rateings-{props.rating.count} */}
                    </Typography>
                  </CardContent>
                </Card>
    </div>
  )
}

export default Cart