import styles from './style.module.css';
import waves from '../../../../assets/images/Waves.png';
import wavesBg from '../../../../assets/images/hero-wave-dark.png';

type Props = {
  image: string;
  animation: 'expand' | 'mask';
};

export default function Hero({ image, animation = 'mask' }: Props) {
  return (
    <div className={`${styles.container}`}>
      <img src={wavesBg} alt="Waves Bg" className={styles.wavesBg} />
      {animation === 'expand' ? (
        <div className={`${styles.waves} ${styles.expandedWaves}`} />
      ) : (
        <img
          src={waves}
          alt="Waves"
          className={`${styles.waves} ${styles.maskedWaves}`}
        />
      )}

      <img src={image} alt="Hero" />
    </div>
  );
}
