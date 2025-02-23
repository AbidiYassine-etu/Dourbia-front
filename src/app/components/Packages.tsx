import Image from 'next/image';
import styles from '@/app/Packages.module.css';

const Packages = () => {
  const packages = [
    {
      image: '/img/package-1.jpg',
      location: 'Thailand',
      days: 3,
      people: 2,
      title: 'Discover amazing places of the world with us',
      rating: 4.5,
      reviews: 250,
      price: 350
    },
    {
        image: '/img/package-1.jpg',
        location: 'Thailand',
        days: 3,
        people: 2,
        title: 'Discover amazing places of the world with us',
        rating: 4.5,
        reviews: 250,
        price: 350
      },
      {
        image: '/img/package-1.jpg',
        location: 'Thailand',
        days: 3,
        people: 2,
        title: 'Discover amazing places of the world with us',
        rating: 4.5,
        reviews: 250,
        price: 350
      },
      {
        image: '/img/package-1.jpg',
        location: 'Thailand',
        days: 3,
        people: 2,
        title: 'Discover amazing places of the world with us',
        rating: 4.5,
        reviews: 250,
        price: 350
      },
      {
        image: '/img/package-1.jpg',
        location: 'Thailand',
        days: 3,
        people: 2,
        title: 'Discover amazing places of the world with us',
        rating: 4.5,
        reviews: 250,
        price: 350
      },
      {
        image: '/img/package-1.jpg',
        location: 'Thailand',
        days: 3,
        people: 2,
        title: 'Discover amazing places of the world with us',
        rating: 4.5,
        reviews: 250,
        price: 350
      },

  ];

  return (
    <section className={styles.packagesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h6 className={styles.subtitle}>Packages</h6>
          <h1 className={styles.title}>Perfect Tour Packages</h1>
        </div>

        <div className={styles.packagesGrid}>
          {packages.map((pkg, index) => (
            <div key={index} className={styles.packageItem}>
              <div className={styles.imageContainer}>
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.details}>
                  <span>
                    <i className="fa fa-map-marker-alt"></i>
                    {pkg.location}
                  </span>
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    {pkg.days} days
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    {pkg.people} Person
                  </span>
                </div>
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <div className={styles.footer}>
                  <div className={styles.rating}>
                    <i className="fa fa-star"></i>
                    {pkg.rating} <small>({pkg.reviews})</small>
                  </div>
                  <div className={styles.price}>${pkg.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;