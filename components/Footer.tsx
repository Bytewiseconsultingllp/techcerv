'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="footer-logo">
                <Image src="/images/iwhite.png" alt="Logo" width={180} height={60} />
              </div>

              <div className="footer-social-links">
                <ul>
                  <li>
                    <a href="https://x.com/techcerv">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/techcerv/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://in.linkedin.com/company/techcerv">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-3 col-6">
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

          <div className="col-lg-3 col-md-3 col-6">
            <div className="footer-links">
              <h3>Contact</h3>
              <ul>
                <li><a href="tel:++916364172323">+916364172323</a></li>
                <li><a href="mailto:partner@techcerv.com">partner@techcerv.com</a></li>
                <li>Cowrks, Rmz galleria offices, yelahanka, Bengaluru 560064</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
