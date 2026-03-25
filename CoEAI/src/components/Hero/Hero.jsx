import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import heroGraphic from '../../assets/hero.png';
import coeaiLogo from '../../assets/coeai.png';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Slight delay ensures the CSS transitions fire smoothly after initial paint
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* State-of-the-Art Ambient Mesh Background */}
      <div className={styles.ambientMeshContainer}>
        <div className={styles.ambientOrb1}></div>
        <div className={styles.ambientOrb2}></div>
        <div className={styles.ambientOrb3}></div>
      </div>
      
      {/* Heavy Blur Glass Overlay to blend orbs into a fluid mesh */}
      <div className={styles.glassOverlay}></div>
      
      {/* Perspective Tech Grid with Mask */}
      <div className={styles.gridOverlay}></div>
      
      {/* Large faint logo as centerpiece behind content */}
      <img src={coeaiLogo} alt="" className={styles.brandWatermark} />

      <div className={`${styles.container} ${loaded ? styles.visible : ''}`}>
        
        {/* Left Typography & CTAs (Staggered Entrances) */}
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
            Bridging the gap between frontier research, ethical AI, and real-world technological advancement at IILM University.
          </p>
          
          <div className={styles.buttonGroup}>
            <a href="#work" className={styles.primaryBtn}>
              Explore Work
              <svg className={styles.btnIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#join" className={styles.secondaryBtn}>
              Join Us
            </a>
          </div>
        </div>

        {/* Right Visual Element */}
        <div className={styles.visualContent}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageHalo}></div>
            <img 
              src={heroGraphic} 
              alt="Futuristic AI Brain" 
              className={styles.heroImage} 
              onError={(e) => { e.target.src = coeaiLogo; }}
            />
            
            {/* Premium Glassmorphic Tags with colored dot indicators */}
            <div className={`${styles.floatingElement} ${styles.float1}`}>
              <span>Generative AI</span>
            </div>
            <div className={`${styles.floatingElement} ${styles.float2}`}>
              <span>Machine Learning</span>
            </div>
            <div className={`${styles.floatingElement} ${styles.float3}`}>
              <span>Neural Net Data</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
