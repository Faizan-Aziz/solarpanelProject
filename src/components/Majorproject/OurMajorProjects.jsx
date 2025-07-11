import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const MajorProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Elahi Cotton Mill",
      address: "Mandehra Mandra Chakwal Road, Rawalpindi",
      system: "125 Watt Solar Panel System",
      img: "https://res.cloudinary.com/dovqlntrq/image/upload/elahiCotton_hgxpwp"
    },
    {
      id: 2,
      title: "Taj Mill Limited",
      address: "I-9, Industrial Area, Islamabad",
      system: "40 Kwatt Solar Panel System Installation",
      img: "https://res.cloudinary.com/dovqlntrq/image/upload/tajmill_f3cmcf"
    },
    {
      id: 3,
      title: "Taxila Cotton Mill",
      address: "Hasan Adbaal",
      system: "Upgrading of Existing Solar Panel System",
      img: "https://res.cloudinary.com/dovqlntrq/image/upload/Taxilacotton_f8wpyq"
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/*Title Section - Completely unchanged*/}
        <Fade direction="down" triggerOnce>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h2 className="text-primary">Our Major Projects</h2>
            <h3 className="mb-4">
              Transforming industries with <span className="text-primary">reliable solar solutions</span> across Pakistan
            </h3>
          </div>
        </Fade>

        {/* Projects Grid - Only changed img to LazyLoadImage */}
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <Fade direction="up" delay={project.id * 100} triggerOnce>
                <div className="service-item rounded overflow-hidden" style={{ height: '430px' }}>
                  {/* LazyLoadImage with identical styling */}
                  <LazyLoadImage
                    className="img-fluid w-100 rounded-top"
                    src={project.img}
                    alt={project.title}
                    effect="opacity"
                    style={{ 
                      height: '240px', 
                      objectFit: 'cover',
                      display: 'block' // Ensures identical rendering
                    }}
                    wrapperProps={{
                      style: {
                        display: 'block', // Maintains layout
                        height: '240px' // Matches original dimensions
                      }
                    }}
                  />
                  
                  {/* Content Section - Completely unchanged */}
                  <div className="p-4" style={{ lineHeight: '1.8' }}>
                    <h4 className="mb-3">{project.title}</h4>
                    <p className="mb-2"><strong>Address:</strong> {project.address}</p>
                    <p className="mb-0"><strong>System:</strong> {project.system}</p>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MajorProjects;