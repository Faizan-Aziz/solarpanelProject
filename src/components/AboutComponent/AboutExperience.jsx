import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const AboutExperience = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          {/* Image Section - Modified for mobile */}
          <div className="col-lg-6 ps-lg-0" style={{ 
            minHeight: '400px',
            // Mobile styles
            '@media (max-width: 768px)': {
              paddingLeft: '0 !important',
              paddingRight: '0 !important',
              marginLeft: '0 !important',
              marginRight: '0 !important',
              minHeight: '300px'
            }
          }}>
            <div className="position-relative h-100" style={{
              // Mobile styles
              '@media (max-width: 768px)': {
                position: 'static !important',
                height: 'auto !important'
              }
            }}>
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="/img/about.jpg"
                style={{ 
                  objectFit: 'cover',
                  // Mobile styles
                  '@media (max-width: 768px)': {
                    width: '100% !important',
                    position: 'relative !important',
                    height: 'auto !important',
                    left: '0 !important',
                    right: '0 !important'
                  }
                }}
                alt="About Us"
              />
            </div>
          </div>

          {/* Content Section - Unchanged */}
          <div className="col-lg-6 about-text py-3">
            <Fade direction="up" triggerOnce>
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">About Us</h6>
                <h1 className="mb-4">2+ Years of Trusted Solar Energy Solutions</h1>
                <p>
                  At <b className='text-primary'>Hafeez Solar Energy</b>, we have been providing reliable and affordable solar power systems across Pakistan for over 2 years plus. Our experience helps us deliver the best solar solutions for homes, businesses, and industries.
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3"></i><b>High-Quality Products – </b>We use top-grade solar panels and equipment.
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3"></i><b>Expert Installations – </b>Our skilled team ensures long-lasting performance.
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3"></i><b>Customer Satisfaction – </b>Trusted by thousands for their solar energy needs
                </p>
                <Link to="/moreabout" className="btn btn-primary rounded-pill py-3 px-5 mt-3">
                  Explore More
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExperience;