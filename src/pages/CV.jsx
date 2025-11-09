import React, { useEffect, useRef } from 'react'
import { FaBriefcase, FaGraduationCap, FaAward, FaStar, FaUserTie, FaDownload, FaFilePdf } from 'react-icons/fa'
import './CV.css'

const CV = () => {
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
          threshold: 0.15, // 当元素15%可见时触发
          rootMargin: '0px 0px -100px 0px' // 元素需要进入视口100px后才触发
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

  const education = [
    {
      institution: 'Red Seal Certification',
      degree: 'Executive Chef Certification',
      year: 'Certified'
    }
  ]

  const experience = [
    {
      position: 'Executive Chef & Culinary Director',
      company: 'Muse Bistro-Bar at The Toot Hotel (The Fifteen Group)',
      period: '2022 - Present',
      description: 'Leading comprehensive culinary operations including line management, quality control, and recipe standards. Responsible for team training and mentorship, building a disciplined kitchen culture, and executing high-standard catering events both in-house and off-site. Oversee scheduling, inventory management, menu implementation, and maintain food safety standards while ensuring operational efficiency aligned with business goals.'
    },
    {
      position: 'Executive Chef',
      company: 'Grand Bizarre Supper Club and Event Centre',
      period: '2019 - 2022',
      description: 'Directed culinary operations for this premier event venue, managing large-scale events and fine-dining experiences while maintaining exceptional quality standards.'
    },
    {
      position: 'Corporate Executive Chef',
      company: 'IL Fornello Restaurant Group',
      period: '2015 - 2019',
      description: 'Managed multi-unit operations, menu development, and culinary standards across the restaurant group. Oversaw staff training, cost control, and quality assurance.'
    },
    {
      position: 'Co-Producer & Host',
      company: 'The County Chef Television Series',
      period: '2012 - 2015',
      description: 'Co-produced and hosted culinary television series, bringing professional cooking techniques and regional cuisine to home audiences.'
    },
    {
      position: 'Executive Chef',
      company: 'Fine Dining Restaurants - Toronto',
      period: '2005 - 2012',
      description: 'Led culinary teams across various Toronto fine-dining establishments, specializing in Middle Eastern, French, Italian, Asian fusion, and Mediterranean cuisines.'
    }
  ]

  const skills = [
    { name: 'Multi-Unit Operations', level: 95 },
    { name: 'Menu Development', level: 95 },
    { name: 'Team Leadership', level: 95 },
    { name: 'Middle Eastern Cuisine', level: 90 },
    { name: 'French Cuisine', level: 90 },
    { name: 'Italian Cuisine', level: 90 },
    { name: 'Asian Fusion', level: 85 },
    { name: 'Mediterranean Cuisine', level: 90 },
    { name: 'Cost Control & P&L', level: 90 },
    { name: 'Event Direction', level: 90 }
  ]

  const specialties = [
    'Middle Eastern Cuisine',
    'French Cuisine',
    'Italian Cuisine',
    'Asian Fusion',
    'Mediterranean Cuisine',
    'Multi-Unit Restaurant Operations',
    'Menu Innovation & Development',
    'Large-Scale Event Catering',
    'Team Training & Development',
    'Cost Control & Budget Management',
    'Media & Brand Partnerships',
    'Culinary Consulting'
  ]

  return (
    <div className="cv">
      {/* Hero Section */}
      <section className="cv-hero">
        <div className="cv-hero-content">
          <h1 className="fade-in">Chef Daniel Racine</h1>
          <p className="fade-in">Red Seal Certified Executive Chef - 20+ Years of Culinary Leadership</p>
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
          <div className="profile-card animate-on-scroll">
            <div className="profile-icon">
              <FaUserTie />
            </div>
            <h2>Professional Summary</h2>
            <p>
              A Red Seal certified Executive Chef with over two decades of culinary leadership, Daniel Racine has 
              built a distinguished career overseeing fine-dining restaurants, hospitality groups, and large-scale 
              event venues across Toronto. Known for his creative versatility, Chef Racine specializes in Middle Eastern, 
              French, Italian, Asian fusion, and Mediterranean cuisines—crafting menus that balance authenticity, 
              innovation, and visual artistry.
            </p>
            <p style={{ marginTop: '20px' }}>
              Beyond his operational excellence, Chef Racine is a recognized media presence and culinary ambassador. 
              As co-producer and host of The County Chef television series and creator of the celebrity charity 
              cookbook "A Gift From The Stars" for the Daily Bread Food Bank, he has combined his passion for food 
              with community impact. Celebrated by The Globe and Mail, Toronto Star, and Toronto Life for his 
              imaginative presentations and refined palate.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section section-padding">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <FaBriefcase className="section-icon" />
            <h2 className="section-title">Professional Experience</h2>
            <div className="title-underline"></div>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item animate-on-scroll">
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

      {/* Current Role Synopsis */}
      <section className="responsibilities-section section-padding">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <FaUserTie className="section-icon" />
            <h2 className="section-title">Current Role Synopsis</h2>
            <div className="title-underline"></div>
          </div>
          <div className="responsibilities-container">
            <div className="responsibility-category animate-on-scroll">
              <h3>Line Leadership & Operations</h3>
              <ul>
                <li>Conduct pre-service line checks (taste, plating, mise en place).</li>
                <li>Maintain recipe standards, portion control, and quality consistency.</li>
                <li>Manage ticket flow, work the line or call the board when required.</li>
              </ul>
            </div>

            <div className="responsibility-category animate-on-scroll">
              <h3>Team Leadership & Training</h3>
              <ul>
                <li>Mentor cooks directly on the line.</li>
                <li>Train and reinforce techniques, recipes, and plating standards.</li>
                <li>Build a strong, disciplined, and motivated kitchen culture.</li>
              </ul>
            </div>

            <div className="responsibility-category animate-on-scroll">
              <h3>Catering Leadership</h3>
              <ul>
                <li>Plan and execute in-house and off-site catering events.</li>
                <li>Lead the team in preparing, packing, and delivering catering menus at the highest standard.</li>
                <li>Oversee staffing, logistics, and quality control for catering operations.</li>
              </ul>
            </div>

            <div className="responsibility-category animate-on-scroll">
              <h3>Administration</h3>
              <ul>
                <li>Provide input on weekly scheduling and staffing.</li>
                <li>Order and track product needs, manage inventory par levels.</li>
                <li>Implement new menu items with training and plating guides.</li>
                <li>Relay kitchen updates (staffing, supply issues, equipment needs) to leadership.</li>
              </ul>
            </div>

            <div className="responsibility-category animate-on-scroll">
              <h3>Accountability</h3>
              <ul>
                <li>Ensure food safety, sanitation, and organizational standards are met daily.</li>
                <li>Maintain labor and prep efficiency aligned with sales.</li>
                <li>Identify and escalate challenges early with proposed solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education-section section-padding">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <FaGraduationCap className="section-icon" />
            <h2 className="section-title">Education</h2>
            <div className="title-underline"></div>
          </div>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card animate-on-scroll">
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
          <div className="section-header animate-on-scroll">
            <FaStar className="section-icon" />
            <h2 className="section-title">Professional Skills</h2>
            <div className="title-underline"></div>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item animate-on-scroll">
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
          <div className="section-header animate-on-scroll">
            <FaAward className="section-icon" />
            <h2 className="section-title">Culinary Specialties</h2>
            <div className="title-underline"></div>
          </div>
          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <div key={index} className="specialty-tag animate-on-scroll">
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
          <div className="references-content animate-on-scroll">
            <p>
              Professional references and testimonials are available upon request. 
              I have worked with leading hospitality groups, restaurant owners, and event organizers throughout Toronto, 
              and am happy to provide detailed references from:
            </p>
            <ul>
              <li>Restaurant group executives and ownership</li>
              <li>Event venue management</li>
              <li>Media production partners</li>
              <li>Industry colleagues and culinary professionals</li>
              <li>Corporate clients and hospitality partners</li>
            </ul>
            <p className="references-note">
              Please contact me at chefdaniel2012@live.com to request reference contact information.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CV

