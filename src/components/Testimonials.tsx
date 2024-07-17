import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from '../styles/Testimonials.module.css';

const testimonials = [
  { 
    id: 1, 
    review: "At Designership, they ship truly brilliant products! It's easy to use and scale, and is really handy to customise for any projects.", 
    name: 'Loki Bright' 
  },
  { 
    id: 2, 
    review: "Amazing service and top-notch products. I highly recommend them for any design needs.", 
    name: 'Jane Doe' 
  },
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className={styles.testimonials}>
      <h2 className={styles.header}>Testimonials</h2>
      <Slider {...settings} className={styles.slider}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className={styles.card}>
            <div className={styles.logoWrapper}>
              <Image src="/images/logo-black.png" alt="Site Logo" width={50} height={50} />
            </div>
            <p className={styles.review}>{`"${testimonial.review}"`}</p>
            {testimonial.name && <p className={styles.name}>{testimonial.name}</p>}
          </div>
        ))}
      </Slider>
      <button className={styles.reviewButton} onClick={() => window.location.href='/leave-review'}>
        Leave a Review
      </button>
    </div>
  );
};

export default Testimonials;
