import React from 'react'
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./caro.css"
function Caro({data_list}) 
{
   const renderSlides = Object.keys((data_list)).map((image) => (
      <div className='' key={data_list[image].alt}>
      <img className="max-h-96 max-w-screen" src={data_list[image].url} alt={data_list[image].alt} />
      <p className="legend">{data_list[image].label}</p>
    </div>
  ))
  
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }
  
  return (    
    <>
      <div className="flex flex-wrap justify-center center mt-6 rounded">
        
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
        selectedItem={data_list[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
    </>
  )
}
export default Caro;