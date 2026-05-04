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
      { threshold: 0.1 }
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
      period: 'June 2025 – Feb 2026',
      type: 'Full-time',
      description: "Contributed to Paycom's large-scale HCM platform serving 37,500+ global clients, designing and maintaining enterprise SaaS system using MVC architecture and structured SDLC practices. Collaborated cross-functionally with product managers and QA teams to deliver reliable features across 20+ production releases while improving system performance, resolving production issues, and ensuring product stability through automated testing and cross-functional QA testing.",
      technologies: ['PHP', 'React', 'SQL'],
      highlights: ['37,500+ clients', '20+ production releases']
    },
  ]

  return (
    <section
      id="experience"
      className={`experience-section ${visible ? 'visible' : ''}`}
      ref={containerRef}
    >
      <div className="experience-inner">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-timeline">
          <div className="timeline-track" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-item"
              style={{ transitionDelay: `${index * 0.15 + 0.2}s` }}
            >
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>

              <div className="experience-card">
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-type">{exp.type}</span>
                </div>

                <div className="experience-body">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <div className="experience-company">{exp.company}</div>
                    </div>
                    <div className="experience-highlights">
                      {exp.highlights.map((h) => (
                        <span key={h} className="highlight-badge">{h}</span>
                      ))}
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="experience-tech">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}