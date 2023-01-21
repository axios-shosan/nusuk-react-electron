import { useNavigate } from 'react-router-dom';
import Button from 'renderer/components/Button';
import styles from './style.module.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={`${styles.container}`}>
      <div className={styles.textContainer}>
        <p className={styles.homeTitle}>
          Welcome To Nusuk your offical guide to makkah and madina
        </p>
      </div>
      <div className={styles.footer}>
        <div className={`${styles.buttonsRow}`}>
          <Button
            active
            type="submit"
            onClick={() => {
              navigate('/tmp');
            }}
          >
            About Nusuk
          </Button>
          <Button>Umrah & Ziyarah</Button>
          <Button>Makkah</Button>
          <Button>Madina</Button>
          <Button>Packages & Offers</Button>
        </div>
      </div>
    </div>
  );
}
