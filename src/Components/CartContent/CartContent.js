import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElement from "./CartElement";
import Navbar from "../Navbar"
import CartTotal from "./CartTotal";
import "../Style/CartContent.css"

const CartContent = () => {
  const { cart } = useContext(dataContext);


  return cart.length > 0 ? (
    <>
      <Navbar />
      <div className="ProductsCart"><CartElement /></div>
      <div className="CartTotal"><CartTotal /></div>
    </>
  ): (
    <>
    <Navbar />
    <h1 className="CartMsj">Su carrito aun está vacio.</h1>
    </>
  )
};

export default CartContent;
