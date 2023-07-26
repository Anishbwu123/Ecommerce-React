import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const DiologeBox = (props) => {
    console.log("props",props.data);
    const open=()=>{

    }
    const handleClose=()=>{

        props.setWrongChoice(false)
    }
  return (
    <div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{maxWidth:'400px',left:'450px'}}
    >
      <DialogTitle id="alert-dialog-title">
        {"PAGE"}-{props.data}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
         This page {props.data} are not implemented now.<br></br>
         Please wait few days.
         Thank You.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Disagree</Button> */}
        <Button onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default DiologeBox
