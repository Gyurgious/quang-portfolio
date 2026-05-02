import { useState, useEffect } from 'react'
import './Navigation.css'

export default function Navigation({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = ['hero', 'about', 'experience', 'work', 'contact']

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <button className="nav-logo" onClick={() => onNavigate('hero')}>
        Q.
      </button>
      <div className="nav-links">
        {sections.map((section) => (
          <button
            key={section}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            onClick={() => onNavigate(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  )
}