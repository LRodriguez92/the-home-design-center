import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    summary: string;
    images: string[];
    onSeeMore: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, images, onSeeMore }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image src={images[0]} alt={title} layout="fill" objectFit="cover" />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.summary}>{summary}</p>
            <button className={styles.seeMoreButton} onClick={onSeeMore}>See More</button>
        </div>
    );
};

export default ProjectCard;
