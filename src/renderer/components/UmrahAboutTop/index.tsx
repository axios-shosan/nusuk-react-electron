import image from '../../../Images/UmrahAboutTop.png';
import waves from '../../../Images/Waves.png';
import styles from './styles.module.css';

function UmrahAboutTop() {
  return (
    <div className={styles.wrapper}>
      <img src={waves} alt="waves" className={styles.wave} />
      <img src={image} alt="" />
    </div>
  );
}

export default UmrahAboutTop;
