import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
          <ItemListContainer greeting="Bienvenido a tienda online Ogro!"/>
    </div>
      </header>
    </div>
  );
}

export default App;
