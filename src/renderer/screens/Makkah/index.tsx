import React from 'react';
import Header from 'renderer/components/Header';
import Hero from 'renderer/Hero';
import MakkahMain from 'renderer/components/MakkahMain';
import MakkahImg from '../../../../assets/images/makkah/makkah-hero.png';

type Props = {};

export default function Makkah({}: Props) {
  return (
    <div>
      <Header />
      <Hero image={MakkahImg} />
      <MakkahMain />
    </div>
  );
}
