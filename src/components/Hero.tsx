import React from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

type HeroProps = {
  header: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  image: string;
};

const Hero: React.FC<HeroProps> = ({
  header,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  image
}) => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.header}>{header}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.cta}>
          <a href={primaryCtaHref} className={styles.primaryCta}>{primaryCtaText}</a>
          {secondaryCtaText && secondaryCtaHref && (
            <a href={secondaryCtaHref} className={styles.secondaryCta}>{secondaryCtaText}</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
