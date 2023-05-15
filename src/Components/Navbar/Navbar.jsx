import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Ogro from '../../Assets/Img/Ogro.png';
import CartWidget from '../CartWidget';
import { NavLink, Link } from 'react-router-dom';
import '../Style/Navbar.css';

function NavScrollExample() {
  return (
    <div className='BackgroundNav'>
      <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <h3 className='NavOgro' href="#">
        <img className='LogoImg' src={Ogro} alt="Ogro" />Ogro <span>S.R.L</span>
        </h3>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Link to={`/`} className='NavLinkOff' >Home</Link>
            <NavLink to={`/category/Magia`} className={({isActive}) => isActive ? 'NavLinkOn' : 'NavLinkOff'} >Magia</NavLink>
            <NavLink to={`/category/Furia`} className={({isActive}) => isActive ? 'NavLinkOn' : 'NavLinkOff'} >Furia</NavLink>
            <NavLink to={`/category/Clasico`} className={({isActive}) => isActive ? 'NavLinkOn' : 'NavLinkOff'} >Clasico</NavLink>
            <NavLink to={`/category/No Muerto`} className={({isActive}) => isActive ? 'NavLinkOn' : 'NavLinkOff'} >No Muerto</NavLink>
            <CartWidget className='NavLink'/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      </div>
  );
}

export default NavScrollExample;








