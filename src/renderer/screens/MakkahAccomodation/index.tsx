import React from 'react';
import Carousel from 'renderer/components/Carousel';
import styles from './style.module.css';

function MakkahAccomodation() {
  const content = [<h1>testin</h1>];
  return (
    <>
      <h1 className={styles.heading}>Accomodation</h1>
      <hr className={styles.divider} />
      <Carousel content={content} />
    </>
  );
}

export default MakkahAccomodation;
