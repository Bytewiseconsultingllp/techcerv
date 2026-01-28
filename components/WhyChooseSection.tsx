'use client';

import Image from 'next/image';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

const CounterItem = ({ end, label, icon, iconAlt }: { end: number, label: string, icon: string, iconAlt: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% visible
  });

  return (
    <div className="why-choose-counter-item" ref={ref}>
      <div className="icon-box">
        <Image
          src={icon}
          alt={iconAlt}
          width={60}
          height={60}
        />
      </div>
      <div className="why-choose-counter-content">
        <h3>
          <span className="tech-counter">
            {inView ? <CountUp end={end} duration={2.5} /> : 0}
          </span>+
        </h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default function WhyChooseSection() {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          {/* TEXT FIRST ON MOBILE (HEADINGS ONLY) */}
          <div className="col-12 d-block d-lg-none order-1">
            <div className="section-title dark-section text-center mb-4">
              <h3 className="wow fadeInUp">why choose us</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                Unlock innovation with the AI and Cloud solutions
              </h2>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="col-lg-6 order-2 order-lg-1 mb-4">
            {/* Image */}
            <div className="why-choose-image">
              <figure className="image-anime reveal">
                <Image
                  src="/images/our-security-image.png"
                  alt="Security"
                  width={600}
                  height={600}
                />
              </figure>
            </div>

            {/* 1st Feature */}
            <div className="why-choose-item wow fadeInUp" data-wow-delay="0.8s">
              <div className="security-list-item" style={{ width: '100%' }}>
                <h3>Innovation & Future-Ready Approach</h3>
                <p>Stay ahead with cutting-edge cloud technologies, AI-driven insights, and customized digital transformation strategies.</p>
              </div>
            </div>
          </div>

          {/* TEXT COLUMN WITH HEADINGS + FEATURES FOR DESKTOP */}
          <div className="col-lg-6 order-3 order-lg-2">
            <div className="why-choose-content">
              {/* Show headings only on desktop */}
              <div className="section-title dark-section d-none d-lg-block">
                <h3 className="wow fadeInUp">why choose us</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  Unlock innovation with the AI and Cloud solutions
                </h2>
              </div>

              {/* Feature List */}
              <div className="why-choose-list">
                {/* Feature 2 */}
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="security-list-item" style={{ width: '100%' }}>
                    <h3>Expert Cloud Solutions</h3>
                    <p>Leverage our expertise to implement secure, scalable, and cost-effective cloud services tailored to your business needs.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="security-list-item" style={{ width: '100%' }}>
                    <h3>Seamless Integration & Optimization</h3>
                    <p>We ensure smooth cloud adoption with optimized performance, licensing, and cost management for maximum efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COUNTER SECTION */}
          <div className="col-lg-12 order-4">
            <div className="why-choose-counter-list">
              <CounterItem
                end={20}
                label="Years Experience"
                icon="/images/icon-why-choose-counter-1.svg"
                iconAlt="Experience"
              />
              <CounterItem
                end={32}
                label="project complete"
                icon="/images/icon-why-choose-counter-2.svg"
                iconAlt="Projects"
              />
              <CounterItem
                end={70}
                label="happy customer"
                icon="/images/icon-why-choose-counter-3.svg"
                iconAlt="Customers"
              />
              <CounterItem
                end={5}
                label="winning awards"
                icon="/images/icon-why-choose-counter-4.svg"
                iconAlt="Awards"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
