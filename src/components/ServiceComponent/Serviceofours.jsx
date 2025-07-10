import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Import the Fade animation

const Serviceofours = () => {
  return (
    <div className="container-xxl ">
      <div className="container">
        {/* Title Section with Animation */}
        <Fade direction="down" triggerOnce>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h2 className="text-primary" >Our Services</h2>
            <h3 className="mb-4">
              Whatever your unique solar energy needs,{' '}
              <span className="text-primary">Hafeez Solar Energy</span> has a solution
            </h3>
          </div>
        </Fade>

        {/* Cards Section with Animation */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-4">
            <Fade direction="up" triggerOnce>
              <div className="service-item rounded overflow-hidden" style={{ height: '650px' }}>
                <img className="img-fluid" src="img/img-600x400-1.jpg" alt="" />
                <div className="position-relative p-4 pt-0" style={{ lineHeight: '1.8' }}>
                  <div className="service-icon">
                    <i className="fa fa-solar-panel fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Engineering, Procurement & Construction (EPC)</h4>
                  <p>HAFEEZ SOLAR ENERGY provides customized turnkey Solar Solutions. Our experts undertake detailed feasibility analysis to design robust, optimized, and complete Engineering, Procurement, and Construction (EPC) Solution.We also provide asset management.</p>
                </div>
              </div>
            </Fade>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-4">
            <Fade direction="up" delay={100} triggerOnce>
              <div className="service-item rounded overflow-hidden" style={{ height: '650px' }}>
                <img className="img-fluid" src="img/img-600x400-2.jpg" alt="" />
                <div className="position-relative p-4 pt-0" style={{ lineHeight: '1.8' }}>
                  <div className="service-icon">
                    <i className="fa fa-wind fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Power Purchase Agreement (PPA)</h4>
                  <p>Maximize ROI with our O&M services: panel cleaning, performance monitoring, and preventative maintenance. Properly maintained systems last 25+ years. We also provide asset management and real-time monitoring solutions.</p>
                </div>
              </div>
            </Fade>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-4">
            <Fade direction="up" delay={200} triggerOnce>
              <div className="service-item rounded overflow-hidden" style={{ height: '650px' }}>
                <img className="img-fluid" src="img/img-600x400-3.jpg" alt="" />
                <div className="position-relative p-4 pt-0" style={{ lineHeight: '1.8' }}>
                  <div className="service-icon">
                    <i className="fa fa-lightbulb fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Operations And Maintenance (O&M)</h4>
                  <p>Keeping your Solar Panels at peak efficiency ensures maximum return on investment. Solar Panels that are properly maintained can last for many years. HAFEEZ SOLAR provides operations and maintenance and Solar asset management and monitoring services.</p>
                </div>
              </div>
            </Fade>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-lg-4">
            <Fade direction="up" delay={300} triggerOnce>
              <div className="service-item rounded overflow-hidden" style={{ height: '650px' }}>
                <img className="img-fluid" src="img/img-600x400-4.jpg" alt="" />
                <div className="position-relative p-4 pt-0" style={{ lineHeight: '1.8' }}>
                  <div className="service-icon">
                    <i className="fa fa-solar-panel fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Solar Panels</h4>
                  <p>Under Solar Panel installation contracts, we supply and mount the modules and include a production warranty package. The system permanently remains the property of the client, and they utilize clean energy generated. They gain full ownership after the agreed warranty period expires.</p>
                </div>
              </div>
            </Fade>
          </div>

          {/* Card 5 */}
          <div className="col-md-6 col-lg-4">
            <Fade direction="up" delay={400} triggerOnce>
              <div className="service-item rounded overflow-hidden" style={{ height: '650px' }}>
                <img className="img-fluid" src="img/img-600x400-5.jpg" alt="" />
                <div className="position-relative p-4 pt-0" style={{ lineHeight: '1.8' }}>
                  <div className="service-icon">
                    <i className="fa fa-wind fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Build-Operate-Transfer (BOT)</h4>
                  <p>Under Build-Operate-Transfer (BOT) contract, we provide and install the plant and include an operating service package. The plant usually remains the property of the customer, and they purchase electricity produced. They take over operations of the plant after a pre-arranged span of time.</p>
                </div>
              </div>
            </Fade>
          </div>

          {/* Card 6 */}
          <div className="col-md-6 col-lg-4">
            <Fade direction="up" delay={500} triggerOnce>
              <div className="service-item rounded overflow-hidden" style={{ height: '650px' }}>
                <img className="img-fluid" src="img/img-600x400-6.jpg" alt="" />
                <div className="position-relative p-4 pt-0" style={{ lineHeight: '1.8' }}>
                  <div className="service-icon">
                    <i className="fa fa-lightbulb fa-3x"></i>
                  </div>
                  <h4 className="mb-3">INCLUDED IN SCOPE OF WORK</h4>
                  <p>In Solar System Installation, we provide DC cables (6mm² PV-to-inverter), AC cables (4mm² inverter-to-DB),breakers, conduits, combiner boxes, MC4 connectors, earthing cables (2.5mm²), earth pits/rods, All necessary accessories as per project requirements for complete electrical safety and compliance.</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceofours;