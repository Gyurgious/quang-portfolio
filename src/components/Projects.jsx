import { useState, useEffect } from 'react'
import './Projects.css'

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const containerRef = useState(null)

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

  const projects = [
    {
      id: 1,
      title: 'Houston City Crime Tracker',
      category: 'Full-Stack App',
      year: '2025',
      color: '#ff6b35',
      description: 'Mapping Application for Houston Crime Data, built with React, Python, Django, and PostgreSQL. Features interactive maps, data visualizations, and analytics to help users explore crime patterns across the city.'
    },
    {
      id: 2,
      title: 'Valorant Tracker',
      category: 'Web App',
      year: '2025',
      color: '#00d4aa',
      description: 'A full-stack stat tracking application built with React and Django. Integrates Official Valorant API to display player profiles, competitive match history, and detailed match scoreboards. Features include real-time K/D, ACS, and headshot analytics, team MVP detection, and an interactive match scoreboard with per-player breakdowns.'
    },
    {
      id: 3,
      title: 'Synth Wave',
      category: 'Brand Identity',
      year: '2024',
      color: '#a855f7',
      description: 'Complete brand identity and web presence for an electronic music collective.'
    },
  ]

  return (
    <section id="work" className={`projects-section ${visible ? 'visible' : ''}`} ref={containerRef}>
      <div className="section-header">
        <span className="section-number">02</span>
        <h2 className="section-title">Selected Work</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ '--accent': project.color, transitionDelay: `${index * 0.15}s` }}
          >
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <span className="project-year">{project.year}</span>
            </div>
            <div className="project-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  )
}