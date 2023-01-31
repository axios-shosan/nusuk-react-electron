import React from 'react';
import UmrahMiqatSteps from 'renderer/components/UmrahMiqatSteps';
import MiqatMap from 'renderer/components/MiqatMap';
import classes from './style.module.css';

export default function Miqat() {
  return (
    <div className={classes.wrapper}>
      <p className={classes.para}>
        On the spiritual Hajj and Umrah trip to the purest place on earth, there
        are Miqats (Islamic boundaries Prophet Mohammed Peace Be Upon Him
        determined for Pilgrims to enter Ihram from), either by land points or
        parallel to Miqat when arriving by air.
      </p>
      <section className={classes.secondSection}>
        <MiqatMap />
        <div className={classes.rightSecMap}>
          <h1 className={classes.header}>Al-Juhfah</h1>
          <hr className={classes.mapDivider} />
          <p className={classes.mapText}>
            Al-Juhfah is located 182 kilometres (113 miles) northwest of Makkah.
            This is the Miqat for people intending to perform Hajj traveling
            from North America, Europe, Turkey, Syria, Egypt, Algeria, Sudan and
            several other African countries. Pilgrims may also enter into Ihram
            at Rabigh, a town just to the north of al-Juhfah.
          </p>
        </div>
      </section>
      <section className={classes.stepSection}>
        <UmrahMiqatSteps />
      </section>
    </div>
  );
}
