import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";

const Cards = ({ url, titulo, precio, codigo, idProduct, idPage }) => {
  const deleteProdFav = async () =>{
    try {
      const data = await clienteAxios.delete(`/favs/${idProduct}`, configHeaders)
      if (data.status === 200) {
        Swal.fire({
          title: "Tu producto ha sido eliminado!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Card style={{width:'18rem'}}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{precio}</Card.Text>
          <Card.Text>{codigo}</Card.Text>
          {idPage === "FavPage" ? (
            <Link to={`#`} className="btn btn-danger" onClick={deleteProdFav}>
              Eliminar
            </Link>
          ) : (
            <Link to={`/product/${idProduct}`} className="btn btn-success">
              Ver mas
            </Link>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
