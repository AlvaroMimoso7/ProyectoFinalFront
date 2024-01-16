import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const token = sessionStorage.getItem("token");

  const getOneProduct = async () => {
    const getOneProduct = await fetch(
      `http://localhost:3001/api/products/${params.id}`
    );
    const data = await getOneProduct.json();
    setProduct(data.getProduct);
  };

  const addProdCart = () => {
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Para añadir este producto al carrito, debes Iniciar Sesion!",
        text: "Seras redirigido al Iniciar Sesion!",
      });
      setTimeout(() => {
        location.href = "/login";
      }, 4000);
    } else {
      Swal.fire({
        title: "Prodcuto Añadido al Carrito!",
        icon: "success",
      });
    }
  };

  const addFavCart = () => {
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Para añadir este producto a favoritos, debes Iniciar Sesion!",
        text: "Seras redirigido al Iniciar Sesion!",
      });
      setTimeout(() => {
        location.href = "/login";
      }, 4000);
    } else {
      Swal.fire({
        title: "Prodcuto Añadido a Favoritos!",
        icon: "success",
      });
    }
  };
  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src={product.imagen} alt="" />
          </Col>
          <Col>
            <p>{product.titulo}</p>
            <p>{product.precio}</p>
            <div>
              <Button variant="primary" className="mx-2" onClick={addProdCart}>
                Añadir al Carrito
              </Button>
              <Button variant="warning" onClick={addFavCart}>Añadir a Favoritos</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
