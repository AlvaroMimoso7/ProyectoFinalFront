import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavbarC.css";
import ImagenesC from "./ImagenesC";
import { NavLink } from "react-router-dom";

const NavbarC = () => {
  const token = sessionStorage.getItem("token") || "";
  const role = sessionStorage.getItem("role") || "";

  const singOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    setTimeout(() => {
      location.href = "/";
    }, 1000);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-navbar-propio">
        <Container fluid>
          <Navbar.Brand
            href={
              token && role === "user"
                ? "/user"
                : token && role === "admin"
                ? "/admin"
                : "/"
            }
          >
            <ImagenesC
              url={
                "https://i.pinimg.com/736x/53/cb/f9/53cbf95ad6cfa854e4f1bbee0ed43536.jpg"
              }
              alt={"imagen principal"}
              width={`75`}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href={
                  token && role === "user"
                    ? "/user"
                    : token && role === "admin"
                    ? "/admin"
                    : "/"
                }
              >
                Inicio
              </Nav.Link>
              {token && role === "user" ? (
                <>
                  <Nav.Link href="/sobre nosotros">Sobre nosotros</Nav.Link>
                  <Nav.Link href="#link">Contacto</Nav.Link>
                  <Nav.Link href="#link">Favoritos</Nav.Link>
                  <Nav.Link href="#link">Carrito</Nav.Link>
                </>
              ) : token && role === "admin" ? (
                <>
                  <Nav.Link href="/admin-users">Usuarios</Nav.Link>
                  <Nav.Link href="/admin-products">Productos</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/sobre-nosotros">Sobre nosotros</Nav.Link>
                  <Nav.Link href="#link">Contacto</Nav.Link>
                </>
              )}
            </Nav>
            {token && role ? (
              <Nav className="ms-auto">
                <Nav.Link href="#" onClick={singOut}>
                  Cerrar Sesion
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Nav.Link href="/login">Iniciar sesion</Nav.Link>
                <Nav.Link href="/register">Registrarse</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
