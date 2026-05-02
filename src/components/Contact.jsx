import { useState, useEffect } from 'react'
import './Contact.css'

export default function Contact() {
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

  return (
    <section id="contact" className={`contact-section ${visible ? 'visible' : ''}`} ref={containerRef}>
      <div className="section-header">
        <span className="section-number">03</span>
        <h2 className="section-title">Let's Connect</h2>
      </div>
      
      <div className="contact-content">
        <p className="contact-text">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
        <a href="mailto:quangle5080@gmail.com" className="contact-email">
          quangle5080@gmail.com
        </a>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            Twitter
          </a>
        </div>
      </div>
    </section>
  )
}