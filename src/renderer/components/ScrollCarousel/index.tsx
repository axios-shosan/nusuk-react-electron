import ScrollCard, { ScrollCardProps } from '../ScrollCard';
import styles from './style.module.css';

function ScrollCarousel({ elements }: { elements: ScrollCardProps[] }) {
  return (
    <div className={styles.wrapper}>
      {elements.map((element) => (
        <ScrollCard
          image={element.image}
          title={element.title}
          description={element.description}
          target={element.target}
        />
      ))}
    </div>
  );
}

export default ScrollCarousel;
