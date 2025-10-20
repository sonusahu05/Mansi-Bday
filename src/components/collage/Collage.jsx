import React, { useState, useEffect } from 'react';
import styles from './Collage.module.css';

// Import images so Vite includes them in the build
import img1 from '../../assets/images/1.jpeg';
import img2 from '../../assets/images/2.jpeg';
import img3 from '../../assets/images/3.jpeg';
import img4 from '../../assets/images/4.jpeg';
import img5 from '../../assets/images/5.jpeg';
import img6 from '../../assets/images/6.jpeg';
import img7 from '../../assets/images/7.jpeg';

// Predefined row spans (different sizes) for a masonry-like layout
const rowSpans = [32, 24, 48, 28, 36, 20, 40];
const images = [img1, img2, img3, img4, img5, img6, img7];

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

      {/* Belated birthday message card below the collage */}
      <div className={styles.belatedMessage}>
        <div className={styles.messageCard}>
          <h2>Happy Belated Birthday, Mansi 🎂💫</h2>

          <p>I know I’m super late — and honestly, I don’t even have an excuse 😭. I’m really sorry. But the good part is — now you officially belong to my closer circle 😂 Because I only start taking people for granted when they actually mean a lot to me 😌</p>

          <p>So today, I’m sending you a birthday cake 🎂 and your favourite Caramia Chocolate Therapy Pint 🍫🍨 — because “Now is the right time. Delays only make good things sweeter.” 😉 And some sweets too, obviously 😋</p>

          <p>This time, I’ll try something different — like you use coding terms, I’ll use medical ones 😎🩺</p>

          <p>There are very few things in life that actually make me this excited — and idk why, but this trip with you is one of them 😭🔥. Like I keep randomly imagining how much fun it’s gonna be — but then I remember… “Tu hain kya hi karein 😤” 😂</p>

          <p>Anyway — thank you for always being there 💙 For constantly motivating me and helping me so much in this content creation journey. Even when I was alone, I never felt alone — because you were just one call away ☎️</p>

          <p>Whether it was office rants, random ideas, or life problems — you’ve literally heard it all 😭. And honestly, mad respect for what you’re doing 🙌 People don’t even realize how much doctors struggle — especially you — juggling everything on zero sleep and still showing up.</p>

          <p>Bhai I genuinely feel ki tujhe duniya ki saari achhi chizein experience karni chahiye — (mere saath ofc 😎). I genuinely wish our friendship stays the same forever ❤️</p>

          <p>Thank you for staying for so long 🙏 Please hamesha khush reh — aur aur bhi zyada share kar, aur apne saare dreams pure karte reh 🌟💫</p>

          <p style={{ marginTop: '12px', fontWeight: 700 }}>Nazar na lage bas 🧿</p>
        </div>
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
