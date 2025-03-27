'use client';
import Image from 'next/image';
import styles from '@/app/Packages.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Packages = () => {
  const packages = [
    {
      image: '/img/package-1.png',
      title:(
        <>
        Pack Visiteur 
        <br/> Démi Journée
        </>
      ) ,
      altText: "Pack Visiteur Journée Complète", // Add string alternative
      rating: 4,
      price: 160
    },
    {
      image: '/img/package-2.png',
      title: (
        <>
        Pack Visiteur 
        <br/>Journée Compléte  
        </>
      ),
      altText: "Pack Visiteur Journée Complète", // Add string alternative
      rating: 4.2,
      price: 60
    },
    {
      image: '/img/package-3.png',
      title:(
        <>
        Pack team building
        <br/> l'ére du numérique
        </>
      ) ,
      altText: "Pack Visiteur Journée Complète", // Add string alternative
      rating: 4.2,
      price: 120
    },
    {
      image: '/img/package-3.png',
      title:(
        <>
        Pack Visiteur 
        <br/> Démi Journée
        </>
      ) ,
      altText: "Pack Visiteur Journée Complète", // Add string alternative
      rating: 4.2,
      price: 55
    },
    {
      image: '/img/package-3.png',
      title:(
        <>
        Pack Visiteur 
        <br/> Démi Journée
        </>
      ) ,
      altText: "Pack Visiteur Journée Complète", // Add string alternative
      rating: 4.2,
      price: 80
    },
    {
      image: '/img/package-3.png',
      title:(
        <>
        Pack Visiteur 
        <br/> Démi Journée
        </>
      ) ,
      altText: "Pack Visiteur Journée Complète", // Add string alternative
      rating: 4.2,
      price: 150
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className={styles.stars}>
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span key={index} className={styles.star}>
              <FontAwesomeIcon
                icon={
                  rating >= starValue
                    ? faStar
                    : rating >= starValue - 0.5
                    ? faStarHalfAlt
                    : faStar
                }
                className={`${styles.starIcon} ${
                  rating >= starValue 
                    ? styles.fullStar 
                    : rating >= starValue - 0.5 
                    ? styles.halfStar 
                    : styles.emptyStar
                }`}
              />
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section className={styles.packagesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h6 className={styles.subtitle}>Packages</h6>
          <h1 className={styles.title}>Nos Packs De Services</h1>
        </div>

        <div className={styles.packagesContainer}>
          <div className={styles.packagesGrid}>
            {packages.map((pkg, index) => (
              <div key={index} className={styles.packageCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={pkg.image}
                    alt={pkg.altText}
                    fill
                    className={styles.image}
                    priority={index < 3} // Prioritize first 3 images
                  />
                </div>
                
                <div className={styles.packageContent}>
                  <div className={styles.packageHeader}>
                    <h3 className={styles.packageTitle}>{pkg.title}</h3>
                  </div>
                  
                  <div className={styles.packageFooter}>
                    <div className={styles.ratingContainer}>
                      {renderStars(pkg.rating)}
                    </div>
                    <div className={styles.priceContainer}>
                      <span className={styles.priceLabel}></span>
                      <span className={styles.price}>{pkg.price}DT</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreButton}>
              Voir Plus
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;