import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import"../css/Login.css"

const LoginPage = () => {
  const navigate = useNavigate();
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
      sessionStorage.setItem("token", JSON.stringify(sendFormLogin.data.token));
      sessionStorage.setItem("role", JSON.stringify(sendFormLogin.data.role));
      sessionStorage.setItem(
        "idUsuario",
        JSON.stringify(sendFormLogin.data.idUsuario)
      );
      Swal.fire({
        icon: "success",
        title: "Exitos iniciaste sesion como administrador con exito!",
        text: "Felicitaciones!",
      });
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    } else {
      sessionStorage.setItem("token", JSON.stringify(sendFormLogin.data.token));
      sessionStorage.setItem("role", JSON.stringify(sendFormLogin.data.role));
      sessionStorage.setItem(
        "idUsuario",
        JSON.stringify(sendFormLogin.data.idUsuario)
      );
      Swal.fire({
        icon: "success",
        title: "Exitos iniciaste sesion como Usuario con exito!",
        text: "Felicitaciones!",
      });
      setTimeout(() => {
        navigate("/user");
      }, 3000);
    }
  };
  return (
    <>
    <div className="contenedor-1">
    <h1 className="text">BIENVENIDOS</h1>
      <div className="d-flex justify-content-center my-5 mt-5">
        <Form className="w-25">
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label className="text">Usuario</Form.Label>
            <Form.Control className="form"
              type="text"
              name="user"
              value={formValues.user}
              onChange={handleChange}
              placeholder="EJ: usuario123"
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label className="text">Contraseña</Form.Label>
            <Form.Control className="form"
              type="password"
              name="pass"
              value={formValues.pass}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="btn-login" type="submit" onClick={handleClick}>
            Iniciar Sesión
          </Button>
        </Form>
      </div>


    </div>
    
</>
  );
};

export default LoginPage;
