'use client';

import styles from './CulturalValues.module.css';

export default function CulturalValues() {
  const values = [
    { icon: 'fas fa-bullseye', title: 'Objective Driven' },
    { icon: 'fas fa-handshake', title: 'Humble Human' },
    { icon: 'fas fa-lightbulb', title: 'Be Curious' },
    { icon: 'fas fa-check-circle', title: 'Committed' },
    { icon: 'fas fa-tasks', title: 'Responsible' }
  ];

  return (
    <section className={styles.valuesSection}>
      <h2>Our Cultural Values</h2>

      <div className={styles.gridWrapper}>
        {/* First row - 3 cards */}
        <div className={styles.row}>
          {values.slice(0, 3).map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <i className={value.icon}></i>
              </div>
              <h3>{value.title}</h3>
            </div>
          ))}
        </div>

        {/* Second row - 2 centered cards */}
        <div className={`${styles.row} ${styles.secondRow}`}>
          {values.slice(3).map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <i className={value.icon}></i>
              </div>
              <h3>{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
