import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveHeader from './InteractiveHeader';
import styles from '../styles/Header.module.css';

const StaticHeader: React.FC = () => {
  return (
    <div className={styles.headerContent}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo-white.png"
            alt="The Home Design Center Logo"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>The Home Design Center</h1>
        </div>
      </Link>

      {/* Full Navigation for Desktop */}
      <nav className={styles.navDesktop}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contact" className={styles.contactNav}>
          <button className={styles.ctaButton}>Contact Us</button>
        </Link>
      </nav>

      {/* Insert the Interactive Header here for the mobile hamburger menu */}
      <InteractiveHeader />
    </div>
  );
};

export default StaticHeader;
