import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import React from 'react'

const CartElement = () => {
    const { cart } = useContext(dataContext);
    return cart.map((Product) => {
    return (
    <div className='card' key={Product.id}>
        <img src={Product.img} alt='product-card' />
        <h3>{Product.name}</h3>
        <h4>${Product.price}</h4>
    </div>);
  });
};

export default CartElement;
