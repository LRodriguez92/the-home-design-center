import React from 'react';
import StaticHeader from './StaticHeader';
import InteractiveHeader from './InteractiveHeader';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <StaticHeader />
    </header>
  );
};

export default Header;
