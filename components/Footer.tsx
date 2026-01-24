'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Footer Header Start */}
            <div className="footer-header">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <Image src="/images/iwhite.png" alt="Logo" width={180} height={60} />
              </div>
              {/* Footer Logo End */}
              
              {/* Footer Social Links Start */}
              <div className="footer-social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer Social Links End */}
            </div>
            {/* Footer Header End */}
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            {/* Footer Links Start */}
            <div className="footer-links footer-quick-links">
              <h3>Quick link</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/vision">Vision</Link></li>
                <li><Link href="/training">Training</Link></li>
                <li><Link href="/resources">Resources</Link></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>
          
          <div className="col-lg-3 col-md-3 col-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li><a href="#!">Public Cloud</a></li>
                <li><a href="#!">Microsoft 365</a></li>
                <li><a href="#!">Google Workplace</a></li>
                <li><a href="#!">Zoho Workplace</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>
          
          <div className="col-lg-3 col-md-3 col-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <ul>
                <li><a href="#">Managed Services</a></li>
                <li><a href="#">App Development</a></li>
                <li><a href="#!">Contact us</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>
          
          <div className="col-lg-3 col-md-3 col-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Contact</h3>
              <ul>
                <li><a href="tel:+123456789">+123 456 789</a></li>
                <li><a href="mailto:info@domain.com">info@domain.com</a></li>
                <li>Bangalore</li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>
        </div>
      </div>

      {/* Footer Copyright Start */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Footer Copyright Text Start */}
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
              </div>
              {/* Footer Copyright Text End */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Copyright End */}
    </footer>
  );
}
