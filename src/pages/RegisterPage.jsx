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

  const [error,setError]= useState({
    user: "",
    email: "",
    pass: "",
    rpass: "",
  });

 
  const handleChange = (ev) => {
    if(ev.target.name==='user'){
       setError({...error,user:''})
    }if(ev.target.name==='email'){
      setError({...error,email:''})
    }if(ev.target.name==='pass'){
      setError({...error,pass:''})
    }if(ev.target.name==='rpass'){
      setError({...error,rpass:''})
    }
    setFormValues({ ...formValues, [ev.target.name]: ev.target.value });
  };

  const handleClick = async (ev) => {
    try {
      ev.preventDefault();
      const { user, email, pass, rpass } = formValues;
      let newError ={}

      if(!user ){
     newError ={...newError,user:'errorUser'}
      } 
      
      if(!email ){
        newError ={...newError,email:'errorEmail'}
         }
      if(!pass ){
          newError ={...newError,pass:'errorPass'}
           }
       if(!rpass ){
            newError ={...newError,rpass:'errorRpass'}
             }
      if(Object.keys(newError).length){
        setError(newError)
        return
      }
      
        if (pass === rpass) {
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
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="text-center">Usuario</Form.Label>
              <Form.Control className={error.user === 'errorUser' ? "form-1 is-invalid" : 'form-1' }
                type="text"
                name="user"
                onChange={handleChange} 
                placeholder ="EJ:usuario123"
              />
            <p className="text-danger">{error.user === 'errorUser' && "campo de usuario vacio"  }</p>  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail ">
              <Form.Label className="text-center ">Email del Usuario</Form.Label>
              <Form.Control className={error.email === 'errorEmail' ? "form-1 is-invalid" : 'form-1' }
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="EJ: email@dominio.com"
              />
                <p className="text-danger">{error.email === 'errorEmail' && "campo de email vacio"  }</p> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword ">
              <Form.Label className="text-center">Contraseña</Form.Label>
              <Form.Control className={error.pass === 'errorPass' ? "form-1 is-invalid" : 'form-1' }
                name="pass"
                onChange={handleChange}
                type="password"
              />
              <p className="text-danger">{error.pass === 'errorPass' && "campo de contraseña vacio"  }</p> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-center">Repetir Contraseña</Form.Label>
              <Form.Control className={error.rpass === 'errorRpass' ? "form-1 is-invalid" : 'form-1' }
                name="rpass"
                onChange={handleChange}
                type="password"
              />
                 <p className="text-danger">{error.rpass === 'errorRpass' && "campo  vacio"  }</p> 
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
