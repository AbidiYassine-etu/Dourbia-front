'use client'
import { useState } from 'react';
import styles from '@/app/Carousel.module.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      video: '/video/test.mp4',
      alt: '**',
      title: "**",
      subtitle: '**'
    },
    {
      video: '/video/test.mp4',
      alt: '**',
      title: "**",
      subtitle: '**'
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index === activeIndex ? styles.active : ''
            }`}
          >
            <div className={styles.videoContainer}>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.carouselCaption}>
              <div className={styles.captionContent}>
                <h4 className={styles.subtitle}>{item.subtitle}</h4>
                <h1 className={styles.title}>{item.title}</h1>
                <button className={styles.bookButton}>Book Now</button>
              </div>
            </div>
          </div>
        ))}

        <button
          className={styles.controlPrev}
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <div className={styles.controlButton}>
            <span className={styles.controlIconPrev} />
          </div>
        </button>
        
        <button
          className={styles.controlNext}
          onClick={handleNext}
          aria-label="Next slide"
        >
          <div className={styles.controlButton}>
            <span className={styles.controlIconNext} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Carousel;