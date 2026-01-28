'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactModal from './ContactModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="hero hero-slider-layout">
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Hero Slide Start */}
            <div className="swiper-slide">
              <div className="hero-slide">
                {/* Slider Image Start */}
                <div className="hero-slider-image">
                  <Image
                    src="/images/cloud-it-infrastructure-services_d.jpg"
                    alt="Hero Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                {/* Slider Image End */}

                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-10 m-auto">
                      {/* Hero Content Start */}
                      <div className="hero-content">
                        {/* Section Title Start */}
                        <div className="section-title dark-section">
                          <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                            Empowering Your Business with AI, Cloud & Digital Transformation
                          </h2>
                          <p className="wow fadeInUp" data-wow-delay="0.4s" style={{ textAlign: 'center' }}>
                            Maximize the value of your cloud investment by driving digital engagement and
                            delivering exceptional experiences that set your business apart. Foster innovation,
                            enhance customer interactions, and accelerate growth with cutting-edge cloud solutions.
                          </p>
                        </div>
                        {/* Section Title End */}

                        {/* Hero Content Body Start */}
                        <div className="hero-content-body wow fadeInUp" data-wow-delay="0.6s">
                          {/* Hero Button Start */}
                          <div className="hero-btn">
                            <a
                              href="#!"
                              onClick={(e) => {
                                e.preventDefault();
                                setIsModalOpen(true);
                              }}
                              className="btn-default btn-highlighted"
                            >
                              Talk to us
                            </a>
                          </div>
                          {/* Hero Button End */}
                        </div>
                        {/* Hero Content Body End */}
                      </div>
                      {/* Hero Content End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Slide End */}
          </div>
          <div className="hero-pagination"></div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
