import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({data,setPayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    // const {_id, productPrice, customerName, customerEmail } = order;
    const price=data?.price;
    const email=data?.email;
    const _id=data?._id;
    useEffect(() => {
        fetch('https://randercar.onrender.com/create-payment-intent', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {

                if (data?.clientSecret) {
                    setPayment(true);
                }
            });

    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("Payment Sucess");
        setPayment(true);

        // if (!stripe || !elements) {
        //     return;
        // }

        // const card = elements.getElement(CardElement);
        // if (card === null) {
        //     return;
        // }

        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card
        // });
        // setCardError(error?.message || '')
        // setSuccess('');
        // setProcessing(true);

        // confirm card payment
        // const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        //     clientSecret,
        //     {
        //         payment_method: {
        //             card: card,
        //             billing_details: {
        //                 email: email
        //             },
        //         },
        //     },
        // );
        // if (intentError) {
        //     setCardError(intentError?.message);
        //     setProcessing(false);
        // }
        // else {
        //     setCardError('')
        //     console.log(paymentIntent);
        //     setTransactionId(paymentIntent.id)
        //     setSuccess('Congrats! Your payment is completed.')
           //
        //    const payment = {
        //     orderId: _id,
        //     transactionId: paymentIntent.id
        // }
    
        // }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit">
                  
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p> {success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;