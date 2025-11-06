import React, { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('success')
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setFormStatus('')
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+33(0)6 15 30 15 94',
      link: 'tel:+33615301594'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'chef@example.com',
      link: 'mailto:chef@example.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Valbonne, 06560, France',
      link: 'https://maps.google.com/?q=Valbonne,France'
    }
  ]

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="fade-in">Get In Touch</h1>
          <p className="fade-in">Let's discuss your culinary needs and create something extraordinary</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p className="info-description">
                I'm available for yacht positions, private chef services, and special events. 
                Feel free to reach out to discuss your requirements.
              </p>

              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link}
                    className="contact-info-card"
                    target={info.title === 'Location' ? '_blank' : '_self'}
                    rel={info.title === 'Location' ? 'noopener noreferrer' : ''}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="availability-card">
                <h3>Current Availability</h3>
                <p>
                  Available for yacht positions worldwide and villa chef positions 
                  in the South of France during off-season. Also accepting bookings 
                  for special events and private dining experiences.
                </p>
                <div className="availability-status">
                  <span className="status-indicator"></span>
                  <span>Currently accepting inquiries</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-container">
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser /> Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone /> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <FaComment /> Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Inquiry about yacht chef position"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <FaComment /> Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell me about your requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <FaPaperPlane /> Send Message
                  </button>

                  {formStatus === 'success' && (
                    <div className="form-success">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="map-section">
        <div className="map-placeholder">
          <FaMapMarkerAlt className="map-icon" />
          <h3>Valbonne, France</h3>
          <p>Located in the beautiful Provence-Alpes-Côte d'Azur region</p>
        </div>
      </section>
    </div>
  )
}

export default Contact

