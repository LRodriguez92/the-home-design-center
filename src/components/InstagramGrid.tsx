import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import styles from '../styles/InstagramGrid.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const instagramPosts = [
    { id: 1, embedLink: 'https://www.instagram.com/reel/C3ax3jMO_0v/?utm_source=ig_web_copy_link' },
    { id: 2, embedLink: 'https://www.instagram.com/reel/C39WYy1OwXs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: 3, embedLink: 'https://www.instagram.com/reel/C7XWIWHOKNb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: 4, embedLink: 'https://www.instagram.com/p/Cc_y9RfDhKi/?utm_source=ig_web_copy_link' },
    { id: 5, embedLink: 'https://www.instagram.com/reel/Ci2GUSBDAtM/?utm_source=ig_web_copy_link' },
    { id: 6, embedLink: 'https://www.instagram.com/reel/C5wN_XyJQXo/?utm_source=ig_web_copy_link' },
];

const InstagramGrid: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scriptLoaded = document.querySelector('script[src="//www.instagram.com/embed.js"]');
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        console.log('Instagram embed script loaded.');
        processInstagramEmbeds();
      };
      document.body.appendChild(script);
    } else {
      console.log('Instagram embed script already loaded.');
      processInstagramEmbeds();
    }
  }, []);

  const processInstagramEmbeds = () => {
    if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
      console.log('Processing Instagram embeds.');
      window.instgrm.Embeds.process();
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        processInstagramEmbeds();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className={styles.instagramGrid} ref={containerRef}>
      <h2 className={styles.header}>Instagram Posts</h2>
      {isMobile ? (
        <Slider {...sliderSettings} className={styles.slider}>
          {instagramPosts.map(post => (
            <div key={post.id} className={styles.gridItem}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={post.embedLink}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: '100%',
                }}
              ></blockquote>
            </div>
          ))}
        </Slider>
      ) : (
        <div className={styles.grid}>
          {instagramPosts.map(post => (
            <div key={post.id} className={styles.gridItem}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={post.embedLink}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: '100%',
                }}
              ></blockquote>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstagramGrid;
