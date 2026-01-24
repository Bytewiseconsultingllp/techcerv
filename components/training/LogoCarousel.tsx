'use client';

import Image from 'next/image';
import styles from './LogoCarousel.module.css';

export default function LogoCarousel() {
  const logos = [
    { src: '/images/awf.jpg', alt: 'AWS' },
    { src: '/images/micr.jpg', alt: 'Microsoft' },
    { src: '/images/tec.jpg', alt: 'Tech' },
    { src: '/images/ren.jpg', alt: 'Partner' },
    { src: '/images/hir.jpg', alt: 'Partner' },
    { src: '/images/google.png', alt: 'Google' },
    { src: '/images/fin.png', alt: 'Partner' },
  ];

  return (
    <div className="our-security" style={{ marginLeft: '3%', marginRight: '3%', padding: '0 15px' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-security-content">
              <div className={styles.logos}>
                <div className={styles.logosSlide}>
                  {/* First set of logos */}
                  {logos.map((logo, index) => (
                    <Image
                      key={`logo-${index}`}
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={80}
                      style={{ objectFit: 'contain' }}
                    />
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {logos.map((logo, index) => (
                    <Image
                      key={`logo-duplicate-${index}`}
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={80}
                      style={{ objectFit: 'contain' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
