import { useState } from 'react';
import Hero from 'renderer/components/Hero';
import PillarsMain from 'renderer/components/PillarsMain';
import Header from 'renderer/components/Header';
import UmrahLayout from 'renderer/components/layouts/UmrahLayout';
import Classes from './style.module.css';
import MakkahBg from '../../../../assets/images/makkah/makkah-bg.png';

// const Pillars = ({}) => {
//   return (
//     <div className={Classes.pillarsWrapper}>
//       <Header mainHeading="Umrah & Ziyarah" />
//       <Hero image={MakkahBg} />
//
//     </div>
//   );
// };
const Pillars = ({}) => {
  return <PillarsMain />;
};

export default Pillars;
