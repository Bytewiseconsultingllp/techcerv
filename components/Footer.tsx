'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer" style={{ padding: '30px 0 0', overflow: 'hidden' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="footer-logo mb-3">
              <Image src="/images/iwhite.png" alt="Logo" width={150} height={50} style={{ width: 'auto', height: 'auto' }} />
            </div>

            <div className="footer-social-links mb-4 mb-lg-0">
              <ul style={{ display: 'flex', gap: '10px', padding: 0 }}>
                <li>
                  <a href="https://x.com/Techcerv" style={{ width: '30px', height: '30px', fontSize: '14px' }}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Techcerv/" style={{ width: '30px', height: '30px', fontSize: '14px' }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/Techcerv" style={{ width: '30px', height: '30px', fontSize: '14px' }}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-lg-2 col-md-3 col-6">
            <div className="footer-links footer-quick-links">
              <h3>Quick link</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/vision">Vision</Link></li>
                <li><Link href="/training">Training</Link></li>
                <li><Link href="/resources">Resources</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li><a href="#!">Public Cloud</a></li>
                <li><a href="#!">Microsoft 365</a></li>
                <li><a href="#!">Google Workplace</a></li>
                <li><a href="#!">Zoho Workplace</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links">
              <ul>
                <li><a href="#">Managed Services</a></li>
                <li><a href="#">App Development</a></li>
                <li><a href="#!">Contact us</a></li>
              </ul>
            </div>
          </div> */}

          <div className="col-lg-4 col-md-12 ms-auto text-lg-end text-start">
            <div className="footer-links">
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Contact</h3>
              <ul style={{ fontSize: '14px' }}>
                <li><a href="tel:++916364172323">+91 63641 72323</a></li>
                <li><a href="mailto:partner@Techcerv.com">partner@Techcerv.com</a></li>
                <li>Cowrks, Rmz galleria offices, yelahanka, Bengaluru 560064</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright" style={{ marginTop: '20px', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-copyright-text">
                <p style={{ fontSize: '13px' }}>Copyright © 2025 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
