import React from 'react';
import styles from './collage.module.css';

const CollagePage = () => {
    const images = [
        '/src/assets/images/image1.jpg',
        '/src/assets/images/image2.jpg',
        '/src/assets/images/image3.jpg',
        '/src/assets/images/image4.jpg',
        '/src/assets/images/image5.jpg',
        '/src/assets/images/image6.jpg',
        '/src/assets/images/image7.jpg',
    ];

    return (
        <div className={styles.collageContainer}>
            <h1>Happy Birthday Dr. Mansi!</h1>
            <div className={styles.imageGrid}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Collage ${index + 1}`} className={styles.image} />
                ))}
            </div>
        </div>
    );
};

export default CollagePage;