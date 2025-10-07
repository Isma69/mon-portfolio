import React from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
