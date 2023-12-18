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
    dots: true,
    autoplay : true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const gallery = [
    {
      title: 'Team1',
      // description: (
      //   <>'DPSA works on its own and is linked with the Paralympic Committee of India to encourage and grow sporting spirits in people <br/> with disabilities covering both visually and intellectually impaired people. '</> ),
      // btnText: '#ParaSportsAssociation',
      image: "img/gallery/Gallery1.jpg",
      // link: '/about',
    },
    {
      title: 'Team1',
      image: "img/gallery/Gallery2.jpg",
    },
    {
      title: 'Team1',
      image: "img/gallery/Gallery1.jpg",
    },
    {
      title: 'Team1',
      image: "img/gallery/Gallery2.jpg",
    },
    {
      title: 'Team1',
      image: "img/gallery/Gallery1.jpg",
    },
    {
      title: 'Team1',
      image: "img/gallery/Gallery2.jpg",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <Slider {...sliderSettings}>
          {gallery.map((card, index) => (
            <div className="row" key={index}>
              {/* <h2>{card.title}</h2> */}
              <div className="testimonial-carousel-seven gallery">
                <div className="gallery-single-items wow animate__ animate__fadeInUp animated">
                  <div className="thumb style-01">
                    <img alt={card.title} src={card.image}/>
                  </div>
                  <div className="text-center gallery-title">
                    <h3>{card.title}</h3>
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
