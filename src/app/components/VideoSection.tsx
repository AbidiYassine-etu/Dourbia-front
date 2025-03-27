'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from '@/app/VideoDemo.module.css'

const VideoDemoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const videos = [
    { src: '/videos/demo-1.mp4' },
    { src: '/videos/demo-2.mp4' },
    { src: '/videos/demo-3.mp4' },
    { src: '/videos/demo-4.mp4' }
  ]

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  // Get three consecutive videos with wrap-around
  const currentVideos = [
    videos[activeIndex],
    videos[(activeIndex + 1) % videos.length],
    videos[(activeIndex + 2) % videos.length]
  ]

  return (
    <section className={styles.section}>
      <h6 className={styles.subtitle}>Témoignes</h6>
      <h2 className={styles.sectionTitle}>Ce qu'ils pensent de nous</h2>
      
      <div className={styles.carouselContainer}>
        <button className={styles.arrowButton} onClick={handlePrev}>
          <span className={styles.leftArrow}></span>
        </button>

        {currentVideos.map((video, index) => (
          <div key={index} className={styles.phoneFrameWrapper}>
            <Image
              src="/img/iphone-frame.jpg"
              alt="iPhone Frame"
              fill
              className={styles.phoneFrame}
            />
            <div className={styles.videoContainer}>
              <video 
                key={video.src}
                autoPlay
                loop
                muted
                playsInline
                className={styles.demoVideo}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}

        <button className={styles.arrowButton} onClick={handleNext}>
          <span className={styles.rightArrow}></span>
        </button>
      </div>
    </section>
  )
}

export default VideoDemoSection