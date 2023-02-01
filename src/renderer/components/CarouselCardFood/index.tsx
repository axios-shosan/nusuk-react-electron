import React from 'react';
import classes from './styles.module.css';
import Button from '../Button';

export type CarouselCardProps = {
  image: string;
  title: string;
  description: string;
  target: string;
};

export default function CarouselCardFood({
  image,
  title,
  description,
  target,
}: CarouselCardProps) {
  return (
    <div className={classes.wrapper}>
      <img src={image} className={classes.img} alt="Food" />
      <div className={classes.info}>
        <h1 className={classes.temp_1}>{title}</h1>
        <p className={classes.temp_p}>{description}</p>
        <Button active extraClasses={`${classes.btn}`}>
          Discover
        </Button>
      </div>
    </div>
  );
}
