import { ScrollCardProps } from 'renderer/components/ScrollCard';
import ScrollCarousel from 'renderer/components/ScrollCarousel';
import content from './data';
import styles from './style.module.css';

function MakkahAccomodation() {
  return (
    <>
      <h1 className={styles.heading}>Accommodation</h1>
      <hr className={styles.divider} />
      <ScrollCarousel elements={content} />
    </>
  );
}

export default MakkahAccomodation;
