import React from 'react';
import Hero from 'renderer/components/Hero';
import MakkahInto from 'renderer/components/MakkahIntro';
import MakkahMain from 'renderer/components/MakkahMain';

import MakkahBg from '../../../../assets/images/makkah/makkah-bg.png';

export default function Makkah() {
  return (
    <div>
      <Hero image={MakkahBg} />
      <MakkahInto />
      <MakkahMain />
    </div>
  );
}
