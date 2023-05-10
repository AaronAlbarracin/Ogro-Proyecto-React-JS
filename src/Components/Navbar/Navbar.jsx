
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Ogro from '../../Assets/Img/Ogro.png';
import CartWidget from '../CartWidget';
import '../Style/Navbar.css';

function NavScrollExample() {
  return (
    <div className='BackgroundNav'>
      <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to={'/'} className='NavOgro' href="#">
        <img className='LogoImg' src={Ogro} alt="Ogro" />Ogro <span>S.R.L</span>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='NavLink' to={'/'}>Todos</Link>
            <Link className='NavLink' to={"/category/3"}>Clasicc</Link>
            <Link className='NavLink' to={"/category/2"}>Furia</Link>
            <Link className='NavLink' to={"/category/1"}>Magia</Link>
            <Link className='NavLink' to={"/producto/4"}>No Muertos</Link>
            <Link className='NavLink' to={"cart"}><CartWidget /></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      </div>
  );
}

export default NavScrollExample;








