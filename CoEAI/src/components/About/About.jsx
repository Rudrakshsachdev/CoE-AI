import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';
import ShaderAnimation from './ShaderAnimation';
import './ShaderAnimation.css';

// Intersection Observer Hook for Scroll Animations
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

const About = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [visionRef, visionVisible] = useScrollReveal();
  const [doRef, doVisible] = useScrollReveal();
  const [impactRef, impactVisible] = useScrollReveal();

  const services = [
    { title: 'AI Research', desc: 'Advancing frontier models and novel algorithms.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'Real-world Projects', desc: 'Solving industry challenges with intelligence.', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { title: 'Student Mentorship', desc: 'Building the next generation of AI leaders.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { title: 'Industry Collaboration', desc: 'Bridging academia with enterprise tech.', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  return (
    <section className={styles.aboutSection} id="about">
      {/* Background Ambience */}
      <div className={styles.bgGlow}></div>
      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        
        {/* Intro Header */}
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? styles.reveal : ''}`}>
          <div className={styles.label}>Discover Our Purpose</div>
          <h2 className={styles.title}>About the Center of Excellence in <span className={styles.cyanAccent}>AI</span></h2>
          <p className={styles.description}>
            The CoE AI at IILM University is a premier research and development hub dedicated to advancing the frontiers of Artificial Intelligence. We cultivate cutting-edge innovation, bridge the gap between academic theory and real-world application, and empower students to become the technological leaders of tomorrow.
          </p>
        </div>

        {/* --- SHADER ANIMATION SHOWCASE --- */}
        <div className="shaderShowcase">
          <ShaderAnimation />
          <div className="shaderOverlay">
            <h2 className="shaderOverlayText">Building the Future</h2>
          </div>
        </div>

        {/* Vision & Mission */}
        <div ref={visionRef} className={`${styles.visionMissionGrid} ${visionVisible ? styles.reveal : ''}`}>
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To be a globally recognized nexus of AI intelligence, fostering an ecosystem where ethical, sustainable, and transformative technologies are born to solve humanity's greatest challenges.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              Accelerate technological adoption by seamlessly integrating multi-disciplinary research, deep industry partnerships, and comprehensive hands-on student mentorship programs.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div ref={doRef} className={`${styles.whatWeDoSection} ${doVisible ? styles.reveal : ''}`}>
          <h3 className={styles.sectionSubtitle}>Core Pillars of Innovation</h3>
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div key={idx} className={styles.serviceItem}>
                <div className={styles.serviceIconFrame}>
                  <svg className={styles.serviceIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h4 className={styles.serviceTitle}>{service.title}</h4>
                <p className={styles.serviceText}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Highlights */}
        <div ref={impactRef} className={`${styles.impactSection} ${impactVisible ? styles.reveal : ''}`}>
          <div className={styles.impactCard}>
            <div className={styles.impactNumber}>50+</div>
            <div className={styles.impactLabel}>Research Papers</div>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactNumber}>120+</div>
            <div className={styles.impactLabel}>Active Projects</div>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactNumber}>15+</div>
            <div className={styles.impactLabel}>Industry Partners</div>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactNumber}>500+</div>
            <div className={styles.impactLabel}>Students Mentored</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
