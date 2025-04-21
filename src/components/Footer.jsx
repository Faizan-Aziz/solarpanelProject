import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5 justify-content-between">
          {/* First Column - Contact Info (unchanged) */}
          <div className="col-lg-5 col-md-6">
            <h5 className="text-white mb-4">Join The Future With Us</h5>
            <div className="mb-4">
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i> Office # G-252/A, China Market, College Rd, Rawalpindi</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>0345 5430275</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>hafeezsolarenergy@gmail.com</p>
            </div>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light btn-social me-2" href="https://www.facebook.com/profile.php?id=61571577388983">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-square btn-outline-light btn-social"
                href="https://wa.me/923455430275?text=Hey%2C%20Hafeez%20Solar%20Energy%20Here.%20What%20is%20your%20question%3F%20Feel%20free%20to%20ask."
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Second Column - Quick Links (updated with Link components) */}
          <div className="col-lg-4 col-md-6"> {/* Changed from col-lg-3 to col-lg-4 */}
            <h5 className="text-white mb-4">Quick Links</h5>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <Link className="btn btn-link" to="/service">Our Services</Link>
            <Link className="btn btn-link" to="/Terms&Conditions">Terms & Condition</Link>
            <Link className="btn btn-link" to="/projects">Packages</Link>
          </div>

          {/* Third Column - Project Gallery (unchanged) */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Project Gallery</h5>
            <div className="row g-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="col-4" key={item}>
                  <img 
                    className="img-fluid rounded" 
                    src={`img/gallery-${item}.jpg`} 
                    alt={`Project ${item}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section (unchanged) */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link to="/">Hafeez Solar</Link>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end pb-4">
              Developed By: <a href="https://www.linkedin.com/in/muhammad-faizan-aziz-11a5b7231/">Faizan Aziz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;