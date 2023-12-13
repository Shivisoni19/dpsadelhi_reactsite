import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "react-router-dom";

const TopSlider = ({id}) => {

    const slides = [
      {
        title: 'OPERATING SYSTEMS',
        description: 'Windows 11, Win 10, Win 8, Win 7',
        btnText: 'Buy now from $19.99',
        link: '/operatingsystem',
      },
      {
        title: 'MICROSOFT OFFICE',
        description: 'Microsoft Office Suite 2021, 2019, 2016, 2013, 2010',
        btnText: 'Buy now from $19.99',
        link: '/microsoftoffice',
      },
    ];
  
    return (
      <div className="slider-container">
        <div className='slide-bg'>
          <img
            className="background-image"
            src="img/index/banner/banner1.jpeg"
            alt="Background"
          />
        </div>
        <div>
          <Carousel autoPlay infiniteLoop>
            {slides.map((slide, index) => (
              <div key={index} className="slide-container">
                <div className="slide-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div className="slide-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className='slider-button'>
                    <Link  to={slide.link} class="slider-button bg-orange"
                      >{slide.btnText}</Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };
  
  export default TopSlider;