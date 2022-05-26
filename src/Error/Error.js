import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from '../images/404-page-therazhang.jpg';
import './Error.css'

const Error = () => {
    const navigate=useNavigate()
    const redirect=()=>{
        navigate('/')
    }

    return (
        <div className='error' >
            <div>   <img src={errorImg} alt="" onClick={redirect}  /></div>
         
            
        </div>
    );
};

export default Error;