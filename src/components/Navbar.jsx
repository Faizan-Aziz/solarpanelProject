import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // For React Router v6
  const navLinkStyle = ({ isActive }) => 
    isActive ? 'nav-item nav-link active text-primary' : 'nav-item nav-link';

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <NavLink to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
        <h2 className="m-0 text-primary" style={{ fontSize: 'calc(1rem + 0.8vw)' }}>
          Hafeez Solar Energy
        </h2>
      </NavLink>

      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink to="/" end className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>
          <NavLink to="/service" className={navLinkStyle}>
            Service
          </NavLink>
          <NavLink to="/projects" className={navLinkStyle}>
            Packages
          </NavLink>

          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Pages
            </a>
            <div className="dropdown-menu bg-light m-0">
              <NavLink 
                to="/Feature" 
                className={({ isActive }) => 
                  `dropdown-item ${isActive ? 'active' : ''}`
                }
              >
                Feature
              </NavLink>
              <NavLink 
                to="/Freequote" 
                className={({ isActive }) => 
                  `dropdown-item ${isActive ? 'active' : ''}`
                }
              >
                Free Quote
              </NavLink>
              <NavLink 
                to="/Customerreviews" 
                className={({ isActive }) => 
                  `dropdown-item ${isActive ? 'active' : ''}`
                }
              >
                Testimonial
              </NavLink>
            </div>
          </div>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </div>

        <NavLink to="/contact" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
          Get A Quote
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;