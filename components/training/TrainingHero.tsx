'use client';

import Image from 'next/image';

export default function TrainingHero() {
  return (
    <div style={{ backgroundColor: 'rgba(246, 246, 246, 0.97)' }}>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="pt-4">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <div className="section-title dark-section">
                        <h2 
                          className="wow fadeInUp" 
                          data-wow-delay="0.2s" 
                          data-cursor="-opaque" 
                          style={{ color: '#000' }}
                        >
                          Master High-Demand Skills for Future Careers
                        </h2>
                        <p 
                          className="wow fadeInUp" 
                          data-wow-delay="0.4s" 
                          style={{ textAlign: 'center', color: 'black' }}
                        >
                          Experience learning that drives real results. We&apos;re revolutionizing how
                          you master new-age technologies, getting you job-ready faster than ever.
                        </p>
                      </div>
                      <div className="hero-content-body wow fadeInUp" data-wow-delay="0.6s">
                        <div 
                          className="hero-btn" 
                          style={{ 
                            border: '2px solid #36B6FE', 
                            borderRadius: '30px',
                            display: 'inline-block'
                          }}
                        >
                          <a href="#courses" className="btn-default btn-highlighted">
                            Explore our Courses
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <Image 
                      src="/images/ccc.png" 
                      alt="Training Hero" 
                      width={600} 
                      height={400}
                      style={{ width: '100%', height: 'auto' }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-pagination"></div>
      </div>
    </div>
  );
}
