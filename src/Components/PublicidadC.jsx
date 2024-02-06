import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../css/PublicidadC.css";

const PublicidadC = () => {
  return (
    <>
      <div className='publicidad-uno mt-3 my-3'>
        <Container>
          <Row>
            <Col sm={"12"} md={"4"} lg={"4"} >
            <img src="https://i.gifer.com/VOHu.gif" alt="" />
            </Col>
          </Row>
        </Container>
    </div>
    </>
  );
};

export default PublicidadC;