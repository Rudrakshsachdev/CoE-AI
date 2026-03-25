import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import iilmLogo from '../../assets/iilm-logo.png';
import coeaiLogo from '../../assets/coeai.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Work', href: '#' },
    { name: 'Programs', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Collaborations', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        {/* Logos Container */}
        <div className={styles.logoContainer}>
          <a href="#" className={styles.iilmLogoWrapper}>
            <img src={iilmLogo} alt="IILM University Logo" className={styles.iilmLogo} />
          </a>
          <div className={styles.divider}></div>
          <a href="#" className={styles.coeaiLogoWrapper}>
            <img src={coeaiLogo} alt="Centre of Excellence AI Logo" className={styles.coeaiLogo} />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div 
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileLinksContainer}>
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={styles.mobileNavLink}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
