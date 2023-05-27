import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


const Cart = () => {
  const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>Todavía no hay items agregados al carrito</h1>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} onRemove={() => removeItem(p.id)} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Option2">
        Vaciar Carrito
      </button>
      <Link to="/checkout" className="Option2">
        Confirmar
      </Link>
    </div>
  );
};

export default Cart;

