import React, { useEffect, useState } from "react";
import ImagenesC from "../Components/ImagenesC";
import { Col, Container, Row} from "react-bootstrap";
import Cards from "../Components/CardsC";
import clienteAxios from "../helpers/clientAxios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const allProducts = await clienteAxios.get("/products");
    setProducts(allProducts.data.getAllProducts);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="contenedor">
        <ImagenesC
          url={
            "https://img.freepik.com/fotos-premium/gimnasio-arafed-bandas-rodadura-maquinas-gran-sala-generativa-ai_955884-9931.jpg"
          }
          alt={"gimnasio"}
          width={"100%"}
        />

        <Container>
          <Row>
            {products?.map((product) => (
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
      </div>
    </>
  );
};

export default HomePage;
