import React, { useState} from 'react';
import './styles/Service.css';

const items = [
  <div className='item-1'>
    <h3>Full Stack Development</h3>
  </div>,
  <div className='item-2'>
    <h3>Front-end Development</h3>
  </div>,
  <div className='item-3'>
    <h3>Back-end Development</h3>
  </div>,
  <div className='item-4'>
    <h3>Databases</h3>
  </div>,
    <div className='item-5'>
    <h3>Graphic Design</h3>
  </div>,
  <div className='item-6'>
    <h3>Accounting Services</h3>
  </div>,
  <div className='item-7'>
    <h3>Virtual Assistance</h3>
  </div>,
];

const Services = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="services">
      <h2>What we offer</h2>
      <div className="carousel-container">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            {item}
          </div>
        ))}
      </div>
      <button className="carousel-control" onClick={prevItem}>
        Previous
      </button>
      <button className="carousel-control" onClick={nextItem}>
        Next
      </button>
    </div>
  )
}

export default Services;
