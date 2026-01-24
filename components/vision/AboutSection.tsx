'use client';

import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutLeft}>
        <h2>About Techcerv</h2>
        <p style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec magna vel nisl sagittis dignissim.
          Donec feugiat, ipsum at congue bibendum, purus neque facilisis magna, sit amet rutrum elit lacus ut justo.
          Sed ullamcorper, nisl sed laoreet varius, erat sapien fermentum ligula, at laoreet justo sapien in sapien.
          Curabitur vestibulum, est vel volutpat dictum, urna eros lobortis nibh, ac condimentum magna urna vel metus.
        </p>
      </div>
    </section>
  );
}
