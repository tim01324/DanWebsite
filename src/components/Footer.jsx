import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <h3>Chef Portfolio</h3>
          <p>Culinary excellence with over 30 years of professional experience in fine dining and yacht catering.</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="footer-links">
            <a href="tel:+33615301594" className="footer-link">
              <FaPhone /> +33(0)6 15 30 15 94
            </a>
            <a href="mailto:chef@example.com" className="footer-link">
              <FaEnvelope /> chef@example.com
            </a>
            <div className="footer-link">
              <FaMapMarkerAlt /> Valbonne, France
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Chef Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

