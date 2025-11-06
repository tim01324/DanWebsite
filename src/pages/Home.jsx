import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUtensils, FaAward, FaStar, FaArrowRight } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const specialties = [
    { icon: <FaUtensils />, title: 'Fine Dining', description: 'Expertise in Michelin-starred restaurants' },
    { icon: <FaAward />, title: 'Yacht Catering', description: '18 years on luxury superyachts' },
    { icon: <FaStar />, title: 'International Cuisine', description: 'Master of diverse culinary styles' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title fade-in">Culinary Excellence</h1>
          <p className="hero-subtitle fade-in">Professional Chef with 30+ Years of Experience</p>
          <div className="hero-buttons fade-in">
            <Link to="/gallery" className="btn btn-primary">
              View Gallery <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="image-placeholder">
                <FaUtensils className="placeholder-icon" />
                <p>Chef Photo</p>
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">About Me</h2>
              <div className="title-underline"></div>
              <p className="about-text">
                I have been a Chef since I left school over 40 years ago. I went to Westminster College 
                of Cooking and then went on to work in 5 star hotels; The Ritz in London and The Cavendish Hotel.
              </p>
              <p className="about-text">
                I then went on to work for the oil company Shell at their head office in The Strand, London, 
                cooking for the directors. I have also worked at the famous 3 star Michelin Roux Brothers 
                'le Gavroche' Hyde Park, London.
              </p>
              <p className="about-text">
                Before joining the yachting industry but getting to the water I was the Executive Head Chef 
                at the Hurlingham Club Fulham, London. After joining the yachting industry over 20 years ago 
                I have worked on yachts from 40 – 70 metres together with luxury villas chef positions out of 
                season in the south of France.
              </p>
              <Link to="/cv" className="btn btn-outline">
                View Full CV <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">My Specialties</h2>
          <div className="title-underline center"></div>
          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <div key={index} className="specialty-card">
                <div className="specialty-icon">{specialty.icon}</div>
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cuisines */}
      <section className="cuisines-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Signature Cuisines</h2>
          <div className="title-underline center"></div>
          <div className="cuisines-grid">
            <div className="cuisine-card">
              <div className="cuisine-image">
                <div className="image-placeholder">
                  <span>French</span>
                </div>
              </div>
              <h3>French Cuisine</h3>
              <p>Classic French techniques with modern presentation</p>
            </div>
            <div className="cuisine-card">
              <div className="cuisine-image">
                <div className="image-placeholder">
                  <span>Italian</span>
                </div>
              </div>
              <h3>Italian Cuisine</h3>
              <p>Authentic Italian flavors and regional specialties</p>
            </div>
            <div className="cuisine-card">
              <div className="cuisine-image">
                <div className="image-placeholder">
                  <span>Asian</span>
                </div>
              </div>
              <h3>Asian Fusion</h3>
              <p>Thai, Japanese, and contemporary Asian dishes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Create Something Special?</h2>
          <p>Let's discuss your culinary needs and create an unforgettable dining experience.</p>
          <Link to="/contact" className="btn btn-light">
            Contact Me Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

