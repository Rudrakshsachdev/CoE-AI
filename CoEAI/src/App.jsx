import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TeamSection from './components/Team/TeamSection';
import ProjectsSection from './components/Projects/ProjectsSection';

export default function App() {
  return (
    <div style={{ backgroundColor: '#030614' }}>
      <Navbar />
      <Hero />
      <About />
      <TeamSection />
      <ProjectsSection />
    </div>
  )
}