
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Ogro from '../../Assets/Img/Ogro.png';
import CartWidget from '../CartWidget';
// // import ItemListContainer from '../ItemListContainer';

import '../Style/Navbar.css';

function NavScrollExample() {
  return (
    <div className='BackgroundNav'>
      <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='NavOgro' href="#">
        <img className='LogoImg' src={Ogro} alt="Ogro" />Ogro <span>S.R.L</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='NavLink' href="#action1">Home</Nav.Link>
            <Nav.Link className='NavLink' href="#action2">Link</Nav.Link>
            <Nav.Link className='NavLink' href="#">
            <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      </div>
  );
}

export default NavScrollExample;








