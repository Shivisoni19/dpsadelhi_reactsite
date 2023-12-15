import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GalleryMain() {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
  };

  const gallery = [
    {
      // title: 'Divyang Para Sports Association of Delhi ',
      // description: (
      //   <>'DPSA works on its own and is linked with the Paralympic Committee of India to encourage and grow sporting spirits in people <br/> with disabilities covering both visually and intellectually impaired people. '</> ),
      // btnText: '#ParaSportsAssociation',
      image: "img/gallery/dpsa-team1.jpeg",
      // link: '/about',
    },
    {
      // title: 'Known by our abilities, not by our Disabilities',
      image: "img/gallery/dpsa-team2.jpg",
    },
    {
      // title: 'Known by our abilities, not by our Disabilities',
      image: "img/gallery/dpsa-team3.jpeg",
    },
    {
      // title: 'Known by our abilities, not by our Disabilities',
      image: "img/gallery/dpsa-team2.jpg",
    },
    {
      // title: 'Known by our abilities, not by our Disabilities',
      image: "img/gallery/dpsa-team3.jpeg",
    },
    {
      // title: 'Known by our abilities, not by our Disabilities',
      image: "img/gallery/dpsa-team4.jpeg",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <Slider {...sliderSettings}>
          {gallery.map((card, index) => (
            <div className="row" key={index}>
              {/* <h2>{card.title}</h2> */}
              <div className="testimonial-carousel-seven">
                <div className="gallery-single-items wow animate__ animate__fadeInUp animated">
                  <div className="thumb style-01">
                    <img alt={card.title} src={card.image} />
                    {/* <p>{card.description}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
