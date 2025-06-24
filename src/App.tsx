import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { scrollToSection, downloadResume } from './utils/scrollUtils';

function App() {
  return (
    <div className="App">
      <Navigation onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} onDownloadResume={downloadResume} />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact onDownloadResume={downloadResume} />
    </div>
  );
}

export default App;
