import React from 'react';
import styles from './style.module.css';
import logonusuk from '../../Images/logonusuk.png';
import { useNavigate } from 'react-router-dom';
export default function TopBar() {
  const navigate = useNavigate();
  return (
    <div className={styles.Bar}>
      <img src={logonusuk} alt="" />
      <div className={styles.TitleDiv}>
        <h1>Umrah & Ziyarah</h1>
        <p>
          All you need to know about Rituals to perform in Umrah and Ziarah Al
          Masjid An Nawabi
        </p>
      </div>
      <button
        type="submit"
        className={styles.HomeBtn}
        onClick={() => {
          navigate('/tmp');
        }}
      >
        <p>Home</p>
      </button>
    </div>
  );
}
