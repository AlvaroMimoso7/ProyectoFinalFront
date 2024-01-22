import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    user: "",
    pass: "",
  });

  const handleChange = (ev) => {
    setFormValues({ ...formValues, [ev.target.name]: ev.target.value });
  };

  const handleClick = async (ev) => {
    ev.preventDefault();
    const sendFormLogin = await clienteAxios.post(
      "/users/login",
      {
        nombreUsuario: formValues.user,
        contrasenia: formValues.pass,
      },
      configHeaders
    );
console.log(sendFormLogin);

    if (sendFormLogin.data.role === "admin") {
      sessionStorage.setItem("token", sendFormLogin.data.token);
      sessionStorage.setItem("role", sendFormLogin.data.role);
      sessionStorage.setItem("idUsuario", sendFormLogin.data.idUsuario);
      location.href = "/admin";
    } else {
      location.href = "user";
      sessionStorage.setItem("token", sendFormLogin.data.token);
      sessionStorage.setItem("role", sendFormLogin.data.role);
      sessionStorage.setItem("idUsuario", sendFormLogin.data.idUsuario);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <Form className="w-25">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              name="user"
              value={formValues.user}
              onChange={handleChange}
              placeholder="EJ: usuario123"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="pass"
              value={formValues.pass}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit" onClick={handleClick}>
            Inciar Sesion
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
