import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <h3>Chef Daniel Racine</h3>
          <p>Red Seal–certified Executive Chef with over two decades of culinary leadership across fine-dining restaurants and hospitality groups.</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="footer-links">
            <a href="mailto:chefdaniel2012@live.com" className="footer-link">
              <FaEnvelope /> chefdaniel2012@live.com
            </a>
            <div className="footer-link">
              <FaMapMarkerAlt /> Toronto, Canada
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

