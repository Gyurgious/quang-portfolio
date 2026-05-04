import { useState, useEffect } from 'react'
import './About.css'

export default function About() {
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

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'UI/UX', 'Figma', 'Three.js', 'GraphQL'
  ]

  return (
    <section id="about" className={`about-section ${visible ? 'visible' : ''}`} ref={containerRef}>
      <div className="section-header">
        <span className="section-number">01</span>
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-lead">
            I’m a full-stack software engineer with a focus on backend development. I enjoy tackling real world problems and finding solutions to them!
          </p>
          <p className="about-description">
           With experience developing enterprise software and collaborating across different parts of the stack, I aim to create products that are not only technically sound but also practical and impactful.
          </p>
        </div>
        
        <div className="skills-container">
  <div className="skills-group">
    <h3 className="skills-group-title">Frontend</h3>
    <div className="skills-list">
      <span className="skill-tag">React</span>
      <span className="skill-tag">Javascript</span>
      <span className="skill-tag">HTML/CSS</span>
    </div>
  </div>

      <div className="skills-group">
        <h3 className="skills-group-title">Backend</h3>
        <div className="skills-list">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">Django</span>
          <span className="skill-tag">PHP</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">PostgreSQL</span>
        </div>
      </div>

      <div className="skills-group">
        <h3 className="skills-group-title">Tools & Other Languages</h3>
        <div className="skills-list">
           <span className="skill-tag">C++</span>
          <span className="skill-tag">Git</span>
          <span className="skill-tag">Docker</span>
          <span className="skill-tag">Figma</span>
        </div>
      </div>
    </div>
      </div>
    </section>
  )
}