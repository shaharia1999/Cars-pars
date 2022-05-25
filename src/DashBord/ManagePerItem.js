import React from 'react';
import { Link } from 'react-router-dom';

const ManagePerItem = ({item,deleteItem}) => {
    // console.log(item);
         
        const {name,price,picture,description,quantity,minimumQuantity,_id}=item;
        
        return (
            <div class="card w-72 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={picture} class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                
              <h2 class="card-title">{name}</h2>
             
              <h2 class="card-title">Each Price :{price}</h2>
              <p>Quantity :{quantity}</p>
              <p> MinimumQuantity :{minimumQuantity}</p>
              <div class="card-actions">
                <button class="btn btn-primary" onClick={()=>deleteItem(_id)}>
                    Delete 
                </button>
              </div>
            </div>
          </div>
    );
};

export default ManagePerItem;