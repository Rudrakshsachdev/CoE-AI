import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import iilmLogo from "../../assets/iilm-logo1.png";
import coeaiLogo from "../../assets/coeai.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Team", href: "#" },
    { name: "Work", href: "#" },
    { name: "Opportunities", href: "#opportunities" },
    { name: "Programs", href: "#" },
    { name: "Events", href: "#events" },
    { name: "Highlights", href: "#highlights" },
    { name: "Collaborations", href: "#" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        {/* Logos */}
        <div className={styles.logoContainer}>
          <a href="#" className={styles.logoLink}>
            <img
              src={iilmLogo}
              alt="IILM University"
              className={styles.iilmLogo}
            />
          </a>
          <div className={styles.logoDivider}></div>
          <a href="#" className={styles.logoLink}>
            <img
              src={coeaiLogo}
              alt="Centre of Excellence AI"
              className={styles.coeaiLogo}
            />
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

        {/* Mobile Hamburger Toggle */}
        <button
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.overlayVisible : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`${styles.mobileMenuDrawer} ${mobileMenuOpen ? styles.drawerOpen : ""}`}
      >
        <div className={styles.mobileDrawerHeader}>
          <img
            src={coeaiLogo}
            alt="CoE AI"
            className={styles.mobileDrawerLogo}
          />
        </div>
        <div className={styles.mobileLinksContainer}>
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              style={{ transitionDelay: `${index * 0.05}s` }}
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
