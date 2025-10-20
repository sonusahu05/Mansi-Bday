import React, { useState, useEffect } from 'react';
import styles from './Collage.module.css';

// Predefined row spans (different sizes) for a masonry-like layout
const rowSpans = [28, 18, 34, 22, 26, 16, 30];
const images = [
  '/src/assets/images/1.jpeg',
  '/src/assets/images/2.jpeg',
  '/src/assets/images/3.jpeg',
  '/src/assets/images/4.jpeg',
  '/src/assets/images/5.jpeg',
  '/src/assets/images/6.jpeg',
  '/src/assets/images/7.jpeg',
];

const Collage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const showPrev = (e) => {
    e && e.stopPropagation();
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const showNext = (e) => {
    e && e.stopPropagation();
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  // keyboard navigation for lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex]);

  return (
    <div className={styles.collageContainer}>
      <h1 className={styles.title}>A Small Surprise — Collage</h1>
      <p className={styles.subtitle}>Click any image to view it larger. Use arrow keys or on-screen controls.</p>

      <div className={styles.imageGrid}>
        {images.map((src, i) => (
          <div
            key={i}
            className={styles.imageWrap}
            onClick={() => openLightbox(i)}
            style={{ ['--row-span']: rowSpans[i] }}
          >
            <img src={src} alt={`collage-${i + 1}`} className={styles.image} />
            <div className={styles.overlay}>
              <span className={styles.viewText}>View</span>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">×</button>
          <button className={styles.lightboxPrev} onClick={showPrev} aria-label="Previous">‹</button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={images[activeIndex]} alt={`collage-large-${activeIndex + 1}`} className={styles.lightboxImage} />
            <div className={styles.lightboxCaption}>Image {activeIndex + 1} of {images.length}</div>
          </div>
          <button className={styles.lightboxNext} onClick={showNext} aria-label="Next">›</button>
        </div>
      )}
    </div>
  );
};

export default Collage;
