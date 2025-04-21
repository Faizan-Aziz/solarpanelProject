import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fade } from 'react-awesome-reveal';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: 'img/carousel-1.jpg',
      title: 'Pakistan\'s Trusted Solar Energy Partner',
      description: 'With 15+ years of expertise, we deliver premium solar solutions that reduce your electricity bills by up to 100%.'
    },
    {
      id: 2,
      image: 'img/carousel-2.jpg',
      title: 'End-to-End Solar Solutions',
      description: 'From residential rooftops to commercial solar farms - design, installation, and maintenance by certified engineers. Pay once, save forever.'
    },
    {
      id: 3,
      image: 'img/carousel-3.jpg',
      title: '24/7 Reliable Clean Energy',
      description: 'Smart solar systems with battery backup that power your home day and night. Weather-resistant technology designed for Pakistan\'s climate conditions.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div>
        <img 
          src={slides[i].image} 
          alt="" 
          style={{ 
            width: '50px', 
            height: '30px',
            objectFit: 'cover'
          }} 
        />
      </div>
    ),
    appendDots: dots => (
      <div style={{ 
        bottom: '20px',
        width: '100%',
        position: 'absolute'
      }}>
        <ul style={{ 
          margin: '0',
          padding: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px'
        }}>{dots}</ul>
      </div>
    )
  };

  return (
    <div className="container-fluid p-0 pb-5" style={{ overflow: 'hidden' }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="position-relative">
            <img 
              className="img-fluid" 
              src={slide.image} 
              alt="" 
              style={{
                width: '100%',
                height: '60vh',
                minHeight: '400px',
                maxHeight: '600px',
                objectFit: 'cover',
                objectPosition: 'center'
              }} 
            />

            <div className="owl-carousel-inner position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <Fade direction="up" duration={800} triggerOnce>
                      <h1 className="display-2 text-white">
                        {slide.title}
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-3">
                        {slide.description}
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;