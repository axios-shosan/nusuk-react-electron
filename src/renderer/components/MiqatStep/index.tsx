import styles from './styles.module.css';

function MiqatStep({ num, content }: { num: number; content: string }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.num}>{num}</p>
      <p>{content}</p>
    </div>
  );
}

export default MiqatStep;
