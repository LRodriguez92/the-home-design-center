import React from 'react';
import Image from 'next/image';
import styles from '../styles/ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href={link} className={styles.link}>Learn More</a>
    </div>
  );
};

export default ServiceCard;
