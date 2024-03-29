import { Link, Outlet } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Header from 'renderer/components/Header';
import Navigation from 'renderer/components/Navigation';
import makkahHero from '../../../../Images/makkah_hero.png';
import waves from '../../../../Images/Waves.png';
import tabs from '../../../data/MakkahTabs';
import styles from './style.module.css';
import Button from 'renderer/components/Button';
import Iframebtn from 'renderer/components/Iframbtn/Iframbtn';
function MakkahLayout() {
  return (
    <>
    <Iframebtn/>
      <Header mainHeading="Makkah" />
      <div className={styles.hero}>
        <img src={waves} alt="waves" className={styles.waves} />
        <img src={makkahHero} alt="makkah hero" />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
       
        Holy Site
        </h1>
        <hr className={styles.divider} />

        <p className={styles.about}>
          Makkah is the holiest city for Muslims. It embraces Masjid Al Haram
          (the GreatMosque) and Kaaba, the qiblah for Muslims to which they turn
          in their prayers. Muslims yearn to visit Makkah to perform Hajj or
          Umrah. In this city, Prophet Muhammad, the most honorable of creation,
          the seal of the prophets and messengers, our master Muhammad, peace be
          upon him, was born, and from it, the tolerant message of Islam was
          launched to all corners of the world after the Holy Quran was
          revealed. Makkah is located in the western part of Saudi Arabia.
          During the reign of the kings of Saudi Arabia, it received great
          interest. Makkah still enjoys great attention to provide the best
          services to pilgrims. Its most prominent landmark, Masjid Al Haram,
          witnessed many expansions that included all parts of the mosque, and
          the holy sites received a series of development works to provide all
          means of comfort and reassurance for all pilgrims from inside and
          outside the Kingdom.
        </p>
        <Navigation elements={tabs} />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Link className="homeLink" to="/explore">
        <Button extraClasses="homeBtn">Home</Button>
      </Link>
    </>
  );
}

export default MakkahLayout;
