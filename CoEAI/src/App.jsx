import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

export default function App() {
  return (
    <div style={{ backgroundColor: '#030614' }}>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}