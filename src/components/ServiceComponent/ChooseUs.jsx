import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ChooseUs = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          {/* Left Section (Text Content) */}
          <div className="col-lg-6 feature-text py-5">
            <Fade direction="left" delay={100} triggerOnce>
              <div className="p-lg-5 ps-lg-0">
                <h6 className="text-primary">Why Choose Us!</h6>
                <h1 className="mb-4">Complete Commercial & Residential Solar Systems</h1>
                <p className="mb-4 pb-2">
                  We provide top-quality solar solutions for homes and businesses. 
                  Our expert team designs efficient systems that maximize your energy savings 
                  while using the most reliable solar technology available.
                </p>
                <div className="row g-4">
                  {/* Feature 1 */}
                  <div className="col-6">
                    <Fade direction="up" delay={200} triggerOnce>
                      <div className="d-flex align-items-center">
                        <div className="btn-square bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                          <i className="fa fa-check text-white fs-5"></i>
                        </div>
                        <div className="ms-3 ms-md-4">
                          <p className="mb-0 small">Quality</p>
                          <h5 className="mb-0 h6">Services</h5>
                        </div>
                      </div>
                    </Fade>
                  </div>

                  {/* Feature 2 */}
                  <div className="col-6">
                    <Fade direction="up" delay={300} triggerOnce>
                      <div className="d-flex align-items-center">
                        <div className="btn-square bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                          <i className="fa fa-user-check text-white fs-5"></i>
                        </div>
                        <div className="ms-3 ms-md-4">
                          <p className="mb-0 small">Expert</p>
                          <h5 className="mb-0 h6">Workers</h5>
                        </div>
                      </div>
                    </Fade>
                  </div>

                  {/* Feature 3 */}
                  <div className="col-6">
                    <Fade direction="up" delay={400} triggerOnce>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: '50px',
                            height: '50px',
                            aspectRatio: '1/1',
                            flexShrink: 0
                          }}>
                          <i className="fa fa-drafting-compass text-white fs-5"></i>
                        </div>
                        <div className="ms-3 ms-md-4">
                          <p className="mb-0 small">Free</p>
                          <h5 className="mb-0 h6">Advice</h5>
                        </div>
                      </div>
                    </Fade>
                  </div>

                  {/* Feature 4 */}
                  <div className="col-6">
                    <Fade direction="up" delay={500} triggerOnce>
                      <div className="d-flex align-items-center">
                        <div className="btn-square bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                          <i className="fa fa-headphones text-white fs-5"></i>
                        </div>
                        <div className="ms-3 ms-md-4">
                          <p className="mb-0 small">Customer</p>
                          <h5 className="mb-0 h6">Support</h5>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Right Section (Image) */}
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="/img/feature.jpg"
                style={{ objectFit: 'cover' }}
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;