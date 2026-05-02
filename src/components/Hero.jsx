import { useState, useEffect } from 'react'
import './Hero.css'
import HeroPhoto from '../photos/quang_grad4.png'

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="hero" className={`hero-section ${loaded ? 'loaded' : ''}`}>
      <div className="hero-bg">
        <div className="grid-lines"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          hi! i'm quang. <br />
        </h1>
        <p className="hero-subtitle">
          Software engineer building scalable, data-driven applications with a focus on real-world impact.
        </p>
        <img src={HeroPhoto} alt="Hero" className="hero-image" />
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => onNavigate('work')}>
            View Work
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-secondary" onClick={() => onNavigate('contact')}>
            Get In Touch
          </button>
        </div>
        <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line"></div>
        </div>
      </div>
      
    </section>
  )
}