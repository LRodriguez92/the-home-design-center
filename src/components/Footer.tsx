import React from 'react';
import StaticFooter from './StaticFooter';
import FooterForm from './FooterForm';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <StaticFooter />
      <FooterForm />
    </div>
  );
};

export default Footer;
