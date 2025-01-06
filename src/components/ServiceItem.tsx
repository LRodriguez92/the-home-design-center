// components/ServiceItem.tsx

import React from 'react';
import styles from '../styles/ServiceItem.module.css';

interface ServiceItemProps {
  title: string;
  summary: string[];
  description: string[];
  image: string;
  ctaText: string;
  ctaHref: string;
  index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, summary, description, image, ctaText, ctaHref, index }) => {
  const isImageRight = index % 2 !== 0;  // Determine if the image should be on the right

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Create and store the message
    const message = `I'm interested in getting a quote for your ${title} service.`;
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
    <div className={`${styles.serviceItem} ${isImageRight ? styles.imageRight : styles.imageLeft}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.summary}>
          {summary.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <ul className={styles.descriptionList}>
          {description.map((item, index) => (
            <li key={index} className={styles.descriptionItem}>{item}</li>
          ))}
        </ul>
        <button onClick={handleQuoteClick} className={styles.ctaButton}>{ctaText}</button>
      </div>
    </div>
  );
};

export default ServiceItem;
