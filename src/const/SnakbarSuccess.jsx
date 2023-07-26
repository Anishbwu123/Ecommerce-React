import React,{useState} from 'react'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { Stack,Alert } from '@mui/material';
const SnakbarSuccess = (props) => {
    console.log("propsbbb",props.data)
    const[mesg,setMsg]=useState('')
    // switch(props.data)
    // {
    //     case 12:
    //         setMsg('this is error');
    //         break;
    //     case 11:
           
    //         setMsg("success");
    //         break;
    //     default:
      
    //         setMsg('');
    //         break;
    // }
    const open=()=>{

    }
    const handleClose=()=>{
        props.setSuccessPopup(false)
    }
  return (
    <div>
       <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}
       anchorOrigin={
       { vertical:'top',
        horizontal:"center"}
       }
       >
        <Alert onClose={handleClose} severity={props.data=='success'?"success":"error"} sx={{ width: "100%" }}>
         {props.data}
        </Alert>
       
      </Snackbar>
      {/* <Stack spacing={2}>
      <Alert severity="success">this is success</Alert>
      </Stack> */}
    </div>
  )
}

export default SnakbarSuccess
