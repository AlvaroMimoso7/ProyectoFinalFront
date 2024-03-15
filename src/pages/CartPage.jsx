import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";

const CartPage = () => {
  const [carrito, setCarrito] = useState([]);

  const getProdCart = async () => {
    try {
      const carts = await clienteAxios.get(`/carts`, configHeaders());
     setCarrito(carts.data.getCarts[1].productos);
     console.log
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOneProdCart = async (idProduct) => {
    console.log(idProduct);
    try {
      const data = await clienteAxios.delete(
        `/carts/${idProduct}`,
        configHeaders()
      );
      if (data.status === 200) {
        Swal.fire({
          title: "Tu producto ha sido eliminado del carrito!",
          text: "You clicked the button!",
          icon: "success",
        });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (ev) => {};

  useEffect(() => {
    console.log(carrito);
    getProdCart();
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="d-flex justify-content-center my-5">
        <Table striped bordered hover className="w-50">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((cart) => (
              <tr key={cart._id}>
                <td>{cart.titulo}</td>
                <td>{cart.precio}</td>
                <td>{cart.codigo}</td>
                <td>
                  <img
                    src={cart.imagen}
                    alt="imagen del producto"
                    width={50}
                  />
                </td>
                <td className="w-25">
                  <input
                    type="number"
                    className="form-control"
                    value={1}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <p>0</p>
                </td>
                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => deleteOneProdCart(cart._id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <footer style={{ marginTop: "auto", backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
      </footer>
    </div>
  );
};

export default CartPage;

