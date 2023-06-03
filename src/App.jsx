import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Confirmation from './Components/Confirmation/Confirmation';
import { CartProvider } from './Context/CartContext';
function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/confirmation' element={<Confirmation />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
