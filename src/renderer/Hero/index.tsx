import React from 'react';
import styles from './style.module.css';

type Props = {
  image: string;
};

export default function Hero({ image }: Props) {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.textContainer}>
        <p className={styles.homeTitle}>
          Welcome To Nusuk your offical guide to makkah and madina
        </p>
      </div>
    </div>
  );
}
