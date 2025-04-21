import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const ProjectsGoing = () => {
  // State to manage the active filter
  const [activeFilter, setActiveFilter] = useState('*');

  // State to manage the lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Project data
  const projects = [
    {
      id: 1,
      category: 'first',
      image: '/img/img-600x400-6.jpg',
      title:   <strong >4K Watt 24 VOLT</strong>,
      description: (
        <>
          4K Watt Inverter Knox/Fox, 6 Solar Panel (580-590) Watt Astronergy/Longi, L2/L3 Stand, DC Wire, AC & DC Breaker, Installation with all Accessories.
          <br />
          <strong className="text-primary">Supports:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0' , marginBottom: '0', }}>
            <li>Fan (10)</li>
            <li>Energy Saver (20)</li>
            <li>Dc Inverter Ac 1.5 Ton (1)</li>
            <li>Fridge (1)</li>
            <li>Led TV/Room Cooler (1)</li>
            <li>Iron/Motor</li>
          </ul>
          <strong className="text-primary">Packages:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0' , marginBottom: '0'}}>
            <li>Rs 325,000</li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      category: 'second',
      image: '/img/img-600x400-5.jpg',
      title: <strong>6K WATT 48 VOLT</strong> ,
      description: (
        <>
          6K Watt Inverter Knox/Fox, 11 Solar Panel (580-590) Watt Astronergy/Longi, L2/L3 Stand, DC Wire, AC & DC Breaker, Installation with all Accessories.
          <br />
          <strong className="text-primary">Supports:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0', marginBottom: '0' }}>
            <li>Fan (12)</li>
            <li>Energy Saver (20)</li>
            <li>Dc Inverter Ac 1.5 Ton (2)</li>
            <li>Fridge (1)</li>
            <li>Led TV/Room Cooler (2)</li>
            <li>Iron/Motor (1)</li>
          </ul>
          <strong className="text-primary">Packages:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0', marginBottom: '0' }}>
            <li><strong>STANDARD:</strong> Rs 500,000</li>
            <li><strong>PREMIUM:</strong> Rs 550,000</li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      category: 'second',
      image: '/img/img-600x400-4.jpg',
      title: <strong>6K WATT</strong>,
      description: (
        <>
          <>ON GRID SOLAR (600-700 UNIT) Monthly</>
          <br />
          <strong className="text-primary">Supports:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0', marginBottom: '0' }}>
            <li>Inverter 10K Watt (Knox/Fox)</li>
            <li>10 Solar Panel 580-590 Watt (Astronergy/Longi)</li>
            <li>H Beam Guarded Structure</li>
            <li>6mm DC Wire</li>
            <li>AC, DC Breaker + DP Box</li>
            <li>Green Meter (IESCO)</li>
            <li>Lightning Arrester</li>
            <li>Installation with all Accessories</li>
          </ul>
          <strong className="text-primary">Price:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0', marginBottom: '0' }}>
            <li>Rs 675,000</li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      category: 'third',
      image: '/img/img-600x400-3.jpg',
      title: <strong>10K _ WATT</strong>,
      description: (
        <>
          <>ON GRID SOLAR (1100-1300 UNIT) Monthly</>
          <br />
          <strong className="text-primary">Supports:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0', marginBottom: '0' }}>
            <li>Inverter 10K Watt (Knox/Chint)</li>
            <li>17 Solar Panel 580-610 Watt (Astronergy/Longi)</li>
            <li>H Beam Guarded Structure</li>
            <li>6mm DC Wire</li>
            <li>AC, DC Breaker + DP Box</li>
            <li>Green Meter (IESCO)</li>
            <li>Lightning Arrester</li>
            <li>Installation with all Accessories</li>
          </ul>
          <strong className="text-primary">Packages:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0', marginBottom: '0' }}>
            <li><strong>STANDARD PACKAGE:</strong> Rs 890,000</li>
            <li><strong>PREMIUM PACKAGE:</strong> Rs 940,000</li>
          </ul>
        </>
      ),
      
    },
    {
      id: 5,
      category: 'fourth',
      image: '/img/img-600x400-2.jpg',
      title: <strong>15K _ WATT</strong>,
      description: (
        <>
          <>ON GRID SOLAR (1600-1800 UNIT) Monthly</>
          <br />
          <strong className="text-primary">Supports:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0', marginBottom: '0' }}>
            <li>Inverter 15K Watt (Knox/Chint)</li>
            <li>24 Solar Panel 580-610 Watt (Astronergy/Longi)</li>
            <li>H Beam Guarded Structure</li>
            <li>6mm DC Wire</li>
            <li>AC, DC Breaker + DP Box</li>
            <li>Green Meter (IESCO)</li>
            <li>Lightning Arrester</li>
            <li>Installation with all Accessories</li>
          </ul>
          <strong className="text-primary">Packages:</strong>
          <ul style={{ marginLeft: '20px', paddingLeft: '0', marginBottom: '0' }}>
            <li><strong>STANDARD PACKAGE:</strong> Rs 1,250,000</li>
            <li><strong>PREMIUM PACKAGE:</strong> Rs 1,300,000</li>
          </ul>
        </>
      ),
    },
    
  ];

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Function to open the lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage('');
  };

  // Filter projects based on active filter
  const filteredProjects = activeFilter === '*' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="container-xxl ">
      <div className="container">
        {/* Section Heading */}
        <Fade direction="up" delay={100} triggerOnce>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            <h6 className="text-primary">Our Packages</h6>
            <h1 className="mb-4">Our Latest Solar And Renewable Energy Packages</h1>
          </div>
        </Fade>

        {/* Filter Buttons */}
        <Fade direction="up" delay={200} triggerOnce>
          <div className="row mt-n2">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li 
                  className={`mx-2 ${activeFilter === '*' ? 'active' : ''}`} 
                  onClick={() => handleFilterChange('*')}
                >
                  All
                </li>
                <li 
                  className={`mx-2 ${activeFilter === 'first' ? 'active' : ''}`} 
                  onClick={() => handleFilterChange('first')}
                >
                  4K-WATT
                </li>
                <li 
                  className={`mx-2 ${activeFilter === 'second' ? 'active' : ''}`} 
                  onClick={() => handleFilterChange('second')}
                >
                  6K-WATT
                </li>
                <li 
                  className={`mx-2 ${activeFilter === 'third' ? 'active' : ''}`} 
                  onClick={() => handleFilterChange('third')}
                >
                  10K-WATT
                </li>
                <li
                  className={`mx-2 ${activeFilter === 'fourth' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('fourth')}
                >
                  15K-WATT
                </li>
              </ul>
            </div>
          </div>
        </Fade>

        {/* Projects Grid */}
        <Fade direction="up" delay={300} triggerOnce>
          <div className="row g-4 portfolio-container">
            {filteredProjects.map((project) => (
              <div key={project.id} className={`col-lg-4 col-md-6 portfolio-item ${project.category}`}>
                <div className="portfolio-img rounded overflow-hidden">
                  <img 
                    className="img-fluid" 
                    src={project.image} 
                    alt={project.title} 
                    onClick={() => openLightbox(project.image)} // Open lightbox on image click
                  />
                  <div className="portfolio-btn">
                    <a 
                      className="btn btn-lg-square btn-outline-light rounded-circle mx-1" 
                      href={project.image} 
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox(project.image);
                      }}
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="pt-3">
                  <p className="text-primary mb-0">{project.title}</p>
                  <hr className="text-primary w-25 my-2" />
                  <h5 className="lh-base" style={{ fontWeight: 400 }}>{project.description}</h5>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>

      {isLightboxOpen && (
  <div 
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}
    onClick={closeLightbox} // Close lightbox on click outside the image
  >
    {/* Close Button (X) with Larger Size */}
    <button
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '36px', // Increased font size for a larger X
        cursor: 'pointer',
      }}
      onClick={(e) => {
        e.stopPropagation(); // Prevent closing the lightbox when clicking the button
        closeLightbox();
      }}
    >
      ×
    </button>

    {/* Lightbox Image */}
    <img 
      src={selectedImage} 
      alt="Selected" 
      style={{ maxWidth: '90%', maxHeight: '90%' }} 
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
    />
  </div>
)}
    </div>
  );
};

export default ProjectsGoing;