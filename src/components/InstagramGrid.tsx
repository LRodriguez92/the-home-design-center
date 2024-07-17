// src/components/InstagramGrid.tsx

import React, { useEffect } from 'react';
import styles from '../styles/InstagramGrid.module.css';

const instagramPosts = [
    { id: 1, embedLink: 'https://www.instagram.com/reel/C3ax3jMO_0v/?utm_source=ig_web_copy_link' },
    { id: 2, embedLink: 'https://www.instagram.com/reel/C39WYy1OwXs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: 3, embedLink: 'https://www.instagram.com/reel/C7XWIWHOKNb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: 4, embedLink: 'https://www.instagram.com/p/Cc_y9RfDhKi/?utm_source=ig_web_copy_link' },
    { id: 5, embedLink: 'https://www.instagram.com/reel/Ci2GUSBDAtM/?utm_source=ig_web_copy_link' },
    { id: 6, embedLink: 'https://www.instagram.com/reel/C5wN_XyJQXo/?utm_source=ig_web_copy_link' },
];

const InstagramGrid: React.FC = () => {
  useEffect(() => {
    // Ensure the Instagram embed script is loaded
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.instagramGrid}>
      <h2 className={styles.header}>Instagram Posts</h2>
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
    </div>
  );
};

export default InstagramGrid;
