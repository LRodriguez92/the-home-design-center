"use client";

import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

const InteractiveHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.hamburger} onClick={toggleMenu}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        {/* The navigation links can remain here if you want them to be toggled */}
      </nav>
    </div>
  );
};

export default InteractiveHeader;
