import FadeInSection from '../FadeInSection';
import classes from './style.module.css';

type Props = {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
};

export default function MakkahInto({
  title,
  text,
  imgSrc = null,
  imgAlt = '',
}: Props) {
  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
      <hr className={classes.divider} />
      {imgSrc ? (
        <img src={imgSrc} alt={imgAlt} className={classes.image} />
      ) : null}

      <div className={classes.container}>
        {text.map((paragraph, id) => (
          <FadeInSection>
            <p className={classes.text} key={id}>
              {paragraph}
            </p>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}
