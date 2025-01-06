import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from '../styles/FeaturedProjects.module.css';
import FeaturedProjectsModal from './FeaturedProjectsModal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const [selectedIndex, setSelectedIndex] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const openModal = (index: number) => {
        setSelectedIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        beforeChange: () => {
            if (sliderRef.current) {
                sliderRef.current.slickPause();
            }
        },
        afterChange: () => {
            if (sliderRef.current) {
                sliderRef.current.slickPlay();
            }
        }
    };

    return (
        <div className={styles.featuredProjects}>
            <h2 className={styles.header}>Featured Projects</h2>
            <Slider ref={sliderRef} {...settings} className={styles.slider}>
                {projects.map((project, index) => (
                    <div key={project.id} className={styles.slide}>
                        <div
                            className={styles.imageWrapper}
                            onClick={() => openModal(index)}
                        >
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                layout="fill" 
                                objectFit="cover" 
                            />
                        </div>
                        <h3 className={styles.title}>{project.title}</h3>
                    </div>
                ))}
            </Slider>
            <button className={styles.viewAllButton} onClick={() => window.location.href='/projects'}>
                View All Projects
            </button>
            
            <FeaturedProjectsModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                projectTitle={projects[selectedIndex].title}
                images={projects.map(p => p.image)}
                currentIndex={selectedIndex}
            />
        </div>
    );
};

export default FeaturedProjects;
