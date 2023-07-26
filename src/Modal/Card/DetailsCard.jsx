
import React, { useContext, useState } from 'react' 
import Card from '@mui/material/Card';
import { ChildProvider } from '../../Context/Context';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import a from '../../Image/a.jpg'
const DetailsCard = () => {
    const data=useContext(ChildProvider)
    console.log("dataa",data)
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="240"
            image={a}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {/* {data.UserData.Fname+' '+data.UserData.Lname} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {/* {data.UserData.Email}<br></br>
             {data.UserData.Phone} */}{
              localStorage.getItem("userName")
             }
             <br></br>
             {
              localStorage.getItem("password")
             }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
}

export default DetailsCard
