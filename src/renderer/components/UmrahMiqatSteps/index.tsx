import MiqatStep from '../MiqatStep';
import styles from './styles.module.css';

const text =
  'Ihram is an important aspect of the Hajj and Umrah pilgrimage for Muslims. It is a state of ritual purity that is entered into before the pilgrimage begins. ';
function UmrahMiqatSteps() {
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.header}>Steps to follow:</h2>
      <hr className={styles.divider} />
      <div className={styles.steps}>
        <MiqatStep num={1} content={text} />
        <MiqatStep num={2} content={text} />
        <MiqatStep num={3} content={text} />
        <MiqatStep num={4} content={text} />
        <MiqatStep num={5} content={text} />
        <MiqatStep num={6} content={text} />
        <MiqatStep num={7} content={text} />
        <MiqatStep num={8} content={text} />
      </div>
    </div>
  );
}

export default UmrahMiqatSteps;
