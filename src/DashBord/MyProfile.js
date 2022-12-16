import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';
import axios from 'axios';
import Loading from '../Loading/Loading';

// import { toast } from "react-toastify";
 
// import "react-toastify/dist/ReactToastify.css";
// import Loading from '../Loading/Loading'




const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const [eroor,setError]=useState('');
   
    const setEmail=user?.email;
    const {_id}=useParams()
    const [products,setProducts]=useState([]);
    console.log(products);
    if(loading){
      <Loading></Loading>
    }
    useEffect(()=>{
        fetch('https://randercar.onrender.com/profile')
        .then(res=>res.json())
        .then(data=>setProducts(data));
       
    },[]);
  
     

  const fromControl= async(e)=>{
    const notify = () => toast("Profile update sucess!");
      e.preventDefault()
     const name=e.target[0].value;
     const picture=e.target[1].value;
     const email=e.target[2].value;
     const address=e.target[3].value;
     const mobile=e.target[4].value;
     const profiles={name,email,address,mobile,picture}
     setProducts(profiles);
     console.log(products)
     const response= await axios.put(`https://randercar.onrender.com/profile/${setEmail}`,profiles);
     if (response) {
        e.target.reset();}
    }
    
    const pro=products?.find(u=>u?.email===setEmail);
    console.log(pro);
//   useEffect(()=>{
//     fetch(`http://localhost:5000/user/${setEmail}`, {
//         method: 'PUT',
//         headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(profiles),
//     })
//   .then(res=>res.json())
//   .then(data=>setProducts(data))
// },[]);}

   
//   const selectProduct=products.find(pro=>pro._id===_id)
//   console.log(selectProduct)
//   const MinimumValue=selectProduct?.minimumQuantity;
//     const ProductName=selectProduct?.name;
//     const ProductPhoto=selectProduct?.picture;
//     const Description=selectProduct?.description;
//     const Price=selectProduct?.price;
//     const quantitylev=selectProduct?.quantity;
    
//    const newvalue=MinimumValue;
    

//    }
 
 

    return (
        <div className='mt-5 mb-5 order-page'>
           <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={pro?.picture} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            
          <h2 class="card-title">{''}</h2>
          <p> name :{pro?.name}</p>
          <p>Email :{setEmail}</p>
          <p> Address :{pro?.address}</p>
          <h2 class="card-title">Phone :{pro?.phone}</h2>
          </div>
      
      </div>
        {/* <ToastContainer /> */}
        <div>
    <h1 className='mt-5 text-center text-4xl'>Profile</h1>
    <Form onSubmit={fromControl} className='ml-10 '>
<Form.Group className="mb-3 " >
<Form.Label>  Name  : </Form.Label>
<Form.Control type="text" placeholder="Name"  />



</Form.Group>
<Form.Group className="mb-3" >
<Form.Label>Picture :</Form.Label>
<Form.Control type="text" placeholder="" 
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
  Edit
</Button>

</Form>

</div>
</div>
        
    );
};

export default MyProfile;