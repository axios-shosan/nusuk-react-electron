import UmrahMiqatPlane from '../UmrahMiqatPlane';
import UmrahMiqatSteps from '../UmrahMiqatSteps';
import styles from './styles.module.css';

function UmrahMiqatMain() {
  return (
    <div className={styles.wrapper}>
      <div>
        <UmrahMiqatPlane />
        <h1>Miqat</h1>
        <h2>Al-Juhfah</h2>
        <p>
          Ihram is an important aspect of the Hajj and Umrah pilgrimage for
          Muslims. It is a state of ritual purity that is entered into before
          the pilgrimage begins.{' '}
        </p>
      </div>
      <UmrahMiqatSteps />
    </div>
  );
}

export default UmrahMiqatMain;
