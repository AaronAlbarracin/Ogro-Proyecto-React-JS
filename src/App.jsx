import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Counter from './Components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
          <ItemListContainer greeting="BIENVENIDO A TIENDA ONLINE OGRO!" />
        </div>
        <h3>Numero</h3>
      <Counter />
      </header>
    </div>
  );
}

export default App;