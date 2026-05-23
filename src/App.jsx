import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ResumePage from './components/ResumePage'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-scale min-h-screen bg-dark-bg text-slate-100 overflow-x-hidden">
      <div className="animated-gradient-bg" />
      <Navbar isScrolled={isScrolled} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <ResumePage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
