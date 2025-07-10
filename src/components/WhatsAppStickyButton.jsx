import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhatsAppStickyButton = () => {
  const whatsappNumber = '923455430275'; // Without '+' or '0'
  
  // Improved message with proper encoding
  const message = 'Hello! I have a question about your solar products.';

  // Universal WhatsApp handler
  const handleWhatsAppClick = () => {
    // Create both URL formats
    const webUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    const apiUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    
    // Detect platform
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isWhatsAppWeb = window.location.hostname.includes('web.whatsapp.com');

    if (isMobile) {
      // For mobile devices, use api.whatsapp.com
      window.location.href = apiUrl;
    } else if (isWhatsAppWeb) {
      // If already in WhatsApp Web
      window.location.href = webUrl;
    } else {
      // For desktop - try to open WhatsApp Desktop via custom protocol
      window.open(`whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`, '_blank');
      
      // Fallback to web if desktop app not installed
      setTimeout(() => {
        window.open(webUrl, '_blank');
      }, 500);
    }
  };

  return (
    <>
      {/* Desktop Floating Button */}
      <div 
        className="position-fixed d-none d-md-block" 
        style={{
          right: '20px',
          bottom: '20px',
          zIndex: 1000,
          cursor: 'pointer'
        }}
      >
        <div 
          className="bg-success text-white rounded-circle p-3 shadow-lg whatsapp-pulse"
          onClick={handleWhatsAppClick}
          style={{
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FaWhatsapp size={30} />
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div 
        className="position-fixed d-md-none w-100 text-center" 
        style={{
          bottom: '0',
          left: '0',
          zIndex: 1000,
          padding: '10px',
          backgroundColor: '#25D366',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <button 
          onClick={handleWhatsAppClick}
          className="border-0 bg-transparent text-white d-flex align-items-center justify-content-center w-100"
          style={{ outline: 'none' }}
        >
          <FaWhatsapp size={24} className="me-2" />
          <span style={{ fontWeight: '500' }}>Chat on WhatsApp</span>
        </button>
      </div>
    </>
  );
};

export default WhatsAppStickyButton;