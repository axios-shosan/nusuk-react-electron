import ScrollCarousel from 'renderer/components/ScrollCarousel';
import content from './data';
import styles from './styles.module.css';

export default function MakkahHolySite() {
  return (
    <>
      <h1 className={styles.heading}>Holy Site</h1>
      <hr className={styles.divider} />
      <ScrollCarousel elements={content} />
    </>
  );
}
