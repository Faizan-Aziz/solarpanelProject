import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      image: '/img/review2.png',
      quote:
        'Hafeez Solar Energy cut my electricity bills in half! Fast installation and excellent service. Highly recommended',
      name: 'Asif Khan',
    },
    {
      id: 2,
      image: '/img/review1.png',
      quote:
        'Very happy with Hafeez Solar Energy! The team was professional, and my solar system works perfectly. 5-star service',
      name: 'Husain Ali',
      
    },
    {
      id: 3,
      image: '/img/review3.png',
      quote:
        'Switching to solar with Hafeez Solar Energy was the best decision. Great quality and amazing support. Thank you!',
      name: 'Amir Shezad',
    
    },
  ];

  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 100, // Faster transition speed (reduced from 300 to 100)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Faster autoplay speed
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
          bottom: '-30px', // Adjust the position of the dots
        }}
      >
        <ul style={{ margin: '0px', padding: '0px' }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: i === currentSlide ? '#28a745' : '#ccc', // Green for active dot, gray for others
          margin: '0 5px',
          cursor: 'pointer',
        }}
      ></div>
    ),
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Section Heading */}
        <Fade direction="up" delay={100} triggerOnce>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            <h6 className="text-primary">Reviews</h6>
            <h1 className="mb-4">What Our Clients Say!</h1>
          </div>
        </Fade>

        {/* Testimonial Carousel */}
        <Fade direction="up" delay={200} triggerOnce>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item text-center">
                <div className="testimonial-img position-relative">
                  <img
                    className="img-fluid rounded-circle mx-auto mb-5"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div className="testimonial-text text-center rounded p-4">
                  <p>{testimonial.quote}</p>
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <span className="fst-italic">{testimonial.profession}</span>
                </div>
              </div>
            ))}
          </Slider>
        </Fade>
      </div>
    </div>
  );
};

export default Testimonial;