import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import ItemCount from "../ItemCount/ItemCount";
import "../Style/Products.css";

const ItemDetail = () => {
const { data, cart, setCart } = useContext(dataContext);



const buyProducts = (product, quantity) => {
  const newProducts = Array.from({ length: quantity }, () => product);
  setCart([...cart, ...newProducts]);
};

  return data.map((product)=> {
    return (
        <div className='card' key={product.id}>
            <img src={product.img} alt="img-product-card" />
            <h3>{product.name}</h3>
            <p>Descripción: {product.description}</p>
            <h4>${product.price}</h4>
            <h4>Stock Disponible: {product.stock}</h4>
            <div className="Counter"><ItemCount initial={1} stock={product.stock} onAdd={(quantity) => buyProducts(product, quantity)}/></div>
        </div>
    )
  })
};


export default ItemDetail;