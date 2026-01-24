'use client';

import styles from './PageHeader.module.css';

export default function PageHeader() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1 style={{ color: 'white' }}>About Us</h1>
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" style={{ color: '#fff' }}>Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>
    </>
  );
}
