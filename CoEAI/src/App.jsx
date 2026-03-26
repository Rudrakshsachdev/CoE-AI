import React from 'react';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <section style={{ height: '100vh', padding: '100px 10%', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#731320' }}>More Content Here</h2>
        <p style={{ marginTop: '20px', lineHeight: '1.6', color: '#333' }}>
          This is just a placeholder section to ensure the page has enough content to scroll. The premium navbar changes its background state globally to ensure contrast on scroll.
        </p>
      </section>
    </div>
  )
}