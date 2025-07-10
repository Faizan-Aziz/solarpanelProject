import React, { useState, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';

const OurGallery = () => {
  // Media items - 6 images and 3 videos
  const galleryItems = [
    // Images
    { id: 1, type: 'image', src: 'img/SolarInstallation.jpg', alt: 'Solar Installation' },
    { id: 2, type: 'image', src: 'img/tajmill.jpg', alt: 'Solar Project' },
    { id: 3, type: 'image', src: 'img/Installing .jpg', alt: 'Installation' },
    { id: 4, type: 'image', src: 'img/Completedproject.jpg', alt: 'Completed Project' },
    { id: 5, type: 'image', src: 'img/SolarPanelstp.jpg', alt: 'Solar Panel Setup' },
    { id: 6, type: 'image', src: 'img/IndustrialInstallation.jpg', alt: 'Industrial Installation' },
    
    // Videos
    { id: 7, type: 'video', src: 'video/video3.mp4', title: 'Installation Process' },
    { id: 8, type: 'video', src: 'video/video2.mp4', title: 'Customer Testimonial' },
    { id: 9, type: 'video', src: 'video/video1.mp4', title: 'System Overview' }
  ];

  // State to track which video is playing
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef([]);

  const handleVideoClick = (id) => {
    if (playingVideo === id) {
      // If clicking the currently playing video, pause it
      videoRefs.current[id].pause();
      setPlayingVideo(null);
    } else {
      // If clicking a different video
      if (playingVideo !== null) {
        // Pause any currently playing video
        videoRefs.current[playingVideo].pause();
      }
      // Play the clicked video
      videoRefs.current[id].play();
      setPlayingVideo(id);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Title Section - Matched to your service component */}
        <Fade direction="down" triggerOnce>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h2 className="text-primary">Our Gallery</h2>
            <h3 className="mb-4" >
              See our <span className="text-primary">solar solutions</span> in action
            </h3>
          </div>
        </Fade>

        {/* Gallery Grid - Matched to your service card sizes */}
        <div className="row g-4 ">
          {galleryItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <Fade direction="up" delay={(item.id % 3) * 100} triggerOnce>
                <div className="service-item rounded overflow-hidden" style={{ height: '320px' }}>
                  {/* Media Content */}
                  {item.type === 'image' ? (
                    <img
                      className="img-fluid w-100"
                      src={item.src}
                      alt={item.alt}
                      style={{ 
                        height: '250px',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <div 
                      className="position-relative video-container"
                      onClick={() => handleVideoClick(item.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <video
                        ref={el => videoRefs.current[item.id] = el}
                        className="img-fluid w-100"
                        style={{
                          height: '250px',
                          objectFit: 'cover',
                          backgroundColor: '#f8f9fa'
                        }}
                        controls={playingVideo === item.id}
                        onClick={(e) => e.stopPropagation()} // Prevent double triggering
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                      {playingVideo !== item.id && (
                        <>
                          <div className="position-absolute top-50 start-50 translate-middle">
                            <i className="fas fa-play-circle fs-1 text-white opacity-75"></i>
                          </div>
                          <div className="position-absolute bottom-0 start-0 p-2 w-100 bg-dark bg-opacity-50 text-white small ">
                            {item.title}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* Description Area - Matched your service cards */}
                  <div className="p-4">
                    {item.type === 'image' ? (
                      <h5 className="mb-0">{item.alt}</h5>
                    ) : (
                      <h5 className="mb-0">{item.title}</h5>
                    )}
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

export default OurGallery;