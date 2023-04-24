/* eslint-disable */
// @ts-ignore
import Button from 'renderer/components/Button';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/logo.svg';
import wavesBg from '../../../../assets/images/hero-wave-dark.png';
import waves from '../../../../assets/images/Waves.png';
import Classes from './style.module.css';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className={Classes.container}>
        <img src={wavesBg} alt="Waves Bg" className={Classes.wavesBg} />
        <img
          src={waves}
          alt="Waves"
          className={`${Classes.waves} ${Classes.maskedWaves}`}
        />
        <img src={Logo} alt="Logo" className={Classes.logo} />
        <div id="para1" className={Classes.title}>
          <p>        Welcome To Nusuk Your Official Guide To makkah and Madina</p>

        </div>
        <Button
          extraClasses={`${Classes.homeBtn}`}
          onClick={() => {
            navigate('/explore');
          }}
          active
        >
          <p className={Classes.btnText}>Explore</p>
        </Button>
      </div>
    </>
  );
}
