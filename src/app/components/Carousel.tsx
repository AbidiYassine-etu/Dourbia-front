'use client'
import { useState } from 'react';
import styles from '@/app/Carousel.module.css';
import Image from 'next/image';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      image: '/img/carousel-1.png',
      alt: 'Dourbia',
      title: "Dourbia",
      subtitle: "Vos expériences culturelles à la carte ",
      buttonText: 'Explore More'
    },
    {
      image: '/img/carousel-2.png',
      alt: '**',
      title: '**',
      subtitle: '**',
      buttonText: 'Learn More'
    },
    {
      image: '/img/carousel-3.png',
      alt: '**',
      title: '**',
      subtitle: '**',
      buttonText: 'Book Now'
    },
    {
      image: '/img/carousel-4.png',
      alt: '**',
      title: '**',
      subtitle: '**',
      buttonText: 'View Details'
    },
    {
      image: '/img/carousel-5.png',
      alt: '**',
      title: '**',
      subtitle: '**',
      buttonText: 'View Details'
    }
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
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className={styles.carouselCaption}>
              <div className={styles.captionContent}>
                <h4 className={styles.title}>{item.title}</h4>
                <h1 className={styles.subtitle}>{item.subtitle}</h1>
              </div>
            </div>
            <button className={styles.centeredButton}>
              {item.buttonText}
            </button>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className={styles.carouselDots}>
          {items.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === activeIndex ? styles.activeDot : ''
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
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