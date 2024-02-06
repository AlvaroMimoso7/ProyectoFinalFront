import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ImagenesC from "../Components/ImagenesC";




const Contacto = () => {
  return (
    <>
      <Container fluid  className='mt-5 mb-5 '>
       <br />
       <br />
       <br className='mt-5' />

        

        <Row className='justify-content-center mt-5'>
           <Col sm={4} md={8} lg={4} className=''>
             <Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Nombre</Form.Label>
                   <Form.Control type="text" placeholder="Tu nombre" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="gustavo@gmail.com" />
                 </Form.Group>
                       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                   <Form.Label>Escribe tu comentario</Form.Label>
                   <Form.Control as="textarea" rows={3} />
                 </Form.Group>
                 <Button variant="primary" type="submit">
                   Enviar
                 </Button>
              </Form>
            </Col>
          <Col sm={12} lg={4}  className='text-center d-none d-lg-block'>
             <ImagenesC
              url={
              "https://img.freepik.com/fotos-premium/gimnasio-arafed-bandas-rodadura-maquinas-gran-sala-generativa-ai_955884-9931.jpg"
              }
              alt={"gimnasio"}
              width={"100%"}
            />

          </Col> 
        </Row>
         

      </Container>
    
    
    </>
    
  )
}

export default Contacto;


