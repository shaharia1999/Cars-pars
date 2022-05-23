import React from 'react';

const ProductItem = ({item}) => {
    const {name,price,picture,description,quantity,minimumQuantity}=item;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={picture} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            
          <h2 class="card-title">{name}</h2>
          <p> Description :{description}</p>
          <h2 class="card-title">Each Price :{price}</h2>
          <p>Quantity :{quantity}</p>
          <p> MinimumQuantity :{minimumQuantity}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ProductItem;