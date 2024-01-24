import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import clienteAxios, { configHeaders } from "../helpers/clientAxios";

const CartPage = () => {
  const [carrito, setCarrito] = useState([]);

  const getProdCart = async () => {
    const carts = await clienteAxios.get(`/carts`, configHeaders);
    setCarrito(carts.data.getCarts[0].productos);
  };

  const handleChange = (ev) => {};

  useEffect(() => {
    getProdCart();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <Table striped bordered hover className="w-50">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>precio</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((cart) => (
              <tr key={cart._id}>
                <td>{cart.titulo}</td>
                <td>{cart.precio}</td>
                <td>{cart.codigo}</td>
                <td>
                  <img src={cart.imagen} alt="imagen del producto" width={50} />
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CartPage;
