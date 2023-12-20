import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "react-router-dom";

const TopSlider = ({id}) => {

    const slides = [
      {
        title: 'Divyang Para Sports Association of Delhi ',
        description: (
          <>'DPSA works on its own and is linked with the Paralympic Committee of India to encourage and grow sporting spirits in people <br/> with disabilities covering both visually and intellectually impaired people. '</> ),
        btnText: '#ParaSportsAssociation',
        // image : 'img/index/green-line-shape.png',
        link: 'https://www.paralympicindia.org.in/affiliated-state-units.',
      },
      {
        title: 'Known by our abilities, not by our Disabilities',
        description: (<>'An organization that operates independently and is linked to the Paralympic Committee of India is working hard to encourage and grow sports <br/>for people with disabilities. This includes those who have visual and intellectual impairments.'</>),
        btnText: '#DPSA',
        // image : 'img/index/green-line-shape.png',
        link: 'https://www.paralympicindia.org.in/affiliated-state-units.',
      },
    ];
  
    return (
      <div className="slider-container">
        <div className='slide-bg'>
          <img
            className="home-banner-bg"
            src="img/home/banner/banner-image.jpg"
            alt="Divyang Para Sports Association of Delhi"
          />
        </div>
        <div>
          <Carousel  autoplay infiniteLoop>
            {slides.map((slide, index) => (
              <div key={index} className="slide-container">
                {/* <div className="slide-image">
                  <img src={slide.image} alt={slide.title} />
                </div> */}
                <div className="slide-content">
                <svg viewBox="0 0 191.6 78.6" className="lottie-shape">
                  <path class="path" fill="none" stroke="#DD131A" stroke-width="4.5" stroke-linecap="round" d="M186.3,17.5c0,0-36.4-18.2-92.3-14.7S1.4,29.6,2.9,47.8s34.4,25.9,62.6,28s79.9-1.5,108.2-14.9
                s12.8-31.8-5.9-37.7c-26.4-8.4-49.5-9.5-49.5-9.5"/>
                </svg>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className='slider-button'>
                    <Link  to={slide.link} className="bg-red-btn"
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