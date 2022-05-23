import React, { useState } from 'react';
import './ReastPass.css'
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';

const ReastPass = () => {
    const notify = () => toast("Set Your New Password!");
    const [errors,serErrors]=useState('')
    const emailRef=useRef()
   
        const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
            auth
          );
    const fromControl=(e)=>{
        e.preventDefault()
     
     

        
     
    }
    const rest=async(e)=>{
        const email=emailRef.current.value;
        if(error){
            return (
                 serErrors(<p>Error: {error.message}</p>) 
              );}
              if(sending){
                  alert("sending")
              }
              else{
                await sendPasswordResetEmail(email);
                return (
                    notify()
                    
                )
              

              }
    
    }

    return (
        <div className='reast mt-5'>
               <ToastContainer />
            <Form onSubmit={fromControl} className='w-50 mx-auto'>
       
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" ref={emailRef} placeholder="Enter email"  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Button className="login-button" variant="primary" type="submit" onClick={rest}>
     Reast Your PassWord
  </Button>
  <p className='text-danger'>{errors}</p>
  
</Form> 
        </div>
    );
};

export default ReastPass;