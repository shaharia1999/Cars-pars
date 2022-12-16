import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../firebase.init';
import PerUserOrder from './PerUserOrder';


const UserOrder = () => {
    const [user, loading, error] = useAuthState(auth);
    const email=user?.email;
    const [orders,SetOrders]=useState([]);
    useEffect(()=>{
        fetch('https://randercar.onrender.com/ordersItem')
        .then(res=>res.json())
        .then(data=>SetOrders(data));


    },[]);
    
    const deleteItem=(_id)=>{
        const url=`https://randercar.onrender.com/OrdersItem/${_id}`
        const prosit=window.confirm("Are You sure You want to Delete the Id")
        if(prosit){
        fetch(url,{
        method: 'DELETE',
            })
       
      .then(res=>res.json())
      .then(datas=>{
        const remaining=orders.filter(d=>d._id !==_id);
        SetOrders(remaining);
              
      })
    }
}
const payment=(_id)=>{
       console.log(_id)
}
    //     const products=orders.map(pro=>pro.product)
    //    const rest=products.filter(pro=>pro.email===email);
    //    console.log(rest);

      
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5'>
            {
                 orders.map( item=><PerUserOrder key={item._id} item={item} deleteItem={deleteItem} payment={payment}></PerUserOrder>)
            }
           
            
        </div>
    );
};

export default UserOrder;