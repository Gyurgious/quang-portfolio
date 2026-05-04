import { useState, useEffect, useRef } from 'react'
import './Projects.css'

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Houston City Crime Tracker',
      comingSoon: false,
      liveUrl: 'https://htx-crime-tracker.vercel.app/',
      category: 'Full-Stack App',
      year: '2026',
      color: '#ff6b35',
      index: '01',
      tags: ['React', 'Python', 'Django', 'PostgreSQL'],
      description: 'Mapping application for Houston crime data. Features interactive maps, data visualizations, and analytics to help users explore crime patterns across the city.',
      link: '#',
    },
    {
      id: 2,
      title: 'Valorant Tracker',
      comingSoon: true,
      liveUrl: '',
      category: 'Full-Stack App',
      year: '2025',
      color: '#00d4aa',
      index: '02',
      tags: ['React', 'Django', 'Valorant API'],
      description: "Full-stack stat tracking app for the game 'Valorant' with over 1,000,000 active players worldwide. Integrating the official Valorant API: Displays player profiles, match history, K/D, ACS, headshot analytics, and interactive scoreboards.",
      link: '#',
    },
  ]

  return (
    <section
      id="work"
      className={`projects-section ${visible ? 'visible' : ''}`}
      ref={containerRef}
    >
      <div className="projects-inner">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Selected Work</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={project.id}
              href={project.link}
              className={`project-row ${hoveredId && hoveredId !== project.id ? 'dimmed' : ''}`}
              style={{
                '--project-color': project.color,
                transitionDelay: `${index * 0.1 + 0.2}s`,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-index">{project.index}</div>

              <div className="project-main">
                <div className="project-top">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-right">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
                {project.comingSoon ? (
                  <span className="coming-soon-label">Live Demo Coming Soon...</span>
                ) :  project.liveUrl && (
                      <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-demo-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      ↗ Live Demo
                    </a>
                  )}
                 
              </div>

              <div className="project-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}