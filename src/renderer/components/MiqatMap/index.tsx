import image from '../../../Images/plane.png';
import styles from './styles.module.css';

export default function MiqatMap() {
  return (
    <div className={styles.wrapper}>
      <img src={image} className={styles.img} alt="plane_image" />
      <div className={styles.footer}>
        <p className={styles.footerText}>Travelling from:</p>
        <div className={styles.selection}>Algeria</div>
      </div>
    </div>
  );
}
