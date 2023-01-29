import React from 'react';
import PillarsMain from 'renderer/components/PillarsMain';
import Header from 'renderer/components/Header';
import Hero from 'renderer/components/Hero';
import PillarHeroImg from '../../../../assets/images/pillars/pillarHero.png';

type Props = {};

export default function index({}: Props) {
  return (
    <div>
      <Header />
      <Hero image={PillarHeroImg} />
      <PillarsMain />
    </div>
  );
}
