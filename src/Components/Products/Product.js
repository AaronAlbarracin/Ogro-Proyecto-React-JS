import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "../Style/Products.css";

const Product = () => {
const { data, cart, setCart } = useContext(dataContext);



const buyProducts = (product) => {
  console.log(product)
  setCart([...cart, product])
};

  return data.map((product)=> {
    return (
        <div className='card' key={product.id}>
            <img src={product.img} alt="img-product-card" />
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={()=> buyProducts(product)}>Comprar</button>
        </div>
    )
  })
};


export default Product;
