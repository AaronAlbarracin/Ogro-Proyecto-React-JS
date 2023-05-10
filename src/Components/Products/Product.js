import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import "../Style/Products.css";

const Product = () => {
const { data } = useContext(dataContext);
  return data.map((product)=> {
    return (
        <div className='card' key={product.id}>
            <img src={product.img} alt="img-product-card" />
            <h3>{product.name}</h3>
            <h4>Precio: ${product.price}</h4>
            <h4>Stock Disponible: {product.stock}</h4>
            <Link className='DetalleButton' to={`/producto/${product.id}`}>Detalle</Link>
        </div>
    )
  })
};


export default Product;

