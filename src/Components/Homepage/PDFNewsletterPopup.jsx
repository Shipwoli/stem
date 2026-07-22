import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './PDFNewsletterPopup.css';

const PDFNewsletterPopup = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('stemtrixPDFNewsletterSeen');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem('stemtrixPDFNewsletterSeen', 'true');
  };

  const downloadNewsletter = () => {
    console.log('Newsletter download initiated');
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className="pdf-newsletter-modal"
      contentClassName="pdf-newsletter-content"
    >
      <div className="pdf-newsletter-popup">
        <button className="popup-close" onClick={handleClose} aria-label="Close newsletter popup">
          ×
        </button>

        <div className="popup-header">
          <div className="popup-badge">
            <span className="badge-dot" />
            New Newsletter
          </div>
          <h2>Inspire Robotics Challenge 2026</h2>
          <p>Competition details, schedules, and tips for participants — straight from the IRC team.</p>
        </div>

        <div className="pdf-frame-wrapper">
          {isLoading && (
            <div className="pdf-loading">
              <div className="pdf-loading-spinner" />
              <span>Loading newsletter…</span>
            </div>
          )}
          <iframe
            src="/newsletters/latest.pdf#view=Fit"
            title="Inspire Robotics Challenge 2026 Newsletter"
            className="pdf-iframe"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <div className="popup-footer">
          <a
            href="/newsletters/latest.pdf"
            download="Inspire_Robotics_Challenge_2026_Newsletter.pdf"
            className="download-link"
            onClick={downloadNewsletter}
          >
            <Button variant="primary" className="download-btn">
              Download Newsletter
            </Button>
          </a>

          <Button variant="outline-secondary" className="close-btn" onClick={handleClose}>
            Maybe later
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PDFNewsletterPopup;