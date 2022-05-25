import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleImg from '../images/google-signin-button-1024x260.png';
import './Rejister.css'
import auth from './../firebase.init';
import Usetoken from '../Usetoken';
// import useToken from '../Usetoken';
// import useToken from './../Usetoken';


const Register = () => {
    let navigate = useNavigate();
    const [errors,setErrors]=useState("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] =useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [signInWithGoogle, googleuser, gooleloading, googleerror] = useSignInWithGoogle(auth);
      const [token]=Usetoken(user || googleuser);
      
   
        
  
      const fromControl=(e)=>{
        e.preventDefault()
      
        const email=e.target[1].value;
       const password=e.target[2].value;
      
      
       if(error){
        setErrors(  <p>Error: {error.message}</p>)
        return;

        }
       createUserWithEmailAndPassword(email, password);
     

      };
     
      if( token){
        navigate("/login")
    
       
     
      };

    
  const googleSingin=()=>{
   signInWithGoogle()
  
};
if(token){
  //navugate
  navigate("/");
 }


    return (
    
        <div className='mt-5 mb-5 '>
            <ToastContainer />
        <h1 className='mt-5 text-center text-4xl'>This is the Registation page</h1>
        <Form onSubmit={fromControl} className='w-50 mx-auto'>
  <Form.Group className="mb-3" >
    <Form.Label>Name : </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit" className='login-button'>
     Register
  </Button>
  <h2 className='text-danger'>{errors}</h2>
  <h3>All Ready have an Account ,<span ><Link className='text-primary '
   to="/login">Please Login !!</Link></span></h3>
 <div>
  <h3 className='text-danger reastPass' onClick={()=>navigate('/reast')} >Reast Your Password</h3>
</div>
</Form>


           <br />
           <br />
         
            <div className='d-flex items-center google'>
               <img src={googleImg } onClick={googleSingin} alt="" /> 

            </div>

</div>
            
      
      
    );
};

export default Register;