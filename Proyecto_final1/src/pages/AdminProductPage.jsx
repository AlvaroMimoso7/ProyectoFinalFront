import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
const AdminProductPage = () => {
  const [products, setProducts] = useState([]);

  const [show, setShow] = useState(false);
  const [productStates, setProductStates] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (idProd) => {
    setShow(true);
    const productFind = products.find((prod) => prod._id === idProd);
    setProductStates(productFind);
  };

  const getProducts = async () => {
    const getAllProducts = await fetch("http://localhost:3001/api/products");
    const data = await getAllProducts.json();
    setProducts(data.getAllProducts);
  };
  const handleChange = (ev) => {
    setProductStates({ ...productStates, [ev.target.name]: ev.target.value });
  };
  const handleClick = async (ev, idProd) => {
    ev.preventDefault();
    const updateProd = await fetch(
      `http://localhost:3001/api/products/${productStates._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          titulo: productStates.titulo,
          precio: productStates.precio,
          codigo: productStates.codigo,
          imagen: productStates.imagen,
        }),
      }
    );
    const data = await updateProd.json();
    if (data) {
      handleClose();
      Swal.fire({
        title: "Producto Actualizado exitosamente!",
        icon: "success",
      });
    }
  };
  const deleteProd = async (idProd) => {
    const confirmDeletedProd = confirm(
      "Estas seguro de que quieres eliminar este producto?"
    );
    if (confirmDeletedProd) {
      const delProd = await fetch(
        `http://localhost:3001/api/products/${idProd}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await delProd.json();
      if (data) {
        Swal.fire({
          title: "Producto elminado exitosamente!",
          icon: "success",
        });
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <Table striped bordered hover className="w-75">
          <thead>
            <tr>
              <th>Titulo del Producto</th>
              <th>Precio</th>
              <th>Codigo</th>
              <th>Imagen del Producto</th>
              <th>Editar/Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.titulo}</td>
                <td>{product.precio}</td>
                <td>{product.codigo}</td>
                <td>
                  <img src={product.imagen} alt="" width={"50"} />
                </td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleShow(product._id)}
                  >
                    Editar
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Editar Productos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Titulo</Form.Label>
                          <Form.Control
                            type="text"
                            name="titulo"
                            value={productStates.titulo}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Precio</Form.Label>
                          <Form.Control
                            type="text"
                            name="precio"
                            value={productStates.precio}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Codigo</Form.Label>
                          <Form.Control
                            type="text"
                            value={productStates.codigo}
                            name="codigo"
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Imagen</Form.Label>
                          <Form.Control
                            type="text"
                            value={productStates.imagen}
                            name="imagen"
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Button
                          variant="success "
                          type="submit"
                          onClick={handleClick}
                        >
                          Guardar
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                  <Button
                    variant="danger"
                    onClick={() => deleteProd(product._id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminProductPage;
