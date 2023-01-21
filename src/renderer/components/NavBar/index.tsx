import logoSrc from '../../../../assets/logo.svg';
import styles from './style.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img src={logoSrc} className={`${styles.logo}`} alt="logo" />
    </nav>
  );
}
