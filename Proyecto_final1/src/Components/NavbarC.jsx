import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/NavbarC.css";
import ImagenesC from './ImagenesC';
import { NavLink } from 'react-router-dom';

const NavbarC = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-navbar-propio">
      <Container fluid>
        <Navbar.Brand href="/">
            <ImagenesC url={"https://i.pinimg.com/736x/53/cb/f9/53cbf95ad6cfa854e4f1bbee0ed43536.jpg"} 
            alt={"imagen principal"} 
            width={`75`}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/sobre nosotros">Sobre nosotros</Nav.Link>
            <Nav.Link href="contacto">Contacto</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/login">Iniciar sesion</Nav.Link>
            <Nav.Link href="/register">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavbarC;