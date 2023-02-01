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
          <Typewriter
            options={{
              loop: false,
              cursor: '',
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Welcome To Nusuk Your Official Guide To makkah and Madina'
                )
                .callFunction(() => {
                  console.log('String typed out!');
                })

                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
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
