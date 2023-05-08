import React from "react";
import Home from "./Components/Home/Home";
import CartContent from "./Components/CartContent/CartContent";
import DataProvider from "./Components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categoria from "./Components/Category/Category";


function App() {
  return (
  <DataProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<CartContent />}/>
    <Route path="/category/:categoryId" element={< Categoria />}/>
  </Routes>
  </BrowserRouter>
  </DataProvider>
  )
}


export default App;