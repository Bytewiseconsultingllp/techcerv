'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <Link className="navbar-brand" href="/">
                <Image src="/images/ih1.png" alt="Logo" width={180} height={60} priority />
              </Link>
              {/* Logo End */}

              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <Link className="nav-link" href="/vision">Vision</Link>
                    </li>
                    
                    {/* Mobile Response Start */}
                    <li className="nav-item submenu matin">
                      <a className="nav-link" href="#">Services</a>
                      <ul>
                        <li className="nav-item submenu">
                          <a className="nav-link" href="#!">Public Cloud</a>
                          <ul>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Licensing & Cloud Consultation</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Cloud Finops</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Cloud Security</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Serverless & Containerization</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Workflow Automation</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Migrations & Managed Services</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item submenu">
                          <a className="nav-link" href="#!">Digital Workspace</a>
                          <ul>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Microsoft 365</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Copilot</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Security</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Endpoint Management</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Google Workspace</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Zoho Workplace</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item submenu">
                          <a className="nav-link" href="#!">AI</a>
                          <ul>
                            <li className="nav-item">
                              <a className="nav-link" href="#!"> </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item submenu">
                          <a className="nav-link" href="#!">Managed Services</a>
                          <ul>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Resource Augmentation</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Cloud & DevOps</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Workplace Collab</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item submenu">
                          <a className="nav-link" href="#!">App Development</a>
                          <ul>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">Website Development</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">App Development for Cloud Platform</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* Mobile Response End */}
                    
                    {/* Desktop Menu Start */}
                    <li className="nav-item submenu mex">
                      <a className="nav-link" href="#">Services</a>
                      <ul className="d-flex justify-content-evenly">
                        <div className="sub" style={{color: '#fff'}}>
                          <h5 className="pl" style={{padding: '30px 0 20px 20px'}}>Public Cloud</h5>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Licensing & Cloud Consultation</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Cloud Finops</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Cloud Security</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Serverless & Containerization</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Workflow Automation</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Migrations & Managed Services</a>
                          </li>
                        </div>

                        <div className="subd"></div>
                        
                        <div className="sub">
                          <h5 className="pl" style={{padding: '30px 0 20px 20px'}}>Digital Workspace</h5>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Microsoft 365</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Copilot</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Security</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Endpoint Management</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Google Workspace</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Zoho Workplace</a>
                          </li>
                        </div>
                        
                        <div className="subd"></div>
                        
                        <div className="sub">
                          <h5 className="pl" style={{padding: '30px 0 20px 20px'}}>AI</h5>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">AI Readiness Assessment</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">AI Adoption</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Agentic AI</a>
                          </li>
                        </div>
                        
                        <div className="subd"></div>
                        
                        <div className="sub">
                          <h5 className="pl" style={{padding: '30px 0 20px 20px'}}>Managed Services</h5>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Resource Augmentation</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">AIOps,Cloud & DevOps</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">Workplace Collab</a>
                          </li>
                        </div>
                        
                        <div className="subd"></div>
                        
                        <div className="sub">
                          <h5 className="pl" style={{padding: '30px 0 20px 20px'}}>App Development</h5>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">WebApp Design & Development</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">App Modernization & Deployment</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    {/* Desktop Menu End */}

                    {/* Mobile Response Start */}
                    <li className="nav-item submenu matin">
                      <a className="nav-link" href="#!">Resources</a>
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link" href="#!">Service Details</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#!">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    {/* Mobile Response End */}
                    
                    <li className="nav-item mex">
                      <Link className="nav-link" href="/resources">Resources</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" href="/training">Training</Link>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#!">Contact Us</a>
                    </li>
                  </ul>
                </div>

                {/* Header Btn Start */}
                <div className="header-btn">
                  <a href="#!" className="btn-default">get started</a>
                </div>
                {/* Header Btn End */}
              </div>
              {/* Main Menu End */}

              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .matin {
            display: flex;
          }
          .mex {
            display: none !important;
          }
        }
        @media (min-width: 768px) {
          .matin {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
