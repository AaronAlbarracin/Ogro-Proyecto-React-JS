import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import Product from "../Products/Product";






const Categoria = () => {
    const {categoryId} = useParams();
    const [params, setParams] = useState(categoryId)

    useEffect(() => {
        setParams(categoryId);
    }, [categoryId]);

  return (
    <><Navbar />
    <div>

      <h2>prueba id <Product /></h2>
      <h2>prueba {params}</h2>
    </div>
    </>
  );
}
export default Categoria;