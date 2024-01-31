import React, { useEffect, useState } from "react";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";
import Cards from "../Components/CardsC";
import { Col, Container, Row } from "react-bootstrap";

const FavPages = () => {
  const [favoritos, setFavoritos] = useState([]);

  const getAllFav = async () => {
    try {
      const favs = await clienteAxios.get("/favs", configHeaders());
      console.log(favs);
      setFavoritos(favs.data.getFavs.favoritos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllFav();
  }, []);
  return (
    <>
    <Container className="my-5">
      <Row>
      {favoritos.map((fav) => (
        <Col sm={12} md={4} lg={3}>
        <Cards
          url={fav.imagen}
          titulo={fav.titulo}
          codigo={fav.codigo}
          precio={fav.precio}
          idProduct={fav._id}
          key={fav._id}
          idPage="FavPage"
        />
        </Col>
      ))}
      </Row>
    </Container>
     
    </>
  );
};

export default FavPages;
