import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={`${styles.container}`}>
      <div className={styles.navbar}>
        <img
          src="../../../../assets/images/home/home-background.jpg"
          className={`${styles.logo}`}
          alt="logo"
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.homeTitle}>
          Welcome To Nusuk your offical guide tomakkah and madina
        </p>
      </div>
      <div className={styles.footer}>
        <button
          type="submit"
          className={` ${styles.button} ${styles.active}`}
          onClick={() => {
            navigate('/tmp');
          }}
        >
          Hello
        </button>
        <button type="submit" className={styles.button}>
          Hello
        </button>
        <button type="submit" className={styles.button}>
          Hello
        </button>
        <button type="submit" className={styles.button}>
          Hello
        </button>
      </div>
    </div>
  );
}
