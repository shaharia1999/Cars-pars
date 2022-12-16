import React, { useEffect, useState } from 'react';
import ManagePerItem from './ManagePerItem';

const ManageItem = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
      fetch('https://randercar.onrender.com/products')
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[]);

  
      const deleteItem=(_id)=>{
        const url=`https://randercar.onrender.com/serviceDelete/${_id}`
        const prosit=window.confirm("Are You sure You want to Delete the Id")
        if(prosit){
        fetch(url,{
        method: 'DELETE',
            })
       
      .then(res=>res.json())
      .then(datas=>{
        const remaining=products.filter(d=>d._id !==_id);
        setProducts(remaining);
              
      })
    }
}
const revew=(_id)=>{

}

  
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            {
                products.map(item=><ManagePerItem key={item._id} item={item}deleteItem={deleteItem}></ManagePerItem>)
            }
            
        </div>
    );
};

export default ManageItem;