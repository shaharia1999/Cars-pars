import React, { useState,useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';



const CheckoutForm = ({data}) => {
    const price=data?.price;
    const email=data?.email;
    console.log(price);
    const [cardError,setCardError]=useState('')
    const stripe=useStripe();
    const elements=useElements();
    const [clintSecret,setClintSecret]=useState(false);
    console.log(clintSecret);
  

          
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        alert('pament sucessful');
        setClintSecret(true)
        
    if (!stripe || !elements) {
        return;
      }
    //   const card=elements.getElement(CardElement);
    const card=elements.getElement(CardElement);
      if(card==null){
          return;
      }
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
      });
      const {paymentIntent,error:intentError}=await stripe.confirmCardPayment(  clintSecret,{
      payment_method:{
        card:card,
        billing_details:{
          email:email
        }
      }

      });
      if(intentError){
        setCardError(error.message)
      }else{
        setCardError('');
      }
      if(error){
        setCardError(error.message)
      }
      else{
          setCardError('');
      }
  
}
    return (
        <>
             <form onSubmit={handleSubmit}>
         <CardElement />
       <button type="submit" disabled={clintSecret} className='btn btn-primary mt-3'>
       Pay
        </button>
      </form>
         {
        cardError && <p>SomeThing wrong</p>
      }
        </>
    //     <form onSubmit={handleSubmit}>
    //     <CardElement />
    //     <button type="submit" disabled={!stripe} className='btn btn-primary mt-3'>
    //       Pay
    //     </button>
    //   </form>
     
    );
};

export default CheckoutForm;