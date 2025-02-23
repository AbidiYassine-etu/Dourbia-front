import styles from '@/app/Feature.module.css';

const Features = () => {
  const features = [
    {
      title: 'Competitive Pricing',
      text: 'Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea'
    },
    {
      title: 'Best Services',
      text: 'Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea'
    },
    {
      title: 'Worldwide Coverage',
      text: 'Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.featureContent}>
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