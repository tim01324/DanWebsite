import React, { useState, useEffect, useRef } from 'react'
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
  const observerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    // 添加小延迟确保 DOM 完全渲染
    const timer = setTimeout(() => {
      // 设置 Intersection Observer 来检测元素进入视口
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
              // 触发后停止观察该元素，避免重复触发
              observerRef.current.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -80px 0px'
        }
      )

      // 观察所有需要动画的元素
      const animatedElements = document.querySelectorAll('.animate-on-scroll')
      animatedElements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el)
        }
      })
    }, 100)

    // 清理函数
    return () => {
      clearTimeout(timer)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
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
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'chefdaniel2012@live.com',
      link: 'mailto:chefdaniel2012@live.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Toronto, Canada',
      link: 'https://maps.google.com/?q=Toronto,Canada'
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
            <div className="contact-info-section animate-on-scroll">
              <h2>Contact Information</h2>
              <p className="info-description">
                Available for culinary consulting, menu development, event direction, and executive chef positions. 
                Let's discuss how we can work together.
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
                <h3>Professional Services</h3>
                <p>
                  Culinary Consulting • Menu Development • Restaurant Operations • 
                  Event Direction • Corporate Executive Chef Positions • Media & Brand Partnerships
                </p>
                <div className="availability-status">
                  <span className="status-indicator"></span>
                  <span>Currently accepting inquiries</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section animate-on-scroll">
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
        <div className="map-placeholder animate-on-scroll">
          <FaMapMarkerAlt className="map-icon" />
          <h3>Toronto, Canada</h3>
          <p>Serving Toronto's finest establishments and hospitality groups</p>
        </div>
      </section>
    </div>
  )
}

export default Contact

