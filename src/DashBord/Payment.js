import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading'
// import {loadStripe} from '@stripe/stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// import {useNavigate}  from "react-router-dom";
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';
 import Chackout2 from './Chackout2';
// import {useNavigate} from 'react-router-dom';
 const stripePromise = loadStripe(process.env.AUTH_T);

const Payment = () => {
    const {_id}=useParams();
    const [data,setData]=useState({})
    const url=`http://localhost:5000/payment/${_id}`;
    // const {data,isLoading}=useQuery('order',()=>{
      useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>setData(data))
      },[ ])
  
    // })
    // console.log(data);
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    // const [paymet,setPayment]=useState(false);
    const alerts=()=>{
           alert("sucess");
          //  let navigate = useNavigate();
          //  navigate(`UserOrder/payment/${id}`);
    }

    return (
      <div>
        <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-42">
        <figure class="px-10 pt-10">
          <img src={data?.picture} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            
          <h2 class="card-title">{data?.name}</h2>
          <h2 class="card-title">Each Price :{data.price}</h2>
          <p>Quantity :{data?.MinimumOrder}</p>
        
          <div class="card-actions">
            <button class="btn btn-primary" onClick={alerts}>paymet</button>
          </div>
        </div>
        <div class='card w-96 bg-base-100 shadow-xl mx-auto mt-42'>
          <div className='card-body'>
{/*             
          <Elements stripe={stripePromise}>
              <Chackout2 data={data} setPayment={setPayment} />
          </Elements> */}
          </div>
          
        </div>
      </div>
      </div>
    );
};

export default Payment;