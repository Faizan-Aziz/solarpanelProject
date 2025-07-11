import React from 'react';
import { Fade } from 'react-awesome-reveal';

const TermsConditions = () => {
  return (
    <Fade duration={800} triggerOnce>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-primary text-white py-3">
                <h2 className="h3 mb-0 fw-bold">TERMS & CONDITIONS</h2>
              </div>
              <div className="card-body p-4 p-lg-5">
                <ul className="list-unstyled mb-0">
                  <li className="mb-4 pb-3 border-bottom">
                    <h3 className="h5 mb-2 fw-semibold text-primary">Quotation Validity</h3>
                    <p className="mb-0 fs-5 lh-base">
                      The price quoted is valid for 3 days from the date of quotation or the date of confirmation/acceptance
                      of the order by the customer, whichever is earlier.
                    </p>
                  </li>
                  
                  <li className="mb-4 pb-3 border-bottom">
                    <h3 className="h5 mb-2 fw-semibold text-primary">O&M Services</h3>
                    <p className="mb-0 fs-5 lh-base">
                      One (1) year of free-of-cost O&M services as per prevailing company policy. Thereafter, the
                      Customer will be charged for O&M subject to contract.
                    </p>
                  </li>
                  
                  <li className="mb-4 pb-3 border-bottom">
                    <h3 className="h5 mb-2 fw-semibold text-primary">Net Metering</h3>
                    <p className="mb-0 fs-5 lh-base">
                      Hafeez Solar Energy will assist customers in procuring Net Metering. The obligation to procure
                      required approvals rests with the Customer. In no circumstances Hafeez Solar Energy shall be held
                      liable on any account if the said approval is not granted by NEPRA. Hafeez Solar Energy will assist
                      the Customer to prepare the required documentation for Net-Metering.
                    </p>
                  </li>
                  
                  <li className="mb-4 pb-3 border-bottom">
                    <h3 className="h5 mb-2 fw-semibold text-primary">Natural Calamities</h3>
                    <p className="mb-0 fs-5 lh-base">
                      In case of natural calamities such earthquake, storm or tornados etc. Hafeez Solar Energy is not
                      responsible to any damages to system.
                    </p>
                  </li>
                  
                  <li className="mb-4 pb-3 border-bottom">
                    <h3 className="h5 mb-2 fw-semibold text-primary">Sanctioned Load Charges</h3>
                    <p className="mb-0 fs-5 lh-base">
                      All charges regarding extension of Sanctioned load by IESCO are not included in above quoted
                      prices.
                    </p>
                  </li>
                  
                  <li className="mb-4 pb-3 border-bottom">
                    <h3 className="h5 mb-2 fw-semibold text-primary">Civil Work</h3>
                    <p className="mb-0 fs-5 lh-base">
                      Any kind of civil work is not included in the scope of work.
                    </p>
                  </li>
                  
                  <li>
                    <h3 className="h5 mb-2 fw-semibold text-primary">NOTE</h3>
                    <p className="mb-0 fs-5 lh-base">
                      Fee for facilitation services rendered in Net-Metering will be charged separately at per actual.
                      It will be applicable as per the laws of NEPRA and local IESCO. This is an additional service for
                      Customer support. The time line for Net Metering to be operational depends on the IESCO/NEPRA
                      approval.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card-footer bg-light text-center py-3">
                <p className="mb-0 text-muted small">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default TermsConditions;