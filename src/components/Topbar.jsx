import React from 'react';

const Topbar = () => {
  return (
    <div className="container-fluid bg-dark p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>Office #G-252/A,China Market,College Road, RWP</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <small className="far fa-clock text-primary me-2"></small>
            <small>Mon - Sat : 10.00 AM - 08.00 PM</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>0345 5430275</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center mx-n2">
            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"  href="https://wa.me/923455430275?text=Hey%2C%20Hafeez%20Solar%20Energy%20Here.%20What%20is%20your%20question%3F%20Feel%20free%20to%20ask."
                target="_blank"
                rel="noopener noreferrer">
              <i className="fab fa-whatsapp"
               style={{ fontSize: '1.3rem' }}></i>
            </a>
            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.facebook.com/profile.php?id=61571577388983">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;