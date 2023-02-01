import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../Images/elementz-logo.png';
import styles from './styles.module.css';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 5000);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.splashContainer}>
      <img src={Logo} alt="Elementz" className={styles.splashLogo} />
    </div>
  );
}
