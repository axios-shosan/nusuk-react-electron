import image from '../../../Images/UmrahAboutBot.png';
import wave from '../../../Images/Waves.png';
import Button from '../Button';
import styles from './styles.module.css';

function UmrahAboutBot() {
  return (
    <div className={styles.wrapper}>
      <img src={wave} alt="" className={styles.wave} />
      <img src={image} alt="" className={styles.image} />
      <Button>Home</Button>
    </div>
  );
}

export default UmrahAboutBot;
