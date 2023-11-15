import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Slider.css';

const MultiCarouselSlider = () => {

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        Next
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
        Prev
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust the number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const carouselItems = [
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

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-tem">
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiCarouselSlider;
