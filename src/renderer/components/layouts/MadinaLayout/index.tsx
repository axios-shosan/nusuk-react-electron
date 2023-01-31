import { Outlet } from 'react-router-dom';
import Header from 'renderer/components/Header';
import Navigation from 'renderer/components/Navigation';
import Hero from 'renderer/components/Hero';
import tabs from '../../../data/MakkahTabs';
import MadinaHero from '../../../../../assets/images/madina/madina-banner.png';
import styles from './styles.module.css';

function MadinaLayout() {
  return (
    <>
      <Header mainHeading="Makkah" />
      <Hero image={MadinaHero} />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Holy site</h1>
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
          interest. Makkah still enjoys great attentionto provide the best
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
    </>
  );
}

export default MadinaLayout;
