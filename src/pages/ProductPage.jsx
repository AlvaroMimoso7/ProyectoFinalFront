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
        const usuario = await clienteAxios.get(
          `/users/${sessionStorage.getItem("idUsuario")}`
        );

        if (usuario.status === 200) {
          const addProd = await clienteAxios.post(
            `/products/cart/${params.id}`,
            {},
            configHeaders
          );
          if (addProd.status === 200) {
            Swal.fire({
              title: "Producto Añadido al Carrito!",
              icon: "success",
            });
          }
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
      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Para añadir este producto a favoritos, debes Iniciar Sesion!",
          text: "Seras redirigido al Iniciar Sesion!",
        });
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else {
        const usuario = await clienteAxios.get(
          `/users/${sessionStorage.getItem("idUsuario")}`, configHeaders
        );

        if (usuario.status === 200) {
          const addProd = await clienteAxios.post(
            `/products/fav/${params.id}`,
            {},
            configHeaders
          );
          if (addProd.status === 200) {
            Swal.fire({
              title: "Producto Añadido a Favoritos!",
              icon: "success",
            });
          }
        }
      }
    } catch (error) {
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
