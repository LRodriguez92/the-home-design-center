// src/components/FeaturedProjects.tsx

import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Modal from 'react-modal';
import styles from '../styles/FeaturedProjects.module.css';

const projects = [
  { id: 1, title: 'Modern Kitchen Remodel', image: '/images/kitchen-hero.jpg' },
  { id: 2, title: 'Luxurious Bath Renovation', image: '/images/kitchen-hero.jpg' },
  { id: 3, title: 'Contemporary 3D Design', image: '/images/kitchen-hero.jpg' },
  { id: 4, title: 'Elegant LED Lighting Installation', image: '/images/kitchen-hero.jpg' },
  { id: 5, title: 'Professional Painting Service', image: '/images/kitchen-hero.jpg' },
  { id: 6, title: 'Premium Flooring Solutions', image: '/images/kitchen-hero.jpg' },
  { id: 7, title: 'Efficient Wall Removal', image: '/images/kitchen-hero.jpg' },
  { id: 8, title: 'Custom Drywall Texturing', image: '/images/kitchen-hero.jpg' },
];

const FeaturedProjects: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<Slider>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    if (sliderRef.current) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = (image: string) => {
    if (!isDragging) {
      openModal(image);
    }
    setIsDragging(false);
  };

  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.featuredProjects}>
      <h2 className={styles.header}>Featured Projects</h2>
      <Slider ref={sliderRef} {...settings} className={styles.slider}>
        {projects.map(project => (
          <div key={project.id} className={styles.slide}>
            <div
              className={styles.imageWrapper}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={() => handleMouseUp(project.image)}
            >
              <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
        ))}
      </Slider>
      <button className={styles.viewAllButton} onClick={() => window.location.href='/projects'}>
        View All Projects
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
      >
        <div className={styles.modalContent}>
          <button onClick={closeModal} className={styles.closeButton}>×</button>
          {selectedImage && (
            <Image src={selectedImage} alt="Selected Project" layout="fill" objectFit="contain" />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default FeaturedProjects;
