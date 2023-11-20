import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Slider.css';

const MultiCarouselSlider = () => {

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        <i className="fa-solid fa-chevron-right"></i>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
        <i className="fa-solid fa-chevron-left"></i>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className='item-1 item'>
      <h3>Full Stack Development</h3>
    </div>,
    <div className='item-2 item'>  
      <h3>Front-end Development</h3>
    </div>,
    <div className='item-3 item'>
      <h3>Back-end Development</h3>
    </div>,
    <div className='item-5 item'>
      <h3>Graphic Design</h3>
    </div>,
    <div className='item-6 item'>
      <h3>Accounting Services</h3>
    </div>,
    <div className='item-7 item'>
      <h3>Virtual Assistance</h3>
    </div>,
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings} className="carousel-slider">
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiCarouselSlider;
