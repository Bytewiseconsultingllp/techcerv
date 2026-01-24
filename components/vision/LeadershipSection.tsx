'use client';

import Image from 'next/image';
import styles from './LeadershipSection.module.css';

export default function LeadershipSection() {
  return (
    <section className={styles.leadershipSection}>
      <h1>Meet Our Leadership</h1>
      <p className={styles.subtitle}>Visionary minds driving innovation and success</p>

      {/* Profile */}
      <div className={styles.profileCard}>
        <Image 
          src="https://via.placeholder.com/200x200.png?text=Profile+Photo" 
          alt="Profile Photo"
          width={160}
          height={160}
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <h2>Alex Johnson</h2>
          <h3>Chief Executive Officer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vehicula lacus. Fusce bibendum,
            nisl ut cursus rhoncus, arcu metus dapibus magna, non tempus eros nisl at nisl. Proin porta vel
            lacus ac viverra.
          </p>
          <p>
            Curabitur euismod, lacus a malesuada ultrices, sapien libero egestas nisl, eget sollicitudin justo
            erat id elit. Integer dapibus risus sed odio bibendum, at luctus libero sollicitudin.
          </p>
        </div>
      </div>
    </section>
  );
}
