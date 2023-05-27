// ICONO
import { useContext } from "react";
import "../Style/CartWidget.css"
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


// const CartWidget =()=> {
//     return(
//         <i className="CartWidget bi bi-cart4">5</i>
//     )
// }
const CartWidget =()=> {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className="CartWidget bi bi-cart4" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            {/* <img className="CartImg" src={cart} alt='cart-widget'/> */}
            { totalQuantity }
        </Link>
    )
}


export default CartWidget;