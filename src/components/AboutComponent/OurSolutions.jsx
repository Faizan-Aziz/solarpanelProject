import React from 'react';
import { Fade } from 'react-awesome-reveal';

const OurSolutions = () => {
  const solutions = [
    {
      title: "INDUSTRIAL",
      description: "We provide highly efficient mass Sidi's system that sync with your existing power generation system that can power your industries all year long.",
      image: "img/img-600x400-1.jpg"
    },
    {
      title: "COMMERCIAL",
      description: "We offer the best available technologies to create cost-effective Renewable Energy for your commercial space.",
      image: "img/img-600x400-2.jpg"
    },
    {
      title: "RESIDENTIAL",
      description: "We follow a customized approach to offer residential Solar Solutions of different capacities as per your unique needs.",
      image: "img/img-600x400-4.jpg"
    },
    {
      title: "SMEs",
      description: "Do you own a small- or medium-sized business and are unsure of what Solar Solutions to get? We can tailor make solar System to cater to your needs.",
      image: "img/img-600x400-5.jpg"
    }
  ];

  return (
    <Fade duration={800} triggerOnce>
      {/* Changed container-fluid and added custom padding */}
      <div className="container-fluid px-lg-5 py-5" style={{ maxWidth: '1800px' }}>
        <div className="row justify-content-center">
          {/* Expanded column width */}
          <div className="col-xxl-10 col-xl-11 col-lg-12">
            <div className="text-center mb-5">
              <h1 className="display-4 mb-3 fw-bold text-primary">OUR SOLUTIONS</h1>
              <p className="lead fs-3">
                OFFERING EXCEPTIONAL SOLAR SOLUTIONS FOR EVERY NEED
              </p>
              <p className="fs-5">
                Our marketing, sales, engineering and customer service teams strive to provide the best solutions to our customers in line with their needs. We cover Residential, Commercial, Industrial and SME requirements.
              </p>
            </div>

            {/* Grid Tied System Card - now wider */}
            <div className="card shadow-sm border-0 mb-5 mx-lg-5">
              <div className="card-header bg-primary text-white">
                <h2 className="h3 mb-0">GRID TIED SYSTEM</h2>
              </div>
              <div className="card-body p-4 p-md-5">
                <p className="mb-0">
                  The Grid Tied System is designed to connect with the utility grid / Generator & allows load sharing of the Utility. This system may not need to produce 100% of the electricity demand & it works to supplement the utility grid to power the loads.
                </p>
              </div>
            </div>

            {/* Solution Cards - now with more horizontal space */}
            <div className="row g-4 px-lg-4">
              {solutions.map((solution, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div className="rounded-circle overflow-hidden mb-3 mx-auto" style={{width: '150px', height: '150px'}}>
                        <img 
                          src={solution.image} 
                          alt={solution.title}
                          className="img-fluid w-100 h-100"
                          style={{objectFit: 'cover'}}
                        />
                      </div>
                      <h3 className="h5 mb-3">{solution.title}</h3>
                      <p className="mb-0">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default OurSolutions;