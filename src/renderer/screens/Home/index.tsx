import { Link } from 'react-router-dom';
import styles from './style.module.css';

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.textContainer}>
        <p className={styles.homeTitle}>
          Welcome To Nusuk your offical guide tomakkah and madina
        </p>
      </div>
      <div className={styles.footer}>
        <Link to="Umrah & Ziyarah/About">Umrah & ziyarah</Link>
      </div>
    </div>
  );
}
