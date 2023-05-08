import Navbar from "../Navbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Product from "../Products/Product";



const Home = () => {
    return (
        <>
        <Navbar /> 
        <ItemListContainer greeting="¡ BIENVENIDO A TIENDA ONLINE OGRO !"/>
        <div className="Products"><Product /></div>
        </>
    );
};
  

export default Home;