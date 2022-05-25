import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init';
// import auth from '../firebase.init';
// import auth from '../../firebase.init';
// import { signOut } from 'firebase/auth';


const UserRevew = () => {
  const notify = () => toast("Revew add sucess full!");
  const notify2 = () => toast("REVEW DO NOT ALLOW MORE THEN 5!");
   const handleSubmit=(event)=>{
    event.preventDefault()
    const name=event.target[0].value;
     const description=event.target[1].value;
     const picture=event.target[2].value;
     const revew=event.target[3].value;
    const datas={name,picture,description,revew};
    console.log(datas);
    // const newAreey=[...data,datas];
    // setData(newAreey);
  
  if(revew <=5 ){
    fetch('http://localhost:5000/revew', {
        method: 'POST',
        body: JSON.stringify(datas
        ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        notify();
        event.target.reset();
      
          
       
      }else{
        notify2();
      }

  }
   


    return (
          
        <div className=' mb-5 Admin-addItem'>
          <ToastContainer className='mt-20'></ToastContainer>
        <h1 className=' text-center text-2xl'> Add Item</h1>
        <Form onSubmit={handleSubmit} className=' mx-auto w-50'>
    <Form.Group className="mb-3" >
    <Form.Label>My Name : </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <label htmlFor="">description</label><br />
      <textarea name="" id="" cols="50" rows="4"></textarea>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> My Photo </Form.Label>
    <Form.Control type="text" placeholder="Url" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> REVEW QUANTITY 0 to 5 </Form.Label>
    <Form.Control type="text" placeholder="Revew" />
  </Form.Group>



  <Button variant="danger" type="submit">
      Submit Revew
  </Button>
  
</Form>
             
            
        </div>
    );
};


export default UserRevew;
// import React from 'react';

// const UserRevew = () => {
//     return (
//         <div>
//             <h1>this is the awesome</h1>
            
//         </div>
//     );
// };

// export default UserRevew;