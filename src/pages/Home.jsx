import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUtensils, FaAward, FaStar, FaArrowRight, FaTv, FaBook, FaHeart } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const specialties = [
    { icon: <FaUtensils />, title: 'Multi-Unit Leadership', description: 'Corporate Executive Chef managing restaurant groups' },
    { icon: <FaAward />, title: 'Menu Innovation', description: 'Middle Eastern, French, Italian, Asian & Mediterranean' },
    { icon: <FaStar />, title: 'Event Excellence', description: 'Large-scale venues and fine-dining experiences' }
  ]

  const achievements = [
    { icon: <FaTv />, title: 'The County Chef', description: 'Co-producer & host of culinary television series' },
    { icon: <FaBook />, title: 'Published Author', description: 'Creator of "A Gift From The Stars" celebrity cookbook' },
    { icon: <FaHeart />, title: 'Community Impact', description: 'Charity work with Daily Bread Food Bank' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle-top fade-in">Red Seal Certified Executive Chef</p>
          <h1 className="hero-title fade-in">Chef Daniel Racine</h1>
          <p className="hero-subtitle fade-in">Culinary Leadership & Innovation Across Toronto's Finest Establishments</p>
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

      {/* Bio Highlight Section */}
      <section className="bio-highlight section-padding">
        <div className="container">
          <div className="bio-card">
            <div className="bio-badge">
              <FaAward />
              <span>Red Seal Certified</span>
            </div>
            <h2 className="bio-title">Executive Chef & Culinary Director</h2>
            <p className="bio-lead">
              A Red Seal–certified Executive Chef with over two decades of culinary leadership, Daniel Racine 
              has built a distinguished career overseeing fine-dining restaurants, hospitality groups, and 
              large-scale event venues across Toronto.
            </p>
            <div className="bio-stats">
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Cuisine Specialties</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Media Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/chef/profile.jpg" alt="Chef Daniel Racine" className="chef-profile-photo" />
              <div className="image-overlay-badge">
                <span>Red Seal Certified</span>
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">Culinary Vision & Expertise</h2>
              <div className="title-underline"></div>
              <p className="about-text">
                Known for creative versatility, Chef Racine specializes in <strong>Middle Eastern, French, Italian, 
                Asian fusion, and Mediterranean cuisines</strong>—crafting menus that balance authenticity, innovation, 
                and visual artistry.
              </p>
              <p className="about-text">
                Recent work includes launching <strong>Muse Bistro-Bar</strong> at The Toot Hotel with The Fifteen Group, 
                leading <strong>Grand Bizarre Supper Club and Event Centre</strong>, and serving as Corporate Executive 
                Chef for the <strong>IL Fornello Restaurant Group</strong>, where he managed multi-unit operations and 
                menu development.
              </p>
              <p className="about-text">
                Beyond operational excellence, Chef Racine is a recognized media presence and culinary ambassador. 
                Celebrated by <strong>The Globe and Mail, Toronto Star, and Toronto Life</strong> for his imaginative 
                presentations and refined palate.
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
          <h2 className="section-title text-center">Professional Excellence</h2>
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

      {/* Media & Recognition Section */}
      <section className="achievements-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Media & Community Impact</h2>
          <div className="title-underline center"></div>
          <p className="section-intro">
            Combining culinary artistry with community engagement and media presence
          </p>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
          <div className="media-mentions">
            <p className="mentions-label">Featured In:</p>
            <div className="mentions-list">
              <span className="mention-badge">The Globe and Mail</span>
              <span className="mention-badge">Toronto Star</span>
              <span className="mention-badge">Toronto Life</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cuisines */}
      <section className="cuisines-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Culinary Specialties</h2>
          <div className="title-underline center"></div>
          <p className="section-intro">
            Mastery across diverse culinary traditions, balancing authenticity with innovation
          </p>
          <div className="cuisines-grid-five">
            <div className="cuisine-card">
              <div className="cuisine-image">
                <div className="image-placeholder">
                  <span>Middle Eastern</span>
                </div>
              </div>
              <h3>Middle Eastern</h3>
              <p>Rich flavors and aromatic spice profiles</p>
            </div>
            <div className="cuisine-card">
              <div className="cuisine-image">
                <div className="image-placeholder">
                  <span>French</span>
                </div>
              </div>
              <h3>French</h3>
              <p>Classical techniques and refined presentation</p>
            </div>
            <div className="cuisine-card">
              <div className="cuisine-image">
                <div className="image-placeholder">
                  <span>Italian</span>
                </div>
              </div>
              <h3>Italian</h3>
              <p>Authentic traditions with modern flair</p>
            </div>
            <div className="cuisine-card">
              <div className="cuisine-image">
                <div className="image-placeholder">
                  <span>Asian Fusion</span>
                </div>
              </div>
              <h3>Asian Fusion</h3>
              <p>Contemporary interpretations of classic dishes</p>
            </div>
            <div className="cuisine-card">
              <div className="cuisine-image">
                <div className="image-placeholder">
                  <span>Mediterranean</span>
                </div>
              </div>
              <h3>Mediterranean</h3>
              <p>Fresh, vibrant coastal flavors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Let's Create Something Extraordinary</h2>
          <p>Available for culinary consulting, menu development, event direction, and executive chef positions.</p>
          <Link to="/contact" className="btn btn-light">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

