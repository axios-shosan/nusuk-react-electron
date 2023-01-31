import styles from './style.module.css';

export type ScrollCardProps = {
  image: string;
  title: string;
  description: string;
  target: string;
};
function ScrollCard({ image, title, description, target }: ScrollCardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={image} alt="" />
      </div>
      <div className={styles.info_wrapper}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ScrollCard;
