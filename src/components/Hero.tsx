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
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Create and store the message
    const message = "I'm interested in getting a quote for your services.";
    localStorage.setItem('footerMessage', message);
    
    // Scroll to footer
    const footer = document.querySelector('#footer');
    if (footer) {
      const elementRect = footer.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2) - 100;
      window.scrollTo({
        top: middle,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.header}>{header}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.cta}>
          <button onClick={handleQuoteClick} className={styles.primaryCta}>{primaryCtaText}</button>
          {secondaryCtaText && secondaryCtaHref && (
            <a href={secondaryCtaHref} className={styles.secondaryCta}>{secondaryCtaText}</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
