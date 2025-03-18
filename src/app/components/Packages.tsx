'use client';
import Image from 'next/image';
import styles from '@/app/Packages.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Packages = () => {
  const packages = [
    {
      image: '/img/package-2.jpg',
      location: 'Bali, Indonesia',
      title: 'Tropical Paradise Getaway',
      description: 'Experience pristine beaches and lush jungles in this tropical paradise',
      rating: 4,
      reviews: 345,
      price: 899
    },
    // ... keep all other package objects the same
    {
      image: '/img/package-2.jpg',
      location: 'Maldives',
      title: 'Luxury Island Retreat',
      description: 'Private villas and crystal-clear waters in paradise',
      rating: 4.2,
      reviews: 432,
      price: 2499
    }
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
                    alt={pkg.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={index < 3} // Prioritize first 3 images
                  />
                </div>
                
                <div className={styles.packageContent}>
                  <div className={styles.packageHeader}>
                    <h3 className={styles.packageTitle}>{pkg.title}</h3>
                    <p className={styles.packageDescription}>{pkg.description}</p>
                  </div>
                  
                  <div className={styles.packageFooter}>
                    <div className={styles.ratingContainer}>
                      {renderStars(pkg.rating)}
                      <span className={styles.reviews}>({pkg.reviews} reviews)</span>
                    </div>
                    <div className={styles.priceContainer}>
                      <span className={styles.priceLabel}>From</span>
                      <span className={styles.price}>${pkg.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreButton}>
              View All Packages
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;