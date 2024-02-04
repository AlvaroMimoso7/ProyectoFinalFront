import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import clienteAxios, { configHeaders } from "../helpers/clientAxios";
import '../css/Register.css'
const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    user: "",
    email: "",
    pass: "",
    rpass: "",
  });
  const handleChange = (ev) => {
    setFormValues({ ...formValues, [ev.target.name]: ev.target.value });
  };

  const handleClick = async (ev) => {
    try {
      ev.preventDefault();
      const { user, email, pass, rpass } = formValues;
      if (!user && !email && !pass && !rpass) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algun campo esta vacio!",
        });
      } else if (pass === rpass) {
        const sendForm = await clienteAxios.post(
          "/users",
          {
            nombreUsuario: user,
            emailUsuario: email,
            contrasenia: pass,
          },
          configHeaders
        );
        if (sendForm.status === 201) {
          Swal.fire({
            title: "Felicidades te registraste Exitosamente!",
            icon: "success",
          });
          setInterval(()=>{
            location.href='/login'
          },2000)
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las contraseñas no coinciden!",
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.msg}`,
        });
      }
    }
  };

  return (
    <>


      <div className="contenedor-hea">
        <h1 className="text-center 1rem">CREA TU CUENTA</h1>
        <div className="d-flex justify-content-center mb-5">
          <Form className="w-25">
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="text-center">Usuario</Form.Label>
              <Form.Control className="form-1"
                type="text"
                name="user"
                value={formValues.user}
                onChange={handleChange}
                placeholder="EJ:usuario123"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail ">
              <Form.Label className="text-center ">Email del Usuario</Form.Label>
              <Form.Control className="form-1"
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="EJ: email@dominio.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword ">
              <Form.Label className="text-center">Contraseña</Form.Label>
              <Form.Control className="form-1"
                value={formValues.pass}
                name="pass"
                onChange={handleChange}
                type="password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-center">Repetir Contraseña</Form.Label>
              <Form.Control className="form-1"
                value={formValues.rpass}
                name="rpass"
                onChange={handleChange}
                type="password"
              />
            </Form.Group>
           
            <Button  className="btn-register " type="submit" onClick={handleClick}>
              Registrarse
            </Button>

            
           


          </Form>
        </div>

      </div>

    </>
  );
};

export default RegisterPage;
