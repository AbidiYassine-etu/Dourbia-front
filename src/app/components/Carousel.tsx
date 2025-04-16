'use client'
import { useState } from 'react';
import styles from '@/app/Carousel.module.css';
import Image from 'next/image';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');


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
            Vivez des expériences uniques
            <br />
            <div className={styles.svgWrapper2}>
              {/* New partner SVG */}
              <svg 
                className={styles.orangeShape2} 
                viewBox="0 0 404 103"
                style={{ width: '53%', left: '45%' }} // Adjust positioning
              >
                <path d="M51.1461 102.66L0.395328 3.41797L381.24 0.306817L403.33 76.507L51.1461 102.66Z" fill="#FB7822"/>
              </svg>
              <span className={styles.capitalizeText} >
                avec nos partenaires locaux
              </span>
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
          une plateforme de création de contenu            
          <br />
          <div className={styles.svgWrapper2}>
          <svg 
                className={styles.orangeShape2} 
                viewBox="0 0 870 114"
                style={{ width: '950', left: '64.5%' }} // Adjust positioning
              >
            <path d="M52.5 114L1.00429e-05 -0.000683027L631.5 11.4996L667.5 85L52.5 114Z" fill="#FB7822"/>
          </svg>
              <span className={styles.capitalizeText} >
              participatif et collaboratif               
              </span>
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
            Vivez l’innovation culturelle 
            <br />
            <div className={styles.svgWrapper2}>
            <svg 
                className={styles.orangeShape2} 
                viewBox="0 0 870 114"
                style={{ width: '950', left: '90%', top:'60%' }} // Adjust positioning
              >
            <path d="M62.5 69.5004L4.02847e-06 0.84778L419.107 0.848408L471 89.0004L62.5 69.5004Z" fill="#FB7822"/>
          </svg>
              <span className={styles.capitalizeText} >
              À votre rythme               
              </span>
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
          <br />
          <div className={styles.svgWrapper3}>
            <span className={styles.capitalizeText}>
            Utilisation responsable de la 
              <svg 
                className={styles.underlineSVG} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 413 76"
              >
                <path d="M17.5 60.5L2.9135e-05 0.49978L299.786 8.9142L312.5 76L17.5 60.5Z" fill="#FB7822"/>
              </svg>
            </span>
            <span className={styles.capitalizeText} >technologie Au service du patrimoine</span>
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

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // prevent page reload
    console.log('Destination:', destination);
    console.log('Duration:', duration);
    // You can now trigger your booking logic here
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
      <form onSubmit={handleSubmit} className={styles.selectGroup}>
        <select 
          className={styles.selectInput}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Destination</option>
          <option value="tous">Tous</option>
          <option value="Carthage">Carthage</option>
          <option value="La Marsa">La Marse</option>
        </select>
        
        <select 
          className={styles.selectInput}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value="">Durée</option>
          <option value="tous">Tous</option>
          <option value="1"> 1 Journée</option>
          <option value="2">1/2 Journée</option>
        </select>
        
        <button type="submit" className={styles.confirmationButton}>
          Réservez Maintenant
        </button>
      </form>
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