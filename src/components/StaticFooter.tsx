import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const StaticFooter: React.FC = () => {
  return (
    <div className={styles.contactSection}>
      <h2 className={styles.header}>We'd love to hear from you!</h2>
      <p>Whether you have a question about our services, want to discuss a new project, or just want to say hello, our team is here to help. Fill out the form below, and we'll get back to you as soon as possible.</p>
      <br />
      <div className={styles.contactItem}>
        <FaEnvelope className={styles.icon} />
        <p>Chat with us: <a href="mailto:TheHomeDesignCenterOrlando@gmail.com">TheHomeDesignCenterOrlando@gmail.com</a></p>
      </div>
      <div className={styles.contactItem}>
        <FaPhone className={styles.icon} />
        <p>Call us: +1 (201) 555-0123</p>
      </div>
      <div className={styles.contactItem}>
        <FaMapMarkerAlt className={styles.icon} />
        <p>Locations we service:</p>
      </div>
      <div className={styles.locations}>
        <ul>
          <li>Orlando</li>
          <li>Poinciana</li>
          <li>Apopka</li>
          <li>Winter Park</li>
          <li>Windermere</li>
          <li>Winter Garden</li>
          <li>Cocoa</li>
          <li>Melbourne</li>
        </ul>
        <ul>
          <li>Casselberry</li>
          <li>Belle Isle</li>
          <li>Kissimmee</li>
          <li>Clermont</li>
          <li>Oviedo</li>
          <li>Baldwin Park</li>
          <li>Isleworth</li>
        </ul>
      </div>
      <div className={styles.links}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>
      <div className={styles.socialIcons}>
        <FaFacebook className={styles.socialIcon} />
        <FaInstagram className={styles.socialIcon} />
      </div>
      <p className={styles.footerText}>© 2024 The Home Design Center. All rights reserved.<br />Design by CodedByLeo</p>
    </div>
  );
};

export default StaticFooter;
