import React, { useState } from 'react';

const ContactSection = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Updated Formspree endpoint
    const formspreeEndpoint = 'https://formspree.io/f/xgvalkzg';

    try {
      // Send form data to Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Formspree Response:', result);

      if (response.ok) {
        setSuccess('Message sent successfully!');
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setError(result.error || 'Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-light overflow-hidden px-lg-0">  
      <div className="container contact px-lg-0">
        <div className="row g-0 mx-lg-0">
          {/* Contact Form Section */}
          <div className="col-lg-6 contact-text py-5">
            <div className="p-lg-5 ps-lg-0">
              <h6 className="text-primary">Contact Us</h6>
              <h1 className="mb-4">Feel Free To Contact Us</h1>
             
              <p className="mb-4">
                <b>Have any questions?</b> Fill out the form below and our experts will contact you within 24 hours Or you can also directly contact us by
              </p>
              <div className="mb-4">
                <p className="mb-2">📞 <b>051-5764877</b></p>
                <p className="mb-2">📧 <b>hafeezsolarenergy@gmail.com</b></p>
                <p className="mb-0">📍 <b>Office #G-252/A,China Market,College Road, RWP,</b></p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Hafeez Solar Energy</b>
              </div>

              {/* Success and Error Messages */}
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

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Your Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="phone">Your Phone Number</label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '100px' }}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button
                      className="btn btn-primary rounded-pill py-3 px-5"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          <span className="ms-2">Sending...</span>
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3322.8554329839358!2d73.06082897569759!3d33.60905527332705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM2JzMyLjYiTiA3M8KwMDMnNDguMyJF!5e0!3m2!1sen!2s!4v1743180988844!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border:0, position: 'absolute', width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hafeez Solar Energy Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;