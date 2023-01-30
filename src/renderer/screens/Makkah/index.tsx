import React from 'react';
import Hero from 'renderer/components/Hero';
import MakkahInto from 'renderer/components/MakkahIntro';
import MakkahMain from 'renderer/components/MakkahMain';
import Modal from 'renderer/components/Packeges';

import MakkahBg from '../../../../assets/images/makkah/makkah-bg.png';

export default function Makkah() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Modal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      >
        <p>hello</p>
      </Modal>
      <Hero image={MakkahBg} />
      <MakkahInto />
      <MakkahMain />
    </div>
  );
}
