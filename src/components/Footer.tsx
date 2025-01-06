"use client";

import React, { useState, useEffect } from 'react';
import StaticFooter from './StaticFooter';
import FooterForm from './FooterForm';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleStorageChange = () => {
      const newMessage = localStorage.getItem('footerMessage');
      if (newMessage) {
        setMessage(newMessage);
        localStorage.removeItem('footerMessage');
      }
    };

    // Check for message on mount
    handleStorageChange();

    // Listen for changes
    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically for changes from the same window
    const interval = setInterval(handleStorageChange, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="footer" className={styles.footerContainer}>
      <StaticFooter />
      <FooterForm initialMessage={message} />
    </div>
  );
};

export default Footer;
