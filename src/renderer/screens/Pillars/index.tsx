import { useState } from 'react';
import Hero from 'renderer/components/Hero';
import PillarsMain from 'renderer/components/PillarsMain';
import Header from 'renderer/components/Header';
import Classes from './style.module.css';
import MakkahBg from '../../../../assets/images/makkah/makkah-bg.png';

const Pillars = ({}) => {
  return (
    <div className={Classes.pillarsWrapper}>
      <Header mainHeading="Umrah & Ziyarah" />
      <Hero image={MakkahBg} />
      <PillarsMain />
    </div>
  );
};

export default Pillars;
