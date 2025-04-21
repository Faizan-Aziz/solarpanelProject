import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';

const Feature = () => {
  // Data for the feature items
  const features = [
    {
      icon: 'fa-users',
      count: 3453,
      title: 'Happy Customers',
      description: 'Trusted by thousands of homes and businesses in Pakistan',
      delay: 100,
    },
    {
      icon: 'fa-check',
      count: 4234,
      title: 'Solar Project Done',
      description: 'Providing reliable solar solutions all over Pakistan',
      delay: 300,
    },
    {
      icon: 'fa-award',
      count: 3123,
      title: 'Awards Won',
      description: 'Recognized for quality and excellent service.',
      delay: 500,
    },
    {
      icon: 'fa-users-cog',
      count: 500,
      title: 'Expert Team',
      description: 'Skilled workers ensuring the best solar installations.',
      delay: 700,
    },
  ];

  return (
    <div className="container-xxl py-4">
      <div className="container">
        <div className="row g-5">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <Fade direction="up" triggerOnce delay={feature.delay}>
                <div className="d-flex align-items-center mb-4">
                  <div className="btn-lg-square bg-primary rounded-circle me-3">
                    <i className={`fa ${feature.icon} text-white`}></i>
                  </div>
                  <h1 className="mb-0">
                    <CountUp end={feature.count} duration={5} />
                  </h1>
                </div>
                <h5 className="mb-3">{feature.title}</h5>
                <span>{feature.description}</span>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;