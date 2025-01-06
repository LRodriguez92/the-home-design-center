import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProjectModal.module.css';

interface FeaturedProjectsModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectTitle: string;
    images: string[];
    currentIndex: number;
}

const FeaturedProjectsModal: React.FC<FeaturedProjectsModalProps> = ({ 
    isOpen, 
    onClose, 
    projectTitle,
    images,
    currentIndex
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [nextImageIndex, setNextImageIndex] = useState<number | null>(null);

    useEffect(() => {
        setCurrentImageIndex(currentIndex);
    }, [currentIndex]);

    const nextImage = () => {
        const next = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
        setNextImageIndex(next);
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentImageIndex(next);
            setNextImageIndex(null);
            setSlideDirection(null);
        }, 300);
    };

    const previousImage = () => {
        const prev = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
        setNextImageIndex(prev);
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentImageIndex(prev);
            setNextImageIndex(null);
            setSlideDirection(null);
        }, 300);
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX - translateX);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const newTranslateX = clientX - startX;
        setTranslateX(newTranslateX);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 100;
        if (Math.abs(translateX) > threshold) {
            if (translateX > 0) {
                previousImage();
            } else {
                nextImage();
            }
        }
        setTranslateX(0);
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                
                <div 
                    ref={containerRef}
                    className={styles.imageContainer}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                >
                    <div className={styles.imageSlider}>
                        <div 
                            className={`${styles.imageWrapper} ${
                                slideDirection === 'left' ? styles.slideOutLeft : 
                                slideDirection === 'right' ? styles.slideOutRight : ''
                            }`}
                        >
                            <Image 
                                src={images[currentImageIndex]} 
                                alt={`${projectTitle} - Image ${currentImageIndex + 1}`} 
                                layout="fill" 
                                objectFit="cover"
                                priority
                                draggable={false}
                            />
                        </div>
                        {nextImageIndex !== null && (
                            <div 
                                className={`${styles.imageWrapper} ${styles.nextImage} ${
                                    slideDirection === 'left' ? styles.slideInLeft : 
                                    slideDirection === 'right' ? styles.slideInRight : ''
                                }`}
                            >
                                <Image 
                                    src={images[nextImageIndex]} 
                                    alt={`${projectTitle} - Image ${nextImageIndex + 1}`} 
                                    layout="fill" 
                                    objectFit="cover"
                                    priority
                                    draggable={false}
                                />
                            </div>
                        )}
                    </div>
                    <button className={styles.navButton} onClick={previousImage}>&lt;</button>
                    <button className={styles.navButton} onClick={nextImage}>&gt;</button>
                </div>
                
                <div className={styles.thumbnailStrip}>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        >
                            <Image 
                                src={image} 
                                alt={`${projectTitle} thumbnail ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </button>
                    ))}
                </div>
                
                <Link href="/projects" className={styles.ctaButton}>
                    View All Projects
                </Link>
            </div>
        </div>
    );
};

export default FeaturedProjectsModal;
