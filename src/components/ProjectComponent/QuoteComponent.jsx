import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const formspreeEndpoint = 'https://formspree.io/f/xgvalkzg';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Your message has been sent successfully! We will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          service: '',
          message: '',
        });
      } else {
        setError(result.errors?.map(error => error.message).join(', ') || 'Error sending your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container quote px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <LazyLoadImage
                className="position-absolute img-fluid w-100 h-100"
                src="https://res.cloudinary.com/dovqlntrq/image/upload/quote_xsmfhz"
                style={{ objectFit: 'cover' }}
                alt="Solar Consultation"
                effect="blur"
                wrapperClassName="position-absolute w-100 h-100"
              />
            </div>
          </div>

          <div className="col-lg-6 quote-text py-5">
            <Fade direction="right" delay={300} triggerOnce>
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">Free Solar Consultation</h6>
                <h1 className="mb-4">Get Expert Solar Advice</h1>
                <p className="mb-4 pb-2">
                  Our solar experts will calculate your exact energy needs and provide 
                  a customized solution. Get started with a free consultation today.
                </p>

                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: '55px' }}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        minLength="2"
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: '55px' }}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="tel"
                        className="form-control border-0"
                        placeholder="Your Mobile Number"
                        style={{ height: '55px' }}
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{10,15}"
                        title="Please enter a valid phone number (10-15 digits)"
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: '55px' }}
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>Select A Package</option>
                        <option value="4K-WATT 24 VOLT">4K-WATT 24 VOLT (Rs 325,000)</option>
                        <option value="6K-WATT 48 VOLT">6K-WATT 48 VOLT (Rs 500,000-550,000)</option>
                        <option value="6K-WATT ON GRID">6K-WATT ON GRID (Rs 675,000)</option>
                        <option value="10K-WATT ON GRID">10K-WATT ON GRID (Rs 890,000-940,000)</option>
                        <option value="15K-WATT ON GRID">15K-WATT ON GRID (Rs 1,250,000-1,300,000)</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        placeholder="Your Message (Optional)"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary rounded-pill py-3 px-5"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          'Get Free Consultation'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;