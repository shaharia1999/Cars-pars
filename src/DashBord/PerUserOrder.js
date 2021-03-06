import React from 'react';
import { Link } from 'react-router-dom';

const PerUserOrder = ({item,deleteItem,payment}) => {
    const {name,picture,price,MinimumOrder,_id}=item;
    return (
        <div class="card w-72 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={picture} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            
          <h2 class="card-title">{name}</h2>
         
          <h2 class="card-title">Each Price :{price}</h2>
          <p>Quantity :{MinimumOrder}</p>
          <div class="card-actions ">
              <div className='mx-auto'>
            <button class="btn btn-primary" onClick={()=>deleteItem(_id)}>
                Delete 
            </button>
            <button class="btn btn-sucess ml-2" >
            <Link to='revew'>Revew</Link>
            </button>
            <button class="btn btn-danger mt-2" onClick={()=>payment(_id)}>
              <Link to={`payment/${_id}`}>Payment</Link>
           
            </button>
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default PerUserOrder;