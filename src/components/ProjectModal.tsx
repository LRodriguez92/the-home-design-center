import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProjectModal.module.css';

interface ProjectModalProps {
    project: {
        title: string;
        images: string[];
        description: string;
        ctaText: string;
    };
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <h2>{project.title}</h2>
                <div className={styles.imageSlider}>
                    {project.images.map((image, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <Image src={image} alt={project.title} layout="fill" objectFit="cover" />
                        </div>
                    ))}
                </div>
                <Link href="/contact">
                    <a className={styles.ctaButton}>{project.ctaText}</a>
                </Link>
            </div>
        </div>
    );
};

export default ProjectModal;
