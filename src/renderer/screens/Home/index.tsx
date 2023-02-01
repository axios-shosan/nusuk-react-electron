import { useEffect } from 'react';
import Button from 'renderer/components/Button';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/logo.svg';
import wavesBg from '../../../../assets/images/hero-wave-dark.png';
import waves from '../../../../assets/images/Waves.png';
import Classes from './style.module.css';

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
        <h1 className={Classes.title}>
          Welcome to Nusuk your official guide to Makkah and Madina
        </h1>
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
