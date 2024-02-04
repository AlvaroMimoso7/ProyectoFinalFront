import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const CarrouselC = () => {
  return (
    <>
     <Carousel>
      <Carousel.Item >
       <img src='https://www.lifefitness.es/resource/image/1867664/landscape_ratio16x9/720/405/b4baeb4ac095bb9d3c089c1037d4ce60/QK/gimnasio-altafit-torre-picasso-madrid-spain-3.jpg' width='100%'/>
    
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://suelosport.com/wp-content/uploads/2021/01/Como-eliminar-ruidos-en-gimnasios-copy.jpg'alt='' width='100%'/>
     
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://www.jdgyms.co.uk/wp-content/uploads/2023/02/Pre-sale-Website-Pics-6-1024x682.png'width='100%'/>
     
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default CarrouselC;