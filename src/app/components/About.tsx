import Image from 'next/image';
import styles from '@/app/Aboout.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>

          <div className={styles.contentColumn}>
            <div className={styles.contentBox}>
              <h6 className={styles.subtitle}>About Us</h6>
              <h1 className={styles.title}>We Provide Best Tour Packages In Your Budget</h1>
              <p className={styles.description}>
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. 
                Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
              </p>

              <div className={styles.galleryRow}>
                <div className={styles.galleryItem}>
                  <Image
                    src="/img/about-1.jpg"
                    alt="Tour package"
                    width={400}
                    height={300}
                    className={styles.galleryImage}
                  />
                </div>
                <div className={styles.galleryItem}>
                  <Image
                    src="/img/about-2.jpg"
                    alt="Tour experience"
                    width={400}
                    height={300}
                    className={styles.galleryImage}
                  />
                </div>
              </div>

              <button className={styles.ctaButton}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;