import { Link } from 'react-router-dom';
import Header from 'renderer/components/Header';
import styles from './style.module.css';

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <Header />
      <div className={styles.textContainer}>
        <p className={styles.homeTitle}>
          Welcome To Nusuk your offical guide to makkah and madina
        </p>
      </div>
      <div className={styles.footer}>
        <Link to="Umrah & Ziyarah">Umrah & ziyarah</Link>
      </div>
    </div>
  );
}
