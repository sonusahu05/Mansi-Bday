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

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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
            // assign CSS variable for row-span; keep value numeric for CSS calc if needed
            style={{ ['--row-span']: rowSpans[i] }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') openLightbox(i);
            }}
            aria-label={`Open image ${i + 1}`}
          >
            <img src={src} alt={`collage-${i + 1}`} className={styles.image} />
            <div className={styles.overlay}>
              <span className={styles.viewText}>View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Belated birthday message card below the collage (Medical-lingo edition) */}
      <div className={styles.belatedMessage}>
        <div className={styles.messageCard}>
          <h2>Happy Belated Birthday, Dr. Mansi 🩺🎂💫</h2>

          <p>I know main <em>kaafi late</em> hu — and honestly, there’s no medical justification for this delay 😭  
          It’s a full-blown case of <strong>Chronic Procrastination Disorder</strong>. But silver lining — you’ve now officially entered my <strong>high-priority patient list</strong> 😂  
          Because I only start taking people for granted once they become <em>emotionally life-saving</em> 😌</p>

          <p>So today, I’m prescribing a heavy dose of 🎂 + your favourite <strong>Caramia Chocolate Therapy Pint 🍫🍨</strong> —  
          because clinical trials show “delayed sweetness increases overall satisfaction levels.” 😉</p>

          <p>This time, I’ll speak in medical terms — since you speak in code 😎🩺</p>

          <p>There are very few triggers that cause a real <strong>dopamine surge</strong>, but this <em>trip with you</em> is definitely one of them 😭🔥  
          Random neural impulses keep firing: “Kitna mazza aayega!” — but then reality hits like a low-BP case: “tujhe hi time nahi hain 😤” 😂</p>

          <p>Anyway — thank you for always being my <strong>mental IV drip</strong> and <strong>24x7 on-call emotional support</strong> 💙  
          You give constant serotonin boosts during my content-creation burnout phases. Even during my worst mental OPD hours, you show up without an appointment ☎️</p>

          <p>Thank you for sending daily clinical updates — sunsets 🌇, rainbows 🌈, festival vibes 🎉, newborn videos 👶, and the chaotic-but-legendary hospital OOTDs after 36-hour shifts 😭</p>

          <p>Whether it was office rants, random ideas, or emergency-level life problems — you’ve heard it all. Tu genuinely <strong>bohot acchi listener</strong> hai — zero toxicity, 100% empathy (WHO-approved human). 😭❤️</p>

          <p>Mad respect for what you do 🙌 Intern life = chronic sleep deprivation + pressure, yet you show up with stable vitals every day. Your NGO dream? That’s a surgical strike of kindness on humanity ❤️</p>

          <p>Bhai, I honestly feel ki tujhe duniya ki saari positive experiences milni chahiye — <strong>(mere saath ofc 😎)</strong>  
          I wish our friendship stays <strong>hemodynamically stable</strong> forever ❤️</p>

          <p>Thank you for staying in my long-term therapy plan 🙏 Please <strong>hamesha khush reh</strong>, keep your happiness within normal limits, and keep achieving all your dream outcomes 🌟💫</p>

          <p style={{ marginTop: 12, fontWeight: 700 }}>Tu literally <em>best insaan</em> — rare species, no toxicity detected. Nazar na lage bas 🧿</p>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${activeIndex + 1} preview`}
        >
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close"
            title="Close"
          >
            ×
          </button>

          <button
            className={styles.lightboxPrev}
            onClick={showPrev}
            aria-label="Previous image"
            title="Previous"
          >
            ‹
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex]}
              alt={`collage-large-${activeIndex + 1}`}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxCaption}>
              Image {activeIndex + 1} of {images.length}
            </div>
          </div>

          <button
            className={styles.lightboxNext}
            onClick={showNext}
            aria-label="Next image"
            title="Next"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Collage;
