import React from 'react';
import classes from './style.module.css';
import cardImg from '../../../../assets/images/makkah/image-card.png';

type Props = {};

export default function MakkahMain({}: Props) {
  return (
    <main className={classes.container}>
      <h1 className={classes.header}>Holy Site</h1>
      <p className={classes.content}>
        Mecca, also known as Makkah in Arabic, is the holiest city in Islam and
        the spiritual center of the Islamic faith. It is the birthplace of the
        Prophet Muhammad and the location of the Kaaba, the holiest site in
        Islam. Muslims around the world face the Kaaba during their daily
        prayers, and it is the destination of the annual Islamic pilgrimage,
        known as the Hajj. <br />
        The city of Mecca has a long history of significance for Muslims, dating
        back to the time of the Prophet Abraham, who is considered to be the
        father of the monotheistic religions, and it is believed that the Kaaba
        was originally built by him as a house of worship for God. <br />
        One of the Five Pillars of Islam is the pilgrimage to Mecca, known as
        the Hajj, which is required of all able-bodied Muslims at least once in
        their lifetime. The Hajj is a time of spiritual renewal and
        purification, and it is an opportunity for Muslims from all over the
        world to come together in a shared expression of their faith.
      </p>
      <h1 className={classes.title}>Landmarks</h1>
      <div className={classes.card}>
        <img src={cardImg} alt="Raffles" />
        <div className={classes.cardContent}>
          <h1 className={classes.cardTitle}>Raffles</h1>
          <p className={classes.cardText}>
            Raffles Mecca is a luxury hotel located in Mecca, Saudi Arabia. It
            is part of the Raffles Hotels & Resorts chain.
          </p>
        </div>
        <hr className={classes.divider} />
        <div className={classes.cardFooter}>
          <p>Read More</p>
        </div>
      </div>
    </main>
  );
}
