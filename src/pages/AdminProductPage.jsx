import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";

const AdminProductPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const getAllProducts = await clienteAxios.get("/products");
      setProducts(getAllProducts.data.getAllProducts);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tus Productos no están en la lista!",
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleEdit = async (id, updatedProduct) => {
    try {
      const response = await clienteAxios.put(
        `/products/${id}`,
        updatedProduct,
        configHeaders()
      );
      if (response.status === 200) {
        const updatedProducts = products.map((product) =>
          product._id === id ? { ...product, ...updatedProduct } : product
        );
        setProducts(updatedProducts);
        Swal.fire({
          title: "Producto Actualizado exitosamente!",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tus Productos no se pueden actualizar!",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Estás seguro de que quieres eliminar este producto?",
        text: "Si lo borras, ya no habrá vuelta atrás, piénsalo bien!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await clienteAxios.delete(
            `/products/${id}`,
            configHeaders()
          );
          if (response.status === 200) {
            const filteredProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(filteredProducts);
            Swal.fire({
              title: "Producto eliminado correctamente!",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tus Productos no se pueden eliminar!",
      });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex justify-content-center mt-3 flex-grow-1">
        <Table responsive bordered hover className="w-100">
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
              <ProductRow
                key={product._id}
                product={product}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
};

const ProductRow = ({ product, onEdit, onDelete }) => {
  const [show, setShow] = useState(false);
  const [productState, setProductState] = useState(product);
  const [newImage, setNewImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (ev) => {
    setProductState({ ...productState, [ev.target.name]: ev.target.value });
  };

  const handleImageChange = (ev) => {
    setNewImage(ev.target.files[0]);
  };

  const handleSave = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.append("titulo", productState.titulo);
    data.append("precio", productState.precio);
    data.append("codigo", productState.codigo);
    if (newImage) {
      data.append("imagen", newImage);
    } else {
      data.append("imagen", productState.imagen);
    }

    onEdit(productState._id, data);
    handleClose();
  };

  return (
    <tr>
      <td>{productState.titulo}</td>
      <td>{productState.precio}</td>
      <td>{productState.codigo}</td>
      <td>
        <img src={productState.imagen} alt="" width={"50"} />
      </td>
      <td className="d-flex">
        <Button variant="warning me-2" onClick={handleShow}>
          Editar
        </Button>
        <Button variant="danger" onClick={() => onDelete(productState._id)}>
          Eliminar
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
                  value={productState.titulo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="text"
                  name="precio"
                  value={productState.precio}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Codigo</Form.Label>
                <Form.Control
                  type="text"
                  value={productState.codigo}
                  name="codigo"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
              </Form.Group>

              <Button variant="success" type="submit" onClick={handleSave}>
                Guardar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </td>
    </tr>
  );
};

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">© 2024 Tu Sitio Web</footer>
  );
};

export default AdminProductPage;
