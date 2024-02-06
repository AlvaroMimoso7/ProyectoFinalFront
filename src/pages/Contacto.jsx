import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ImagenesC from '../Components/ImagenesC';

const Contacto = () => {
  return (
    <>
      <style>
        {`
          body {
            background-color: black;
            color: white;
          }

          .contact-title {
            color: green;
            text-align: center;
          }
        `}
      </style>
      <Container fluid className="mt-5 mb-5 p-5">
        <Row className="justify-content-center mt-5">
          <Col xs={12} lg={4} className="text-center mb-3 mb-lg-0">
            <h2 className="contact-title mb-5">Contactanos!</h2>
            <ImagenesC
              url={
                'https://img.freepik.com/fotos-premium/gimnasio-arafed-bandas-rodadura-maquinas-gran-sala-generativa-ai_955884-9931.jpg'
              }
              alt={'gimnasio'}
              width={'100%'}
            />
          </Col>
          <Col xs={12} lg={8}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Ejemplo@dominio.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Escribe tu comentario</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="warning" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contacto;








