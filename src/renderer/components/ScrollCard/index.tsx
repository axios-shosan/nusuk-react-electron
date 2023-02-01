import { useState } from 'react';
import CardModal from '../CardModal';
import styles from './style.module.css';

export type ScrollCardProps = {
  image: string;
  title: string;
  description: string;
  target: string;
};
function ScrollCard({ image, title, description, target }: ScrollCardProps) {
  const [open, setOpen] = useState(false);
  function closeModel() {
    setOpen(false);
  }
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={image} alt="" />
      </div>
      <div className={styles.info_wrapper}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {open && (
        <CardModal
          open={open}
          setOpen={setOpen}
          image={image}
          title={title}
          description={description}
          handleClose={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default ScrollCard;
