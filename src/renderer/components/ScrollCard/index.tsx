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
      <img src={image} alt="" />
      <div className={styles.info_wrapper}>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={target}>Book now</a>
      </div>
    </div>
  );
}

export default ScrollCard;
