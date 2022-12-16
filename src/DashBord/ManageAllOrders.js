import React from 'react';
import { useState,useEffect } from 'react';

const ManageAllOrders = () => {
    const [orders,setOrder]=useState([]);
    useEffect(()=>{
        fetch('https://randercar.onrender.com/ordersItem')
        .then(res=>res.json())
        .then(data=>setOrder(data));
       
    },[]);
    return (
       
        <div class="overflow-x-auto">
        <table class="table w-full">
         
          <thead>
            <tr>
              <th> Product Name</th>
              <th>User Email</th>
              <th> User Address</th>
              <th>Product Quantity</th>
              <th>Per Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
         
             {
                orders.map(order=>
                    <tr>
                     
                       
                         <td>{order.name}</td>
                         <td>{order.email}</td>
                         <td>{order.address}</td>
                         <td>{order.MinimumOrder}</td>
                         <td>{order.price}</td>
                         <td><button className='btn'>panding</button></td>
                         
                    </tr>
                )
             }
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
           
          </tbody>
        </table>
      </div>
    );
};

export default ManageAllOrders;
