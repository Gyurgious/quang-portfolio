import { useState, useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cursorFollow, setCursorFollow] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const delay = 0.1
    const timer = setTimeout(() => {
      setCursorFollow({ x: mousePos.x, y: mousePos.y })
    }, delay * 1)
    return () => clearTimeout(timer)
  }, [mousePos])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'work', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Custom Cursor */}
      <div 
        className="cursor-follower"
        style={{ left: cursorFollow.x, top: cursorFollow.y }}
      />
      <div 
        className="cursor-dot"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={scrollTo} />

      {/* Sections */}
      <Hero onNavigate={scrollTo} />
      <About />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
