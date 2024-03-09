import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavbarC.css";
import ImagenesC from "./ImagenesC";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";
import Swal from "sweetalert2";


const NavbarC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [newProduct, setNewProduct] = useState({
    titulo: "",
    precio: 0,
    codigo: "",
  });

  const [imagen, setImagen] = useState({});

  const token = JSON.parse(sessionStorage.getItem("token")) || "";
  const role = JSON.parse(sessionStorage.getItem("role")) || "";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const singOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("idUsuario");
   setTimeout(()=>{
    navigate("/");
  },1000)
  };

  const handleChange = (ev) => {
    setNewProduct({ ...newProduct, [ev.target.name]: ev.target.value });
  };

  const handleChangeImagen = (ev) => {
    setImagen(ev.target.files[0]);
  };

  const handleClick = async (ev) => {
    try {
      ev.preventDefault();
      const { titulo, precio, codigo } = newProduct;
      if (!titulo || !precio || !codigo) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algun campo esta vacio!",
        });
      } else {
        const data = new FormData();
        data.append("titulo", titulo);
        data.append("precio", precio);
        data.append("codigo", codigo);
        data.append("imagen", imagen);
        
        const createProd = await clienteAxios.post(
          "/products",
          data,
          configHeaders()
        );
        if (createProd.status === 201) {
          Swal.fire({
            title: "Producto creado exitosame!",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
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
              <NavLink
                className={"nav-link"}
                to={
                  token && role === "user"
                    ? "/user"
                    : token && role === "admin"
                    ? "/admin"
                    : "/"
                }
              >
                Inicio
              </NavLink>
              {token && role === "user" ? (
                <>
                  <NavLink to="/sobre-nosotros" className={"nav-link"}>
                    Sobre nosotros
                  </NavLink>
                  <NavLink to="/contacto" className={"nav-link"}>
                    Contacto
                  </NavLink>
                  <NavLink to="/fav" className={"nav-link"}>
                    Favoritos
                  </NavLink>
                  <NavLink to="/cart" className={"nav-link"}>
                    Carrito
                  </NavLink>
                </>
              ) : token && role === "admin" ? (
                <>
                  <NavLink to="/admin-users" className={"nav-link"}>
                    Usuarios
                  </NavLink>
                  <NavLink to="/admin-products" className={"nav-link"}>
                    Productos
                  </NavLink>
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="clase-btn"
                  >
                    Crear Producto
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Crear Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Titulo</Form.Label>
                          <Form.Control
                            type="text"
                            value={newProduct.titulo}
                            onChange={handleChange}
                            name="titulo"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Precio</Form.Label>
                          <Form.Control
                            type="number"
                            value={newProduct.precio}
                            onChange={handleChange}
                            name="precio"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Codigo</Form.Label>
                          <Form.Control
                            type="text"
                            value={newProduct.codigo}
                            onChange={handleChange}
                            name="codigo"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>imagen</Form.Label>
                          <Form.Control
                            type="file"
                            value={newProduct.imagen}
                            onChange={handleChangeImagen}
                          />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={handleClick}
                          >
                            Guardar
                          </Button>
                        </div>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </>
              ) : (
                <>
                  <NavLink to="/sobre-nosotros" className={"nav-link"}>
                    Sobre nosotros
                  </NavLink>
                  <NavLink to="/contacto" className={"nav-link"}>
                    Contacto
                  </NavLink>
                </>
              )}
            </Nav>
            {token && role ? (
              <Nav className="ms-auto">
                <NavLink to="#" onClick={singOut} className={"nav-link"}>
                  Cerrar Sesion
                </NavLink>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <NavLink to="/login" className={"nav-link"}>
                  Iniciar sesion
                </NavLink>
                <NavLink to="/register" className={"nav-link"}>
                  Registrarse
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
