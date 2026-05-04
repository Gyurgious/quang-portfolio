import { useState, useEffect, useRef} from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import './Contact.css'

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef(null)

  // update socials array
  const socials = [
    { label: 'GitHub', href: 'https://github.com/Gyurgious', icon: <FaGithub size={16} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/quang-le1', icon: <FaLinkedin size={16} /> },
    { label: 'LeetCode', href: 'https://leetcode.com/u/quangle5080', icon: <SiLeetcode size = {16} /> },
  ]

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
        <span className="section-number">04</span>
        <h2 className="section-title">Let's Connect</h2>
      </div>
      
      <div className="contact-content">
        <p className="contact-text">
         Please feel free to reach out if you have any questions!
        </p>
        <a href="mailto:quangle5080@gmail.com" className="contact-email">
           <span className="email-text">quangle5080@gmail.com</span>
          <span className="email-arrow">↗</span>
        </a>
        <div className="social-links">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon"> {s.icon} </span> 
            <span className="social-label">{s.label}</span>
          </a>
        ))}
      </div>
      </div>
    </section>
  )
}