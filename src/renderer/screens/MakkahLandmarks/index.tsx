import ScrollCarousel from 'renderer/components/ScrollCarousel';
import content from './data';
import styles from './style.module.css';

export default function MakkahLandmarks() {
  return (
    <>
      <h1 className={styles.heading}>Landmarks</h1>
      <hr className={styles.divider} />
      <ScrollCarousel elements={content} />
    </>
  );
}
