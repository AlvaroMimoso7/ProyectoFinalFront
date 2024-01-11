import React from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import ImagenesC from './ImagenesC';
import "../css/FooterC.css";

const FooterC = () => {
  return (
    <>
    <footer className='bg-navbar-propio p-5'>
        <Container>
            <Row>
                <Col>
                    <ImagenesC url={"https://i.pinimg.com/736x/53/cb/f9/53cbf95ad6cfa854e4f1bbee0ed43536.jpg"} 
                    alt={"imagen footer"} 
                    width={`100`}/>
                </Col>
                <Col>
                  <Nav.Link href="#home">Facebook</Nav.Link>
                  <Nav.Link href="#link">Instagram</Nav.Link>
                  <Nav.Link href="#link">Youtube</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href="#home">Trabaja con nosotros</Nav.Link>
                  <Nav.Link href="#link">Terminos y Condiciones</Nav.Link>
                  <Nav.Link href="#link">Whats App</Nav.Link>
                </Col>
                <Col>
                   <iframe src="" frameborder="0"></iframe>
                </Col>
            </Row>
        </Container>
    </footer>
    </>
  );
};

export default FooterC;