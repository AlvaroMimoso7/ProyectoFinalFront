import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  const getOneProduct = async () => {
    const getOneProduct = await fetch(
      `http://localhost:3001/api/products/${params.id}`
    );
    const data = await getOneProduct.json();
    setProduct(data.getProduct);
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
