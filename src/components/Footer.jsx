import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Footer = () => {
  // Gallery images with Cloudinary IDs
  const galleryImages = [
    'gallery-1_reqvw6',
    'gallery-2_opralf',
    'gallery-3_fp4qls',
    'gallery-4_ej6q2q',
    'gallery-5_nnysxp',
    'gallery-6_gw0toc'
  ];

  return (
    <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5 justify-content-between">
          {/* First Column - Contact Info */}
          <div className="col-lg-5 col-md-6">
            <h5 className="text-white mb-4">Join The Future With Us</h5>
            <div className="mb-4">
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i> Office # G-252/A, China Market, College Road Rawalpindi</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>0345 5430275</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>hafeezsolarenergy@gmail.com</p>
            </div>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light btn-social me-2" href="https://www.facebook.com/profile.php?id=61571577388983">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-square btn-outline-light btn-social"
                href="https://wa.me/923455430275?text=Hello%20Hafeez%20Solar%20Team%2C%20I%20have%20a%20question%20about%3A%0A%0A-%20Solar%20installations%0A-%20Product%20pricing%0A-%20Technical%20support%0A%0ALooking%20forward%20to%20your%20response."
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Second Column - Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <Link className="btn btn-link" to="/service">Our Services</Link>
            <Link className="btn btn-link" to="/Terms&Conditions">Terms & Condition</Link>
            <Link className="btn btn-link" to="/projects">Packages</Link>
          </div>

          {/* Third Column - Project Gallery with Lazy Loading */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Project Gallery</h5>
            <div className="row g-2">
              {galleryImages.map((imageId, index) => (
                <div className="col-4" key={index}>
                  <LazyLoadImage
                    className="img-fluid rounded"
                    src={`https://res.cloudinary.com/dovqlntrq/image/upload/${imageId}`}
                    alt={`Project ${index + 1}`}
                    effect="blur"
                    width="100%"
                    height="100%"
                    style={{
                      aspectRatio: '1/1',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link to="/">Hafeez Solar</Link>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end pb-4">
              Developed By: <a href="https://www.linkedin.com/in/muhammad-faizan-aziz-11a5b7231/">Muhammad Faizan Aziz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;