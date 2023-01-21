import { useNavigate } from 'react-router-dom';
import Button from 'renderer/components/Button';
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
        <Button
          active
          type="submit"
          onClick={() => {
            navigate('/tmp');
          }}
        >
          Hello
        </Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </div>
    </div>
  );
}
