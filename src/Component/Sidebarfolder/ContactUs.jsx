import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {
  return (
    <>
     <h1 className="text-primary fw-bold mb-4 text-center">Contact Us</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14707.902672582657!2d88.62413395!3d22.8403897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1688484010581!5m2!1sen!2sin" 
    width="100%" 
    height="450" 
    style={{border:'0'}}
     allowfullscreen=""
      loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form action='' className='contact-input'>
        <Container>
     
     <Row className="mb-5 mt-3">
       <Col lg="8">
         <h1 className="display-4 mb-4">Stay Connected</h1>
         <hr className="t_border my-4 ml-0 text-left" />
       </Col>
     </Row>
     <Row className="sec_sp">
       <Col lg="5" className="mb-5">
         <h3 className="color_sec py-4">Get in touch</h3>
         <address>
           <strong>Email:- abc@gmail.com</strong>{" "}<br />
           <strong>Office-Address:- 178/5 Ashoknagar Kolkata 24 Pgs(N)</strong>{" "}<br />
           <strong>Phone:- 03216XXXXXX</strong>{" "}<br />
           <strong>Social Media:-</strong> <FacebookIcon/> <InstagramIcon/>
           {/* <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
             {contactConfig.YOUR_EMAIL}
           </a> */}
           <br />
           <br />
           {/* {contactConfig.hasOwnProperty("YOUR_FONE") ? (
             <p>
               <strong>Phone:</strong> {contactConfig.YOUR_FONE}
             </p>
           ) : (
             ""
           )} */}
         </address>
         {/* <p>{contactConfig.description}</p> */}
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <form className="contact__form w-100">
           <Row>
             <Col lg="6" className="form-group">
               <input
                 className="form-control"
                 id="name"
                 name="name"
                 placeholder="Name" 
                 type="text"
                 required 
               />
             </Col>
             <Col lg="6" className="form-group">
               <input
                 className="form-control rounded-0"
                 id="email"
                 name="email"
                 placeholder="Email"
                 type="email" 
                 required 
               />
             </Col>
           </Row>
           <textarea
             className="form-control rounded-0"
             id="message"
             name="message"
             placeholder="Message"
             rows="5" 
             required
           ></textarea>
           <br />
           <Row>
             <Col lg="12" className="form-group">
               <button className="btn btn-danger" type="submit"> 
               Send
               </button>
             </Col>
           </Row>
         </form>
       </Col>
     </Row>
   </Container>
        </form>
      </div>
    </div>
    </>
    
  )
}

export default ContactUs