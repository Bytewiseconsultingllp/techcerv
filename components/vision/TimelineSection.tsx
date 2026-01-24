'use client';

import { useEffect } from 'react';
import styles from './TimelineSection.module.css';

export default function TimelineSection() {
  useEffect(() => {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    const cardWidth = 320 + 24; // card width + gap

    const handleWheel = (e: WheelEvent) => {
      const rect = timeline.getBoundingClientRect();

      // Check if timeline is visible in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Scroll timeline horizontally
        const direction = e.deltaY > 0 ? 1 : -1;
        timeline.scrollBy({
          left: direction * cardWidth,
          behavior: 'smooth'
        });

        // Only prevent vertical scroll if timeline can scroll further
        if ((direction > 0 && timeline.scrollLeft + timeline.clientWidth < timeline.scrollWidth) ||
            (direction < 0 && timeline.scrollLeft > 0)) {
          e.preventDefault(); // stop page scroll only if timeline can move
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const milestones = [
    {
      year: '2015',
      icon: 'fas fa-rocket',
      title: 'First Product Launch',
      description: 'Released our flagship product that quickly gained traction in the market and established our brand.'
    },
    {
      year: '2017',
      icon: 'fas fa-dollar-sign',
      title: 'Series A Funding',
      description: 'Secured $10M in funding to strategically expand our team and accelerate innovative product development.'
    },
    {
      year: '2018',
      icon: 'fas fa-globe',
      title: 'Global Expansion',
      description: 'Opened offices in 2 new countries and expanded our customer base to over 60 countries worldwide.'
    },
    {
      year: '2020',
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Release',
      description: 'Launched our mobile app to provide seamless user experience on-the-go for millions of customers.'
    },
    {
      year: '2022',
      icon: 'fas fa-brain',
      title: 'AI Integration',
      description: 'Integrated AI to personalize recommendations and improve customer satisfaction and engagement.'
    }
  ];

  return (
    <section className={styles.timelineWrapper}>
      <h2>Our Journey</h2>
      <p className={styles.sub}>Use the arrows to explore our milestones and achievements over the years</p>

      <div className={styles.timelineContainer} aria-label="Company journey timeline">
        <div className={styles.timelineLine}></div>

        <div className={styles.timeline} role="list" id="timeline">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year} 
              className={styles.card} 
              role="listitem" 
              tabIndex={0}
            >
              <div className={styles.yearPill}>{milestone.year}</div>
              <h3>
                <i className={milestone.icon}></i> {milestone.title}
              </h3>
              <p>{milestone.description}</p>
              <button 
                className={styles.learnBtn} 
                aria-label={`Learn more about ${milestone.title}`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
