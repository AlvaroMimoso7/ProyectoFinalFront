import React, { useEffect, useState } from "react";
import ImagenesC from "../Components/ImagenesC";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../Components/CardsC";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const getAllProducts = await fetch("http://localhost:3001/api/products");
    const data = await getAllProducts.json();
    setProducts(data.getAllProducts);
  };
  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);
  return (
    <>
      <ImagenesC
        url={
          "https://img.freepik.com/fotos-premium/gimnasio-arafed-bandas-rodadura-maquinas-gran-sala-generativa-ai_955884-9931.jpg"
        }
        alt={"gimnasio"}
        width={"100%"}
      />

      <Container>
        <Row>
          {products.map((product) => (
            <Col sm={"12"} md={"6"} lg={"4"} className="my-3">
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

export default HomePage;
