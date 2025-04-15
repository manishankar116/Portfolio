import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'
import Hero2 from './Hero2'

const Layout = () => {
  return (
    <div className=' overflow-hidden'>
        <Navbar />
        <Hero2 />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Layout