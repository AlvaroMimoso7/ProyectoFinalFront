import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ImagenesC from "../Components/ImagenesC";




const Contacto = () => {
  return (
    <>
      <div className="container">
        <div className="text-center mb-4">
          <h2>Ponte en Contacto con Nosotros</h2>
        </div>

        

        <div className="row mb-2">
          <div className="col">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="gustavo@gmail.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Escribe tu comentario</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </div>
          <div className="col">
            <ImagenesC
              url={
                "https://img.freepik.com/fotos-premium/gimnasio-arafed-bandas-rodadura-maquinas-gran-sala-generativa-ai_955884-9931.jpg"
              }
              alt={"gimnasio"}
              width={"100%"}
            />

          </div>
        </div>


      </div>

    
    </>
  
  )
}

export default Contacto;


