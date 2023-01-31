import Carousel from 'renderer/components/Carousel';
import content from './data';
import styles from './styles.module.css';

function ToMadina() {
  return (
    <>
      <h1 className={styles.heading}>Getting to Madina</h1>
      <hr className={styles.divider} />
      <Carousel content={content} />
    </>
  );
}

export default ToMadina;
