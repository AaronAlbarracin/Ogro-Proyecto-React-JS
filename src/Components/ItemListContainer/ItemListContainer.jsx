import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Service/Firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import "../Style/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const collectionRef = category
      ? query(collection(db, "Items"), where("category", "==", category))
      : collection(db, "Items");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setError("No se encontraron productos en esta categoría.");
        } else {
          const productsAdapted = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          setProducts(productsAdapted);
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Ocurrió un error al obtener los productos.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ItemListContainer">
      <h2 className="ItemList">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
