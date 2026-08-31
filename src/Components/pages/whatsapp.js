import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './whatsapp.css';

/**
 * Site-wide floating WhatsApp button.
 * Render this ONCE in App.js (outside/alongside your <Routes>), not inside
 * individual pages, so it persists across every route without duplication.
 */
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`whatsapp-button ${isVisible ? 'visible' : ''}`}>
      <a
        href="https://wa.me/+254110394940?text=Hello!%20I%20found%20your%20contact%20on%20the%20Stemtrix%20website%20and%20would%20like%20to%20learn%20more%20about%20your%20services."
        className="whatsapp-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={26} />
        <span className="whatsapp-label">Chat with us</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;