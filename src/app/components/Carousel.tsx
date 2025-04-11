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
        subtitle: (
          <>
            Vos expériences culturelles
            <br />
            <div className={styles.svgWrapper}>
              <svg className={styles.orangeShape} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 128">
                <path d="M44.5652 128L0 24L331.522 0L350 83L44.5652 128Z" fill="#FB7822"/>
              </svg>
              <span className={styles.uppercaseText}>à la carte</span>
            </div>
          </>
        ),
      },
      {
        image: '/img/carousel-2.png',
        alt: '**',
        title: "Dourbia",
        subtitle: (
          <>
            Vos expériences culturelles
            <br />
            <div className={styles.svgWrapper}>
              <svg className={styles.orangeShape} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 128">
                <path d="M44.5652 128L0 24L331.522 0L350 83L44.5652 128Z" fill="#FB7822"/>
              </svg>
              <span className={styles.uppercaseText}>à la carte</span>
            </div>
          </>
        ),
      },
      {
        image: '/img/carousel-3.png',
        alt: '**',
        title: "Dourbia",
        subtitle: (
          <>
            Vos expériences culturelles
            <br />
            <div className={styles.svgWrapper}>
              <svg className={styles.orangeShape} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 128">
                <path d="M44.5652 128L0 24L331.522 0L350 83L44.5652 128Z" fill="#FB7822"/>
              </svg>
              <span className={styles.uppercaseText}>à la carte</span>
            </div>
          </>
        ),
      },
      {
        image: '/img/carousel-4.png',
        alt: '**',
        title: "Dourbia",
        subtitle: (
          <>
            Vos expériences culturelles
            <br />
            <div className={styles.svgWrapper}>
              <svg className={styles.orangeShape} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 128">
                <path d="M44.5652 128L0 24L331.522 0L350 83L44.5652 128Z" fill="#FB7822"/>
              </svg>
              <span className={styles.uppercaseText}>à la carte</span>
            </div>
          </>
        ),
      },
      {
        image: '/img/carousel-5.png',
        alt: '**',
        title: "Dourbia",
        subtitle: (
          <>
            Vos expériences culturelles
            <br />
            <div className={styles.svgWrapper}>
              <svg className={styles.orangeShape} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 128">
                <path d="M44.5652 128L0 24L331.522 0L350 83L44.5652 128Z" fill="#FB7822"/>
              </svg>
              <span className={styles.uppercaseText}>à la carte</span>
            </div>
          </>
        ),
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
            objectFit="contain"
            priority
          />
        </div>
        
        <div className={styles.carouselCaption}>
          {/* Title */}
          <div className={styles.titlestyle}>
            <h4 className={styles.title}>{item.title}</h4>
          </div>
          
          {/* Subtitle with SVG */}
          <div className={styles.subtitlestyle}>
            <div className={styles.svgWrapper}>
              <svg className={styles.orangeShape} viewBox="0 0 350 128">
                <path d="M44.5652 128L0 24L331.522 0L350 83L44.5652 128Z" fill="#FB7822"/>
              </svg>
            </div>
            <h1 className={styles.subtitle}>{item.subtitle}</h1>
          </div>

          {/* Booking Widget */}
          <div className={styles.bookingWidget}>
            <div className={styles.selectGroup}>
              <select className={styles.selectInput}>
                {<option value="">Déstination</option>}
              </select>
              
              <select className={styles.selectInput}>
              {<option value="">Durée</option>}
              </select>
              
              <button className={styles.confirmationButton}>
                Réservez Maintenant
              </button>
            </div>
          </div>
        </div>
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