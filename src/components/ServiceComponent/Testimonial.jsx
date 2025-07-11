import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Testimonial = () => {
  // ✅ Correct Cloudinary configuration for YOUR account
  const getCloudinaryUrl = (imageId) => {
    return `https://res.cloudinary.com/dovqlntrq/image/upload/f_auto,q_auto/${imageId}`;
  };

  // Testimonial data with verified URLs
  const testimonials = [
    {
      id: 1,
      image: getCloudinaryUrl('review2_vp0n7f'), // ← Will now work
      quote: 'Hafeez Solar Energy cut my electricity bills...',
      name: 'Asif Khan',
    },
    {
      id: 2,
      image: getCloudinaryUrl('review1_gkj5lo'),
      quote: 'Very happy with Hafeez Solar Energy...',
      name: 'Husain Ali',
    },
    {
      id: 3,
      image: getCloudinaryUrl('review3_gztio9'),
      quote: 'Switching to solar with Hafeez...',
      name: 'Amir Shezad',
    },
  ];

  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel settings (unchanged)
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div style={{ borderRadius: '10px', padding: '10px', bottom: '-30px' }}>
        <ul style={{ margin: '0px', padding: '0px' }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: i === currentSlide ? '#28a745' : '#ccc',
        margin: '0 5px',
        cursor: 'pointer',
      }}></div>
    ),
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <Fade direction="up" delay={100} triggerOnce>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            <h6 className="text-primary">Reviews</h6>
            <h1 className="mb-4">What Our Clients Say!</h1>
          </div>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item text-center">
                <div className="testimonial-img position-relative">
                  <LazyLoadImage
                    className="img-fluid rounded-circle mx-auto mb-5"
                    src={testimonial.image}
                    alt={testimonial.name}
                    effect="blur"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      aspectRatio: '1/1',
                      objectFit: 'cover'
                    }}
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