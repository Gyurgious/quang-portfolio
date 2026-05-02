import { useState, useEffect, useRef } from 'react'
import './Experience.css'

export default function Experience() {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      id: 1,
      role: 'Software Developer II',
      company: 'Paycom',
      period: 'June 2025 - Feb 2026',
      description: 'Contributed to Paycom’s large-scale HCM platform serving 37,500+ clients, designing and maintaining scalable web applications using MVC architecture and structured SDLC practices. Collaborated cross-functionally with product managers and QA teams to deliver reliable features across 20+ production releases while improving system performance, resolving production issues, and ensuring product stability through automated testing and cross-functional QA testing.',
      technologies: ['PHP', 'React', 'SQL']
    },
   
  ]

  return (
    <section id="experience" className={`experience-section ${visible ? 'visible' : ''}`} ref={containerRef}>
      <div className="section-header">
        <span className="section-number">01</span>
        <h2 className="section-title">Experience</h2>
      </div>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className="experience-card"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="experience-period">{exp.period}</div>
            <div className="experience-content">
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-company">{exp.company}</div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-tech">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Helper hook for useState with ref