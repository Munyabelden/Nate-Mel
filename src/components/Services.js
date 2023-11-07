import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/Service.css'

function Services() {
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1
    }
  };

  return (
    <div className="services">
      <h2>What we offer</h2>
      <Carousel 
        responsive={responsive}
        centerMode={true}
         itemClass="carousel-item-padding-40-px"
        className='carousel-container'
       >
        <div className='carousel item-1'>
          <h3>Full Stack Development</h3>
        </div>
        <div className="carousel item-2">
          <h3>Front-end Development</h3>
        </div>
        <div className="carousel item-3">
          <h3>Back-end Development</h3>
        </div>
        <div className="carousel item-4">
          <h3>Databases</h3>
        </div>
        <div className="carousel item-5">
          <h3>Graphic Design</h3>
        </div>
        <div className="carousel item-6">
          <h3>Accounting Services</h3>
        </div>
        <div className="carousel item-7">
          <h3>Virtual Assistance</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default Services;
