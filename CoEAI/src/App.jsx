import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TeamSection from './components/Team/TeamSection';

export default function App() {
  return (
    <div style={{ backgroundColor: '#030614' }}>
      <Navbar />
      <Hero />
      <About />
      <TeamSection />
    </div>
  )
}