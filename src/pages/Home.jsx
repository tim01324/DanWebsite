import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUtensils, FaAward, FaStar, FaArrowRight, FaTv, FaBook, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import './Home.css'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const specialties = [
    { icon: <FaUtensils />, title: 'Multi-Unit Leadership', description: 'Corporate Executive Chef managing restaurant groups' },
    { icon: <FaAward />, title: 'Menu Innovation', description: 'French, Italian, Asian, Mediterranean & Middle Eastern' },
    { icon: <FaStar />, title: 'Event Excellence', description: 'Large-scale venues and fine-dining experiences' }
  ]

  const achievements = [
    { icon: <FaTv />, title: 'The County Chef', description: 'Co-producer & host of culinary television series' },
    { icon: <FaBook />, title: 'Published Author', description: 'Creator of "A Gift From The Stars" celebrity cookbook' },
    { icon: <FaHeart />, title: 'Community Impact', description: 'Charity work with Daily Bread Food Bank' }
  ]

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleOnHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="home">
      <SEO
        title="Home"
        description="Chef Daniel Racine - Red Seal Certified Executive Chef specializing in French, Italian, and Asian Fusion cuisine."
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-subtitle-top"
          >
            Red Seal Certified Executive Chef
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-title"
          >
            Chef Daniel Racine
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-subtitle"
          >
            Culinary Leadership & Innovation Across some of Toronto's Finest Establishments
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-buttons"
          >
            <Link to="/gallery" className="btn btn-primary">
              View Gallery <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="scroll-indicator"
        >
          <span></span>
        </motion.div>
      </section>

      {/* Bio Highlight Section */}
      <section className="bio-highlight section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bio-card"
          >
            <div className="bio-badge">
              <FaAward />
              <span>Red Seal Certified</span>
            </div>
            <h2 className="bio-title">Executive Chef & Culinary Director</h2>
            <p className="bio-lead">
              A Red Seal–certified Executive Chef with over two decades of culinary leadership, Daniel Racine
              has built a distinguished career overseeing fine-dining restaurants, elevated pubs, catering from boutique to corporate to large onsite events, hospitality groups, and
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
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="about-image"
            >
              <img src="/images/chef/profile.jpg" alt="Chef Daniel Racine" className="chef-profile-photo" />
              <div className="image-overlay-badge">
                <span>Red Seal Certified</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="about-content"
            >
              <h2 className="section-title">Culinary Vision & Expertise</h2>
              <div className="title-underline"></div>
              <p className="about-text">
                Known for creative versatility, Chef Racine specializes in <strong>French, Italian,
                  Asian fusion, Mediterranean, and Middle Eastern cuisines</strong>—crafting menus that balance authenticity, innovation,
                and visual artistry.
              </p>
              <p className="about-text">
                Recent work includes launching <strong>Muse Bistro-Bar</strong> at The Toor Hotel in coordination with The Fifteen Group,
                leading <strong>Grand Bizarre Supper Club and Event Centre</strong>, and serving as Corporate Executive
                Chef for the <strong>IL Fornello Restaurant Group</strong>, where he managed multi-unit operations and
                menu development.
              </p>
              <p className="about-text">
                Beyond operational excellence, Chef Racine is a recognized media presence and culinary ambassador.
                Celebrated by <strong>The Globe and Mail, Toronto Star, Toronto Life, Post City Magazine,
                  Breakfast Television, and Rogers Morning Show</strong> for his imaginative
                presentations and refined palate.
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center">Professional Excellence</h2>
            <div className="title-underline center"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="specialties-grid"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                className="specialty-card"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="specialty-card-inner"
                >
                  <div className="specialty-icon">{specialty.icon}</div>
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media & Recognition Section */}
      <section className="achievements-section section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center">Media & Community Impact</h2>
            <div className="title-underline center"></div>
            <p className="section-intro">
              Combining culinary artistry with community engagement and media presence
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="achievements-grid"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="achievement-card"
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="media-mentions"
          >
            <p className="mentions-label">Featured In:</p>
            <div className="mentions-list">
              {['The Globe and Mail', 'Toronto Star', 'Toronto Life', 'Post City Magazine', 'Breakfast Television', 'Rogers Morning Show'].map((media, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1, color: 'var(--secondary-color)' }}
                  className="mention-badge"
                >
                  {media}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookbook Section */}
      <section className="cookbook-section section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center">Published Work</h2>
            <div className="title-underline center"></div>
            <p className="section-intro">
              A culinary journey captured in pages
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="cookbook-showcase"
          >
            <div className="cookbook-image-wrapper">
              <img
                src="/images/cookbook/GetAttachmentThumbnail.jpg"
                alt="A Gift From The Stars - Celebrity Cookbook by Chef Daniel Racine"
                className="cookbook-cover"
              />
            </div>
            <div className="cookbook-info">
              <h3>A Gift From The Stars</h3>
              <p className="cookbook-description">
                A unique collection of recipes celebrating culinary artistry and creativity.
                This celebrity cookbook features Chef Daniel Racine's signature dishes and
                innovative techniques that have defined his distinguished career.
              </p>
              <div className="cookbook-features">
                <div className="feature-item">
                  <FaUtensils />
                  <span>Signature Recipes</span>
                </div>
                <div className="feature-item">
                  <FaStar />
                  <span>Professional Techniques</span>
                </div>
                <div className="feature-item">
                  <FaHeart />
                  <span>Culinary Stories</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cuisines */}
      <section className="cuisines-section section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center">Culinary Specialties</h2>
            <div className="title-underline center"></div>
            <p className="section-intro">
              Mastery across diverse culinary traditions, balancing authenticity with innovation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="cuisines-grid-five"
          >
            {[
              { img: "/images/gallery/Sous Vide Duck Breast Black Cherry Jus Cacio e Pepe.jpg", title: "French", desc: "Classical techniques and refined presentation" },
              { img: "/images/gallery/Cacio Pepe.jpg", title: "Italian", desc: "Authentic traditions with modern flair" },
              { img: "/images/gallery/Asian Salad with Pickled Ginger and Fried Rice Noodles.jpg", title: "Asian Fusion", desc: "Contemporary interpretations of classic dishes" },
              { img: "/images/gallery/Mediterranean Bass with Zucchini Flowers.jpg", title: "Mediterranean", desc: "Fresh, vibrant coastal flavors" },
              { img: "/images/gallery/Butter Chicken Risotto Croquettes Cardamom Yogurt Spiced Plum Chutney Parmigiano-Reggiano.jpg", title: "Middle Eastern", desc: "Rich flavors and aromatic spice profiles" }
            ].map((cuisine, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="cuisine-card"
              >
                <div className="cuisine-image">
                  <img src={cuisine.img} alt={`${cuisine.title} Cuisine`} />
                </div>
                <h3>{cuisine.title}</h3>
                <p>{cuisine.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h2>Let's Create Something Extraordinary</h2>
          <p>Available for culinary consulting, menu development, event direction, and executive chef positions.</p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-light"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home

