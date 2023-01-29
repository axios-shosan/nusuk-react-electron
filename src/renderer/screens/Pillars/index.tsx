import React from 'react';
import PillarsMain from 'renderer/components/PillarsMain';
import Hero from 'renderer/components/Hero';
import PillarHeroImg from '../../../../assets/images/pillars/pillarHero.png';

type Props = {};

export default function index({}: Props) {
  return (
    <div>
      <Hero image={PillarHeroImg} />
      <PillarsMain />
    </div>
  );
}
