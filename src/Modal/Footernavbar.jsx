import React, {useEffect, useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RedeemIcon from '@mui/icons-material/Redeem';



const Footernavbar = (props) => {
  console.log("props data",props)
  const [totaldata,setTotalData]=useState(0)

  useEffect(() => {
    let total=0
    props && props.data.forEach((staffDetail) => {
     total = total+staffDetail.price
      console.log(total,staffDetail);
    });
    setTotalData(total)
  });
  

  return (
    <Box >
    <AppBar position="sticky" style={{height:'43px',bottom:'0',display:'flex'}}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <RedeemIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div" style={{paddingRight:'50px'}}>
         Item:{props && props.data.length}
        </Typography>
        <Typography variant="h6" color="inherit" component="div" style={{}}>
         Total:{totaldata}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default Footernavbar