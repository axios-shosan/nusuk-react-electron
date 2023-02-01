import React from 'react';
import classes from './styles.module.css';

export type CarouselCardProps = {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  target: string;
};

export default function CarouselCard({
  image,
  subtitle,
  title,
  description,
  target,
}: CarouselCardProps) {
  return (
    <div className={classes.temp_wrapper}>
      <img src={image} className={classes.img} alt="temp" />
      <div>
        <h2 className={classes.temp_2}>{subtitle}</h2>
        <h1 className={classes.temp_1}>{title}</h1>
        <p className={classes.temp_p}>{description}</p>
      </div>
    </div>
  );
}
