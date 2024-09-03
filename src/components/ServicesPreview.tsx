import React from 'react';
import ServicePreviewCard from './ServicePreviewCard';
import styles from '../styles/ServicesPreview.module.css';

const services = [
  {
    title: 'Kitchen Remodel',
    description: 'Transform your kitchen into a culinary paradise.',
    image: '/images/kitchen-hero.jpg',
    link: '/services/kitchen-remodel',
  },
  {
    title: 'Bath Remodel',
    description: 'Create a luxurious and functional bathroom space.',
    image: '/images/kitchen-hero.jpg',
    link: '/services/bath-remodel',
  },
  {
    title: '3D Design',
    description: 'Visualize your project with our 3D design services.',
    image: '/images/kitchen-hero.jpg',
    link: '/services/3d-design',
  },
  {
    title: 'LED Lighting',
    description: 'Enhance your space with energy-efficient lighting.',
    image: '/images/kitchen-hero.jpg',
    link: '/services/led-lighting',
  },
  {
    title: 'Painting',
    description: 'Professional painting services to refresh your home.',
    image: '/images/kitchen-hero.jpg',
    link: '/services/painting',
  },
  {
    title: 'Wall Removal',
    description: 'Expert drywall texture services for a perfect finish.',
    image: '/images/kitchen-hero.jpg',
    link: '/services/wall-removal',
  },
  {
    title: 'Flooring',
    description: 'High-quality flooring solutions for every room.',
    image: '/images/kitchen-hero.jpg',
    link: '/services/flooring',
  },
  {
    title: 'Drywall Texture',
    description: 'Open up your space with our wall removal services.',
    image: '/images/kitchen-hero.jpg',
    link: '/services/drywall-texture',
  },
];

const Services: React.FC = () => {
  return (
    <div className={styles.services}>
      <h2 className={styles.header}>Services</h2>
      <div className={styles.grid}>
        {services.map(service => (
          <ServicePreviewCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
