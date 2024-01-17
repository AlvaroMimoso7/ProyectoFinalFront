import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const CarrouselC = () => {
  return (
    <>
     <Carousel>
      <Carousel.Item >
       <img src='https://www.beaumont.ab.ca/ImageRepository/Document?documentID=5427' width='100%'/>
    
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://tse1.mm.bing.net/th?id=OIP.XrIAC8VIrh7OQcFRlxQcrAHaEK&pid=Api&P=0&h=220'alt='' width='100%'/>
     
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://tse2.mm.bing.net/th?id=OIP.0oFJTcLNRkh3RkopsjWwuAHaE8&pid=Api&P=0&h=220'width='100%'/>
     
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default CarrouselC;