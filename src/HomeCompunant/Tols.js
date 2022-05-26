
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';


const Tols = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch('https://thawing-brushlands-77698.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[]);
const sliceProduc=products.slice(0,6);
      
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {
           sliceProduc.map(item=><ProductItem key={item._id} item={item}></ProductItem>)
          }
            
        </div>
    );
};

export default Tols;