import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';
import axios from 'axios';
import './Order.css'
// import { toast } from "react-toastify";
 
// import "react-toastify/dist/ReactToastify.css";
// import Loading from '../Loading/Loading'




const Order = () => {
    const {_id}=useParams()
    const [products,setProducts]=useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/products')
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[]);
   
  const selectProduct=products.find(pro=>pro._id===_id)
  console.log(selectProduct)
  const MinimumValue=selectProduct?.minimumQuantity;
    const ProductName=selectProduct?.name;
    const ProductPhoto=selectProduct?.picture;
    const Description=selectProduct?.description;
    const Price=selectProduct?.price;
    const quantitylev=selectProduct?.quantity;
    
   const newvalue=MinimumValue;
    

//    }
 
    const [user, loading, error] = useAuthState(auth);
    const [eroor,setError]=useState('');
   
    const setEmail=user?.email
    const fromControl= async(e)=>{
      const notify = () => toast("Set Your New Password!");
        e.preventDefault()
       const name=e.target[0].value;
       const MinimumOrder=e.target[1].value;
       const price=e.target[2].value;
       const picture=e.target[3].value;
       const email=e.target[4].value;
       const address=e.target[5].value;
       const mobile=e.target[6].value;
       const product={name,email,address,mobile,MinimumOrder,price,picture}
        if(quantitylev>=MinimumOrder && MinimumOrder>=MinimumValue){
          try{
            const response= await axios.post('http://localhost:5000/products',product);
            
            if (response) {
              alert("Order Submit Sucessfull")
              e.target.reset();
              notify();
              setError('')
              // toast("Success! Check email for details", { type: "success" });
            } else {
              toast("Something went wrong", { type: "error" });
            }
          }
          catch (error) {
            console.log(error);
            }

        }
        
        else{
          console.log('mia');
          setError(<p>Quantity Higher/lower to abailaable</p>)
          
        }
    
     
    }
    return (
        <div className='mt-5 mb-5 order-page'>
           <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={ProductPhoto} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            
          <h2 class="card-title">{ProductName}</h2>
          <p> Description :{Description}</p>
          <p> Quantity :{quantitylev}</p>
          <h2 class="card-title">Each Price :{Price}</h2>
          </div>
      
      </div>
        {/* <ToastContainer /> */}
        <div>
    <h1 className='mt-5 text-center text-4xl'>Product Detels</h1>
    <Form onSubmit={fromControl} className='ml-10 '>
<Form.Group className="mb-3 " >
<Form.Label> Product Name  : </Form.Label>
<Form.Control type="text" placeholder="" value={ProductName} />

</Form.Group>
<Form.Group className="mb-3" >
<Form.Label>Minimum Order</Form.Label>
<Form.Control type="text" placeholder="" defaultValue={newvalue}
/>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label>Price Per Item</Form.Label>
<Form.Control type="text" placeholder="" defaultValue={Price}
/>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label>Picture :</Form.Label>
<Form.Control type="text" placeholder="" value={ProductPhoto}
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" value={setEmail} />
<Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group className="mb-3" >
<Form.Label>Adress :</Form.Label>
<Form.Control type="text" placeholder="Address" />
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label>Mobile Number</Form.Label>
<Form.Control type="text" placeholder="phone" />
</Form.Group>

  <p className='text-danger text-3xl p-4'>{eroor}</p>
<Button variant="primary" type="submit" className='login-button'>
  Order NOW
</Button>

</Form>

</div>
</div>
        
    );
};

export default Order;