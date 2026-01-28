'use client';

import Image from 'next/image';

export default function PartnersSection() {
  const partners = [
    { src: '/images/awf.jpg', alt: 'AWS' },
    { src: '/images/micr.jpg', alt: 'Microsoft' },
    { src: '/images/tec.jpg', alt: 'Tech Partner' },
    { src: '/images/ren.jpg', alt: 'Ren' },
    { src: '/images/hir.jpg', alt: 'Hir' },
    { src: '/images/google.png', alt: 'Google' },
    { src: '/images/fin.png', alt: 'Fin' },
  ];

  return (
    <div className="our-security">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Our Security Content Start */}
            <div className="our-security-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Our partners</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  Partnering with World&apos;s Leading Governing Bodies
                </h2>
              </div>

              <div className="logos">
                <div className="logos-slide">
                  {/* First set of logos */}
                  {partners.map((partner, index) => (
                    <Image
                      key={`partner-${index}`}
                      src={partner.src}
                      alt={partner.alt}
                      width={150}
                      height={50}
                      style={{ height: '50px', width: 'auto', margin: '0 40px' }}
                    />
                  ))}
                  {/* Duplicate for seamless loop */}
                  {partners.map((partner, index) => (
                    <Image
                      key={`partner-dup-${index}`}
                      src={partner.src}
                      alt={partner.alt}
                      width={150}
                      height={50}
                      style={{ height: '50px', width: 'auto', margin: '0 40px' }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Our Security Content End */}
          </div>
        </div>
      </div>
    </div>
  );
}
