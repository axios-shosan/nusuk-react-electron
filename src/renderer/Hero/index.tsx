import React from 'react';
import styles from './style.module.css';

type Props = {
  image: string;
};

export default function Hero({ image }: Props) {
  return (
    <>
      <div className={`${styles.container}`}>
        <img src={image} alt="Hero" />
      </div>
      <div className={styles.footer} />
    </>
  );
}
