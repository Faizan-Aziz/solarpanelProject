import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Import the Fade animation

const PageHeader = ({ title, activeBreadcrumb }) => {
  return (
    <div className="container-fluid page-header py-5 mb-5">
      <div className="container py-5">
        {/* Title with Fade Animation */}
        <Fade direction="down" triggerOnce> {/* Add Fade animation to the title */}
          <h1 className="display-3 text-white mb-3">{title}</h1>
        </Fade>

        {/* Breadcrumb with Fade Animation */}
        <Fade direction="down" triggerOnce delay={300}> {/* Add Fade animation to the breadcrumb with a delay */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                {activeBreadcrumb}
              </li>
            </ol>
          </nav>
        </Fade>
      </div>
    </div>
  );
};

export default PageHeader;