import React from "react";
import Home from "./Components/Home/Home";
import CartContent from "./Components/CartContent/CartContent";
import DataProvider from "./Components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
  <DataProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/:categoryId" element={< Home />}/>
    <Route path="/producto/:productoId" element={< ItemDetailContainer />}/>
    <Route path="/producto/:productoId/cart" element={<CartContent />}/>
    <Route path="/cart" element={<CartContent />}/>
    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
  </Routes>
  </BrowserRouter>
  </DataProvider>
  )
}


export default App;