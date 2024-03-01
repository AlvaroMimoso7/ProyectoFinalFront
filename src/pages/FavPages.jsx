import React, { useEffect, useState } from "react";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";
import CardsC from "../Components/CardsC";
import { Col, Container, Row } from "react-bootstrap";

const FavPages = ({refresh, setRefresh}) => {
  const [favoritos, setFavoritos] = useState([]);

  const getAllFav = async () => {
    try {
      const favs = await clienteAxios.get("/favs", configHeaders());
      setFavoritos(favs.data.getFavs.favoritos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFav = async (id) => {
    try {
      await clienteAxios.delete(`/favs/${id}`, configHeaders());
      setFavoritos((prevFavoritos) => prevFavoritos.filter((fav) => fav._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFav();
  }, [refresh]);

  const updateFavoritos = (id) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((fav) => fav._id !== id));
  };

  return (
    <>
      <Container className="my-5">
        <Row>
          {favoritos.map((fav) => (
            <Col sm={12} md={4} lg={3} key={fav._id}>
              <CardsC
                url={fav.imagen}
                titulo={fav.titulo}
                codigo={fav.codigo}
                precio={fav.precio}
                idProduct={fav._id}
                idPage="FavPage"
                onDelete={() => handleDeleteFav(fav._id, updateFavoritos)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FavPages;
