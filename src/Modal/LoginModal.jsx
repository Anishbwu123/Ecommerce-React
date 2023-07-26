import React, { useContext,useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, TextField,Link } from '@mui/material';
import LockClockRoundedIcon from '@mui/icons-material/LockClockRounded';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ChildProvider, ChildProvider1 } from '../Context/Context';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";
import Progress from '../const/Progress';
import SnakbarSuccess from '../const/SnakbarSuccess';
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
const LoginModal = (props) => {
  const [progress,setProgress]=useState(false)
  const[successPopup,setSuccessPopup]=useState(false)
  const[successOrNot,setSuccesOrNot]=useState('')
  const navigate = useNavigate();
   const close=useContext(ChildProvider1)
   console.log("datata",close)
   const initialValues={
    userName:'',
    password:'',
    rememberMe:''
   }
   const validationSchema=Yup.object().shape({
    userName:Yup.string().email("Enter Your Mail").required(),
    password:Yup.string().required()
   })
   const onSubmit=(values,props)=>{
    console.log("this is vale",values)
    // if(values.userName=='anupom262015@gmail.com' && values.password=='Anupom@1234')
    // {
      //setProgress(true)
      // localStorage.setItem("userName",values.userName)
      // localStorage.setItem("pssword",values.password)
    //   const user=Userlogin.find(user=>user.email===values.userName);
    //   console.log("this isuser",user)
    //   const pass=Userlogin.find(pass=>pass.password===values.password)
    //   console.log("this is pass",pass)
    // if(user || pass==='undefined'){

    //   setSuccessPopup(true)
    //   setSuccesOrNot("error")
      
    // }
    //   if(user && pass){
       
    //     setSuccessPopup(true)
    //     setSuccesOrNot("success")
    //     setTimeout(()=>{
    //     navigate('/dashboard')
    //   },2000)
    //   }
      
    if(values.userName===localStorage.getItem('email') && values.password===localStorage.getItem("password")){
     
        setSuccessPopup(true)
            setSuccesOrNot("success")
            setTimeout(()=>{
            navigate('/dashboard')
           },2000)
          
     
     
    }
    else{
      setSuccessPopup(true)
      setSuccesOrNot("error")
    }

      
   
    // }
    // else{
    //   setSuccessPopup(true)
    //   setSuccesOrNot('notSuccess')
    //   setTimeout(()=>{
    //     props.resetForm();
    //   },2000)
     
    // }
   }
   //const { open1, setOpen } = useContext(ChildProvider);
    const open=()=>{

    }
    const handleClose=()=>{
     console.log("close",close)
     console.log("propsvalue",props.value)
        props.value(false)
    }
    
  return (
    <div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
        sx={{
        position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: 340,
    // bgcolor: 'background.paper',
    // border: '0px solid #000',
    // boxShadow: 24,
    p: 4}}
    >
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <Grid>
              <Paper elavation={10} style={{padding:20,height:'70vh',width:'300px',margin:'90px '}}>
                  <Grid align="center">
                    <Avatar style={{backgroundColor:'green'}}>
                      <LockClockRoundedIcon></LockClockRoundedIcon>
                    </Avatar>
                     <h2>Sign In</h2> 
                  </Grid>
                  <Formik initialValues={initialValues} onSubmit={onSubmit}
                  validationSchema={validationSchema}
                  >
                  {
                    (props)=>(
                      <Form >
                        {console.log(props)}
                           <Field as={TextField} name="userName" id="standard-basic" placeholder="Enter your username" label="UserName" variant="standard" required fullWidth 
                           helperText={<ErrorMessage name='userName'/>}
                           />
                          <Field as={TextField} name="password" id="standard-basic" placeholder="Enter your Password" type="password" label="Password" variant="standard" required fullWidth style={{margin:'8px 0'}} 
                          helperText={<ErrorMessage name='password'/>}
                          />
                          <FormControlLabel control={<Checkbox color='primary' name="checkbox" />} label="Remeber me"  />
                          <Button type="submit" variant='contained'color="primary" fullWidth style={{margin:'8px 0'}} disabled={!props.isValid}>Sign In</Button>
                         <Typography><Link href="#">Forgot Password?</Link></Typography>
                         <Typography>Do you have any account?<Link href="#">Sign Up</Link></Typography>
                      </Form>
                    )
                  }
                  </Formik>
                 
              </Paper>
          </Grid>
        </Box>
      </Modal>
      {
    progress?
    <Progress/>
    
    :
   null
  }
  {
    successPopup?
    <SnakbarSuccess 
    setSuccessPopup={setSuccessPopup}
    data={successOrNot}
    ></SnakbarSuccess>
    :
    null
  }
    </div>
    
  )
  
}

export default LoginModal
