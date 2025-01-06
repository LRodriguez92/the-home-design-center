import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ServicePreviewCard.module.css';

interface ServicePreviewCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ServicePreviewCard: React.FC<ServicePreviewCardProps> = ({ title, description, image, link }) => {
    // Create URL-friendly ID from title
    const serviceId = title.toLowerCase().replace(/\s+/g, '-');

    const handleClick = () => {
        window.location.href = `/services#${serviceId}`;
    };

    return (
        <div 
            className={styles.card}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                }
            }}
        >
            <div className={styles.imageWrapper}>
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <button 
                    className={styles.learnMore}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent double triggering
                        handleClick();
                    }}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ServicePreviewCard;
