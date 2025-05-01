import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './PDFNewsletterPopup.css';

const PDFNewsletterPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup (stored in localStorage)
    const hasSeenPopup = localStorage.getItem('stemtrixPDFNewsletterSeen');
    
    // Show popup after 3 seconds if user hasn't dismissed it before
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    // Set localStorage to remember that user has seen the popup
    localStorage.setItem('stemtrixPDFNewsletterSeen', 'true');
  };

  const downloadNewsletter = () => {
    // You could track downloads here if needed
    console.log('Newsletter download initiated');
    // The actual download happens through the link
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered
      size="lg"
      className="pdf-newsletter-modal"
    >
      <div className="pdf-newsletter-popup">
        <button className="popup-close" onClick={handleClose}>×</button>
        
        <div className="popup-header">
          <div className="popup-badge">New Newsletter</div>
          <h2>Inspire Robotics Challenge 2025</h2>
          <p>Check out our latest newsletter with competition details, schedules, and tips for participants!</p>
        </div>
        <iframe 
     src="/newsletters/latest.pdf#view=Fit" 
     title="Inspire Robotics Challenge 2025 Newsletter"
            className="pdf-iframe"
         ></iframe>
        
        <div className="popup-footer">
          <a 
           href="/newsletters/latest.pdf"
            download="Inspire_Robotics_Challenge_2025_Newsletter.pdf"
            className="download-link"
            onClick={downloadNewsletter}
          >
            <Button variant="primary" className="download-btn">
              Download Newsletter
            </Button>
          </a>
          
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PDFNewsletterPopup;