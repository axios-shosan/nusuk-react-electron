import Carousel from 'renderer/components/Carousel';
import content from './data';
import styles from './styles.module.css';

function ToMakkah() {
  return (
    <>
      <h1 className={styles.heading}>Getting to Makkah</h1>
      <hr className={styles.divider} />
      <Carousel content={content} />
    </>
  );
}

export default ToMakkah;
