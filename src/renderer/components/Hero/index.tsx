import React from 'react';
import styles from './style.module.css';
import waves from '../../../../assets/images/Waves.png';

type Props = {
  image: string;
};

export default function Hero({ image }: Props) {
  return (
    <div className={`${styles.container}`}>
      <img src={image} alt="Hero" />
      <img src={waves} alt="Waves" className={styles.footer} />
    </div>
  );
}
