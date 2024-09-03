// components/ServiceItem.tsx

import React from 'react';
import styles from '../styles/ServiceItem.module.css';

interface ServiceItemProps {
  title: string;
  summary: string;
  description: string[];
  image: string;
  ctaText: string;
  ctaHref: string;
  index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, summary, description, image, ctaText, ctaHref, index }) => {
  const isImageRight = index % 2 !== 0;  // Determine if the image should be on the right

  return (
    <div className={`${styles.serviceItem} ${isImageRight ? styles.imageRight : styles.imageLeft}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
        <ul className={styles.descriptionList}>
          {description.map((item, index) => (
            <li key={index} className={styles.descriptionItem}>{item}</li>
          ))}
        </ul>
        <a href={ctaHref} className={styles.ctaButton}>{ctaText}</a>
      </div>
    </div>
  );
};

export default ServiceItem;
