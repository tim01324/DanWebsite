import React, { useEffect } from 'react'
import { FaBriefcase, FaGraduationCap, FaAward, FaStar, FaUserTie, FaDownload, FaFilePdf } from 'react-icons/fa'
import './CV.css'

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const education = [
    {
      institution: 'Westminster College of Cooking',
      degree: 'Professional Culinary Arts',
      year: '1980-1982'
    }
  ]

  const experience = [
    {
      position: 'Yacht Chef',
      company: 'Various Luxury Superyachts',
      period: '2003 - Present',
      description: 'Working on yachts from 40-70 metres, providing high-end catering services for discerning clients worldwide.'
    },
    {
      position: 'Executive Head Chef',
      company: 'Hurlingham Club, Fulham, London',
      period: '2000 - 2003',
      description: 'Led culinary operations for this prestigious private members club.'
    },
    {
      position: 'Chef',
      company: 'Le Gavroche (3 Michelin Stars), London',
      period: '1995 - 2000',
      description: 'Worked under the legendary Roux Brothers at their three Michelin-starred restaurant.'
    },
    {
      position: 'Head Chef',
      company: 'Shell International, The Strand, London',
      period: '1990 - 1995',
      description: 'Prepared executive dining for company directors at their head office.'
    },
    {
      position: 'Chef',
      company: 'The Ritz & The Cavendish Hotel, London',
      period: '1985 - 1990',
      description: 'Worked in 5-star hotel kitchens, mastering classical techniques and fine dining service.'
    }
  ]

  const skills = [
    { name: 'French Cuisine', level: 95 },
    { name: 'Italian Cuisine', level: 90 },
    { name: 'Asian Fusion', level: 85 },
    { name: 'Sugar Sculptures', level: 80 },
    { name: 'Menu Planning', level: 95 },
    { name: 'Dietary Requirements', level: 90 }
  ]

  const specialties = [
    'Classic French Cuisine',
    'Modern European',
    'Mediterranean',
    'Asian Fusion (Thai, Japanese)',
    'Sugar Art & Sculptures',
    'Yacht Provisioning',
    'Special Dietary Requirements',
    'Gluten-Free Cuisine',
    'Vegetarian & Vegan',
    'Private Events Catering'
  ]

  return (
    <div className="cv">
      {/* Hero Section */}
      <section className="cv-hero">
        <div className="cv-hero-content">
          <h1 className="fade-in">Curriculum Vitae</h1>
          <p className="fade-in">Professional Chef with 30+ Years of Excellence</p>
          <div className="cv-actions fade-in">
            <a href="/resume.pdf" download className="download-btn">
              <FaDownload /> Download PDF Resume
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">
              <FaFilePdf /> View PDF
            </a>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="profile-section section-padding">
        <div className="container">
          <div className="profile-card">
            <div className="profile-icon">
              <FaUserTie />
            </div>
            <h2>Professional Summary</h2>
            <p>
              Highly accomplished chef with over 40 years of culinary experience, including 18 years specializing 
              in luxury superyacht catering. Trained at Westminster College of Cooking and refined skills in 
              prestigious establishments including The Ritz, The Cavendish Hotel, and the three Michelin-starred 
              Le Gavroche. Expert in classical French cuisine, international culinary styles, and specialized 
              dietary requirements. Recent specialization in sugar art and sculptures.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section section-padding">
        <div className="container">
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h2 className="section-title">Professional Experience</h2>
            <div className="title-underline"></div>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{job.period}</div>
                  <h3>{job.position}</h3>
                  <h4>{job.company}</h4>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education-section section-padding">
        <div className="container">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h2 className="section-title">Education</h2>
            <div className="title-underline"></div>
          </div>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="edu-icon">
                  <FaGraduationCap />
                </div>
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="year">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section section-padding">
        <div className="container">
          <div className="section-header">
            <FaStar className="section-icon" />
            <h2 className="section-title">Professional Skills</h2>
            <div className="title-underline"></div>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="specialties-section section-padding">
        <div className="container">
          <div className="section-header">
            <FaAward className="section-icon" />
            <h2 className="section-title">Culinary Specialties</h2>
            <div className="title-underline"></div>
          </div>
          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <div key={index} className="specialty-tag">
                <FaStar className="tag-icon" />
                <span>{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="references-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">References</h2>
          <div className="title-underline center"></div>
          <div className="references-content">
            <p>
              Professional references and testimonials are available upon request. 
              I have worked with numerous high-profile clients and establishments throughout my career, 
              and am happy to provide detailed references from:
            </p>
            <ul>
              <li>Previous yacht owners and charter guests</li>
              <li>Restaurant and hotel management</li>
              <li>Private clients and event organizers</li>
              <li>Culinary institutions and fellow professionals</li>
            </ul>
            <p className="references-note">
              Please contact me directly to request reference contact information.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CV

