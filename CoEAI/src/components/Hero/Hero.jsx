import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import heroGraphic from '../../assets/hero.png';
import coeaiLogo from '../../assets/coeai.png';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Background with refined Navy/Maroon gradients matching the brand theme */}
      <div className={styles.brandGradientOverlay}></div>
      
      {/* Subtle structural grids and lines */}
      <div className={styles.gridOverlay}></div>

      <div className={`${styles.container} ${loaded ? styles.visible : ''}`}>
        
        {/* Left Content */}
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.badgePulse}></span>
            <span>Unlocking Human Potential</span>
          </div>
          
          <h1 className={styles.heading}>
            Center of Excellence in <br className={styles.breakline} />
            <span className={styles.highlightText}>Artificial Intelligence</span>
          </h1>
          
          <p className={styles.subheading}>
            Innovating the Future through AI, Research, and Technology.
          </p>
          
          <div className={styles.buttonGroup}>
            <a href="#work" className={styles.primaryBtn}>
              Explore Work
            </a>
            <a href="#join" className={styles.secondaryBtn}>
              Join Us
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className={styles.visualContent}>
          <div className={styles.imageFocus}>
            {/* Elegant multi-color glow complementing the 3D graphic */}
            <div className={styles.imageGlow}></div>
            <img 
              src={heroGraphic} 
              alt="AI Innovation" 
              className={styles.heroImage}
              onError={(e) => { e.target.src = coeaiLogo; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
