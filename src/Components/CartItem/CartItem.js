import "../Style/Cart.css"
import React from "react";

function CartItem({ name, price, quantity, onRemove }) {
  const totalPrice = price * quantity;

  return (
    <div className="CarritoFinal">
      <h4>{name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio por unidad: ${price}</p>
      <p>Precio total: ${totalPrice}</p>
      <button onClick={onRemove}>Eliminar</button>
    </div>
  );
}

export default CartItem;
