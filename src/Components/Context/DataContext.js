import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filterProductById = (id) => {
    const selectedProduct = data.find((product) => product.id === id);
    setSelectedProduct(selectedProduct);
  };

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  },[]);

  return <dataContext.Provider value={{ data, cart, setCart, selectedProduct, filterProductById }}>{children}</dataContext.Provider>
};

export default DataProvider;
