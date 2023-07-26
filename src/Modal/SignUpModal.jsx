import React from 'react'
import ChildModal from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Avatar, TextField,Link } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { Userlogin } from '../Dummydata/Userlogin';


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



const SignUpModal = (props) => {
const navigate=useNavigate();
  const initialValues={
    name:'',
    password:'',
    email:'',
    number:'',
   }
   const validationSchema=Yup.object().shape({
    name:Yup.string().required("name requiered"),
    password:Yup.string().required(),
    email:Yup.string().email("valid email").required(),
    number:Yup.number()
    .min(8)
    .typeError("That doesn't look like a phone number")
    .required('A phone number is required'),
   })
   const onSubmit=(values)=>{
    // localStorage.setItem("name ",props.name)
    // localStorage.setItem("pass ",props.password)
    // localStorage.setItem("email ",props.email)
    // localStorage.setItem("num ",props.number)
    console.log("email",values)
    localStorage.setItem("name",values.name)
    localStorage.setItem("email",values.email)
    localStorage.setItem("password",values.password)
    localStorage.setItem("number",values.number)
    // console.log
    console.log("props",props)
    // handleClose()
    props.value(false)
    props.login(true)
   
    // navigate("/LoginModal")
   }
  const open=()=>{

  }
  const handleClose=()=>{
   
    console.log("propsvalue",props.value)
    props.value(false)
    // props.login(true)
  }
  const handleOpen=()=>{
  
  }
  return (
    <div>
     <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{
    p:'4',
    position:'absolute'
  }}>
    
    <Grid>
              <Paper elavation={10} style={{padding:20,height:'70vh',width:'300px',margin:'90px '}}>
                  <Grid align="center">
                    <Avatar style={{backgroundColor:'red'}}>
                      <HowToRegIcon></HowToRegIcon>
                    </Avatar>
                     <h2>Register</h2> 
                  </Grid>
                  <Formik initialValues={initialValues} onSubmit={onSubmit}
                  validationSchema={validationSchema}
                  >
                  {
                    (props)=>(
                      <Form >
                        {console.log(props)}
                           <Field as={TextField} name="name" id="standard-basic" placeholder="Enter your name" label="name" variant="standard" required fullWidth 
                           helperText={<ErrorMessage name='name'/>}
                           />
                          <Field as={TextField} name="email" id="standard-basic" placeholder="Enter your email" type="email" label="email" variant="standard" required fullWidth style={{margin:'8px 0'}} 
                          helperText={<ErrorMessage name='email'/>}
                          />
                           <Field as={TextField} name="number" id="standard-basic" placeholder="Enter your number" type="number" label="number" variant="standard" required fullWidth style={{margin:'8px 0'}} 
                          helperText={<ErrorMessage name='number'/>}
                          />
                           <Field as={TextField} name="password" id="standard-basic" placeholder="Enter your password" type="password" label="password" variant="standard" required fullWidth style={{margin:'8px 0'}} 
                          helperText={<ErrorMessage name='password'/>}
                          />
                         
                          <Button type="submit" variant='contained'color="primary" fullWidth style={{margin:'8px 0'}} disabled={!props.isValid}>REGISTER</Button>
                        
                         
                      </Form>
                    )
                  }
                  </Formik>
                 
              </Paper>
          </Grid>
  </Box>
</Modal>
    </div>
  )
}

export default SignUpModal;