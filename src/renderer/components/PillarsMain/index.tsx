import { useState } from 'react';
import classes from './style.module.css';
import Button from '../Button';
import IhramImg from '../../../../assets/images/pillars/ihram.png';
import RenderText from './data';

type Props = {};

export default function PillarsMain({}: Props) {
  const [pillar, setPillar] = useState(0);

  return (
    <main className={classes.container}>
      <h1 className={classes.pillarHeader}>Pillars of Umrah</h1>
      <div className={classes.btnsRow}>
        <Button
          onClick={() => {
            setPillar(0);
          }}
          active={pillar === 0}
        >
          Ihram
        </Button>
        <Button
          onClick={() => {
            setPillar(1);
          }}
          active={pillar === 1}
        >
          Tawaf
        </Button>
        <Button
          onClick={() => {
            setPillar(2);
          }}
          active={pillar === 2}
        >
          Sai
        </Button>
      </div>
      <div className={classes.pillar}>
        <img src={IhramImg} alt="Pillar" className={classes.pillarImg} />
        <div className={classes.pillarContent}>
          <h1 className={classes.pillarTitle}>Ihram</h1>
          <div className={classes.pillarPara}>
            <p className={classes.content}>
              <RenderText pillar={pillar} />
            </p>
          </div>
        </div>
        <div className={classes.shadow} />
      </div>
    </main>
  );
}
