import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";

const ProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const token = JSON.parse(sessionStorage.getItem("token"));

  const getOneProduct = async () => {
    const getOneProduct = await clienteAxios.get(`/products/${params.id}`);
    setProduct(getOneProduct.data.getProduct);
  };

  const addProdCart = async () => {
    try {
      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Para añadir este producto al carrito, debes Iniciar Sesion!",
          text: "Seras redirigido al Iniciar Sesion!",
        });
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else {

        const addProd = await clienteAxios.post(
          `/products/cart/${params.id}`,
          {},
          configHeaders()
        );
console.log(addProd);
        if (addProd.status === 200) {
          Swal.fire({
            title: "Producto Añadido al Carrito!",
            icon: "success",
          });
        }

      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Producto ya existe en el carrito",
        });
      }
    }
  };

  const addFavCart = async () => {
    try {
      console.log('entrar al try');
      if (!token) {
        console.log('entra al if');
        Swal.fire({
          icon: "error",
          title: "Para añadir este producto a favoritos, debes Iniciar Sesion!",
          text: "Seras redirigido al Iniciar Sesion!",
        });
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else {
        console.log('entra al else');

        const addProd = await clienteAxios.post(
          `/products/fav/${params.id}`, {}, configHeaders()
        );
        console.log(addProd);
        if (addProd.status === 200) {
          console.log('entra al status=200');
          Swal.fire({
            title: "Producto Añadido a Favoritos!",
            icon: "success",
          });
        }else{
          console.log(addProd.status);
        }

      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Producto ya existe en favoritos",
        });
      }
    }
  };
  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <>
      <Container className="my-4">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={6}>
            <img src={product.imagen} alt="Imagen del Producto" style={{ width: '50%', height: 'auto' }} />
          </Col>
          <Col xs={12} sm={6}>
            <p>{product.titulo}</p>
            <p>{product.precio}</p>
            <p>{product.codigo}</p>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="mx-2" onClick={addProdCart}>
                Añadir al Carrito
              </Button>
              <Button variant="warning" onClick={addFavCart}>
                Añadir a Favoritos
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default ProductPage;
