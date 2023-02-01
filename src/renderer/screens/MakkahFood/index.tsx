import CarouselFood from 'renderer/components/CarouselFood';
import styles from './styles.module.css';
import content from './data';

function MakkahFood() {
  return (
    <>
      <h1 className={styles.heading}>Food & Drink</h1>
      <hr className={styles.divider} />
      <CarouselFood content={content} />
    </>
  );
}

export default MakkahFood;
