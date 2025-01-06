import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      <Link href={link} className={styles.link}>
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
