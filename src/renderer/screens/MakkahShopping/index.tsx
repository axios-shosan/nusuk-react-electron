import ScrollCarousel from 'renderer/components/ScrollCarousel';
import content from './data';
import styles from './style.module.css';

export default function MakkahShopping() {
  return (
    <>
      <h1 className={styles.heading}>Shopping</h1>
      <hr className={styles.divider} />
      <ScrollCarousel elements={content} />
    </>
  );
}
