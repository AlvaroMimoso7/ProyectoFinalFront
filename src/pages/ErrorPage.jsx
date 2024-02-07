import React from 'react';
import "../css/errorpage.css";
import Button from 'react-bootstrap/Button';
import { Nav, Container } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <Container fluid className="fondo-error">  
      <div className='d-flex justify-content-center mt-5'>
        <Nav.Link href="/"><Button variant='primary' size='lg'>Regresa al gimnasio</Button></Nav.Link>
      </div>
    </Container>
  );
};

export default ErrorPage;
