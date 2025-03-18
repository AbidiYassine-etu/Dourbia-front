import styles from '@/app/Feature.module.css';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      title: 'Competitive Pricing',
      text: 'Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea',
      icon: '/img/feature-1.png'
    },
    {
      title: 'Best Services', 
      text: 'Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea',
      icon: '/img/feature-2.png'
    },
    {
      title: 'Worldwide Coverage',
      text: 'Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea',
      icon: '/img/feature-3.png'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.featureContent}>
                <div className={styles.iconContainer}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}  // Set appropriate size
                    height={80}
                    className={styles.featureIcon}
                  />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;