"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const InteractiveHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${styles.navMobile} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contact" className={styles.contactNav}>
          <button className={styles.ctaButton}>Contact Us</button>
        </Link>
      </nav>
    </>
  );
};

export default InteractiveHeader;
