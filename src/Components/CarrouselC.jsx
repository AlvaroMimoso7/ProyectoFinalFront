import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../css/CardsC.css'

const CarrouselC = () => {
  return (
    <>
     <Carousel>
   
      <Carousel.Item  >
       <img src='../src/img/11.png'  width='100%'/>
    
      </Carousel.Item>
      <Carousel.Item >
      <img src='../src/img/12.png' width='100%' />
     
      </Carousel.Item>
      <Carousel.Item>
      <img src='../src/img/13.png'width='100%'/>
     
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default CarrouselC;