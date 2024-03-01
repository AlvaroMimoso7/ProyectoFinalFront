import React from "react";
import { Card } from "react-bootstrap";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";
import Swal from "sweetalert2";
import "../css/CardsC.css";

const CardsC = ({ url, titulo, precio, codigo, idProduct, idPage, onDelete }) => {
  const deleteProdFav = async () => {
    try {
      const data = await clienteAxios.delete(`/favs/${idProduct}`, configHeaders());
      if (data.status === 200) {
        Swal.fire({
          title: "Tu producto ha sido eliminado de Favoritos!",
          icon: "success",
        });
        
        onDelete(idProduct); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card style={{ width:"18rem"}} className="mb-5">
    <Card.Img variant="top" src={url} className="object-fit-cover" />
    <Card.Body style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text >{precio}</Card.Text>
      <Card.Text style={{whiteSpace: 'nowrap', 
  overflow: 'hidden',
  textOverflow: 'ellipsis'}}>{codigo}</Card.Text>
      {idPage === "FavPage" ? (
        <Link to={`#`} className="btn btn-danger" onClick={deleteProdFav}>
          Eliminar
        </Link>
      ) : (
        <Link to={`/product/${idProduct}`} className="btn btn-cards">
          Ver mas
        </Link>
      )}
    </Card.Body>
  </Card>
  );
};

export default CardsC;


