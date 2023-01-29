import image from '../../../Images/plane.png';
import styles from './styles.module.css';

function UmrahMiqatPlane() {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="plane_image" />
      <p>Travelling from:</p>
      <div className={styles.selection}>Algeria</div>
    </div>
  );
}

export default UmrahMiqatPlane;
