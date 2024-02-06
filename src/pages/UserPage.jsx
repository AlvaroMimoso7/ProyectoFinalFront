import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../Components/CardsC";
import clienteAxios from "../helpers/clientAxios";


const UserPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const allProducts = await clienteAxios.get("/products");
    setProducts(allProducts.data.getAllProducts);
  };
  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  return (
    <>
      <Container className="footer-principal">
        <Row>
          {products.map((product) => (
            <Col sm={"12"} md={"6"} lg={"4"} className="my-3" key={product._id}>
              <Cards
                url={product.imagen}
                titulo={product.titulo}
                precio={product.precio}
                codigo={product.codigo}
                idProduct={product._id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default UserPage;
