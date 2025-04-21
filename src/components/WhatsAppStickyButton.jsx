import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhatsAppStickyButton = () => {
  // WhatsApp number (without '+' or leading '0')
  const whatsappNumber = '923455430275'; // Example: Pakistan number
  
  // Default message (keep it simple for testing)
  const message = 'Hello! I have a question about your solar products.';

  // Handle click for desktop and mobile
  const handleWhatsAppClick = () => {
    // Use 'api.whatsapp.com' (most reliable across platforms)
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    
    // Try to open in a new tab (fallback to same tab if blocked)
    window.open(url, '_blank') || window.location.assign(url);
  };

  return (
    <>
      {/* Desktop Floating Button (Bottom Right) */}
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

      {/* Mobile Sticky Bar (Bottom Center) */}
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
        <a 
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`}
          className="text-white d-flex align-items-center justify-content-center"
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} className="me-2" />
          <span style={{ fontWeight: '500' }}>Chat on WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default WhatsAppStickyButton;