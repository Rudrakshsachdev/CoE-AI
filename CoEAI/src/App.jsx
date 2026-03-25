import React from 'react';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      {/* Sample Hero Section to demonstrate transparent/solid scrolling effect */}
      <section style={{ 
        height: '100vh', 
        backgroundColor: '#f4f4f4', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: '90px',
        background: 'linear-gradient(135deg, #e0e0e0 0%, #ffffff 100%)'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#152445', marginBottom: '1rem', textAlign: 'center' }}>
          Welcome to CoEAI
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', textAlign: 'center' }}>
          Empowering the future through artificial intelligence, cutting-edge research, and robust academic programs. Scroll down to see the navbar effect.
        </p>
      </section>
      <section style={{ height: '100vh', padding: '100px 10%' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#731320' }}>More Content Here</h2>
        <p style={{ marginTop: '20px', lineHeight: '1.6', color: '#333' }}>
          This is just a placeholder section to ensure the page has enough content to scroll. The premium navbar changes its background state globally to ensure contrast on scroll.
        </p>
      </section>
    </div>
  )
}