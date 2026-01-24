'use client';

import Image from 'next/image';
import styles from './ResourceCards.module.css';

interface ResourceCardData {
  badge: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function ResourceCards() {
  const resources: ResourceCardData[] = [
    {
      badge: 'Blog',
      image: '/images/Work-Life-Balance.png',
      title: 'Work-Life Balance career and personal life.',
      description: 'Practical strategies to maintain productivity while keeping a healthy balance between your career and personal life.',
      link: '/resources/details'
    },
    {
      badge: 'Case Study',
      image: '/images/Middleware-QSRs.png',
      title: 'Why Middleware for QSRs Should Be Infrastructure-Free',
      description: 'Discover how modern infrastructure-free middleware solutions can empower quick service restaurants (QSRs).',
      link: '/resources/details'
    },
    {
      badge: 'Insight',
      image: '/images/Data-Engineering-Healthcare.png',
      title: 'How Data Engineering Shapes Modern Healthcare Research',
      description: 'A deep dive into how data pipelines and engineering are revolutionizing healthcare and medical research.',
      link: '/resources/details'
    }
  ];

  return (
    <div className={styles.resourcesSection}>
      <div className={styles.cardContainer}>
        {resources.map((resource, index) => (
          <div key={index} className={styles.resourceCard}>
            <div className={styles.thumbWrapper}>
              <span className={styles.badge}>{resource.badge}</span>
              <Image 
                className={styles.thumb}
                src={resource.image} 
                alt={resource.title}
                width={400}
                height={210}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.resourceContent}>
              <div className={styles.resourceMeta}></div>
              <div className={styles.resourceTitle}>{resource.title}</div>
              <p className={styles.resourceDesc}>{resource.description}</p>
              <a href={resource.link} className={styles.readMore}>Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
