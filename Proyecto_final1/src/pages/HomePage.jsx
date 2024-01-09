import React from 'react';
import ImagenesC from '../Components/ImagenesC';
import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../Components/CardsC';

const HomePage = () => {
  return (
    <>
    <ImagenesC url={"https://img.freepik.com/fotos-premium/gimnasio-arafed-bandas-rodadura-maquinas-gran-sala-generativa-ai_955884-9931.jpg"} 
    alt={"gimnasio cheto"} 
    width={"100%"}/>

    <Container>
      <Row>
        <Col sm={"12"} md={"6"} lg={"4"} className='my-3'>
         <Cards url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8bFKiBlO06jYUZzgAy_X_VIwN1wpc4cqEvtQxS3CewAv9tp9gq3SuxJI3sHU8N3-rRM&usqp=CAU"}
         titulo={"Sector cardio"}
         descripcion={"Ejercita tu sistema cardio"}/>
        </Col>
        <Col sm={"12"} md={"6"} lg={"4"} className='my-3'>
         <Cards url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTgOuQhxVavXRZe8miqYoLM7VpI5RcS4T-8nPS_GpSEIMGPe9FqOVrA3P6A7D2maSASk&usqp=CAU"}
         titulo={"Aparatos"}
         descripcion={"Disfruta las mejores maquinas"}/>
        </Col>
        <Col sm={"12"} md={"6"} lg={"4"} className='my-3'>
         <Cards url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVB03EAV1pGjDjCG7NHiOYOpxbuI2BvqK9UM7p4_jsuxQmJQjxGFn36Fv2gGChmTGwpOo&usqp=CAU"}
         titulo={"Entrenamiento funcional"}
         descripcion={"Entrena todo tu cuerpo"}/>
        </Col>
        <Col sm={"12"} md={"6"} lg={"4"} className='my-3'>
         <Cards url={"https://img.freepik.com/fotos-premium/grupo-personas-haciendo-entrenamiento-yoga-clase-yoga-gimnasio-interior-relajarse-tener-salud-saludable-deporte-recreacion-coleccion-foto_201468-1559.jpg?size=626&ext=jpg"}
         titulo={"Yoga"}
         descripcion={"Clases de yoga para todas las edades"}/>
        </Col>
        <Col sm={"12"} md={"6"} lg={"4"} className='my-3'>
         <Cards url={"https://images.hola.com/imagenes/estar-bien/20191121154053/ejercicios-complementar-clases-spinning-lb/0-746-190/complementar-clases-spinning-t.jpg"}
         titulo={"Spining"}
         descripcion={"Veni a probar nuestras divertidas clases"}/>
        </Col>
        <Col sm={"12"} md={"6"} lg={"4"} className='my-3'>
         <Cards url={"https://i.blogs.es/8f5b8b/istock-891602094/450_1000.webp"}
         titulo={"Crossfit"}
         descripcion={"Adaptamos nuestras clases para vos"}/>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default HomePage;