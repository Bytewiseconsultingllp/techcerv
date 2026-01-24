'use client';

import Image from 'next/image';
import styles from './PartnerNetwork.module.css';

export default function PartnerNetwork() {
  const partners = [
    { src: '/images/awf.jpg', alt: 'AWS' },
    { src: '/images/micr.jpg', alt: 'Microsoft' },
    { src: '/images/tec.jpg', alt: 'Tech Partner' },
    { src: '/images/ren.jpg', alt: 'Redington' },
    { src: '/images/hir.jpg', alt: 'Partner' },
    { src: '/images/google.png', alt: 'Google Cloud' },
    { src: '/images/fin.png', alt: 'Partner' }
  ];

  // Double the partners array for infinite scroll effect
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="container" style={{ paddingBottom: '60px' }}>
      <div className={styles.partnerHeader}>
        <Image 
          src="/images/ih1.png" 
          alt="Logo" 
          width={180} 
          height={60}
          className={styles.logo}
        />
        <div className={styles.divider}></div>
        <h2>Partner Network</h2>
      </div>

      <div className={styles.partnerWrapper}>
        <div className={styles.partnerTrack}>
          {doubledPartners.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <Image 
                src={partner.src} 
                alt={partner.alt}
                width={160}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
