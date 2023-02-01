import Typewriter from 'typewriter-effect';
import { Outlet } from 'react-router-dom';
import Header from 'renderer/components/Header';
import Navigation from 'renderer/components/Navigation';
import Hero from 'renderer/components/Hero';
import tabs from '../../../data/MadinaTabs';
import MadinaHero from '../../../../../assets/images/madina/madina-banner.png';
import styles from './styles.module.css';

function MadinaLayout() {
  return (
    <>
      <Header mainHeading="Madina" />
      <Hero image={MadinaHero} />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          <Typewriter
            options={{
              loop: false,
              cursor: '',
              delay: 75,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Al Madina Al Munawara')
                .callFunction(() => {
                  console.log('String typed out!');
                })

                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
        </h1>
        <hr className={styles.divider} />

        <p className={styles.about}>
          Madina, or as Muslims call it “Taibah al Taibah”, is one of the main
          destinations for millions of Muslims around the world. It is the first
          capital of Islam in history, and the second holiest place for Muslims
          after Makkah al-Mukarramah. Madina is located in Hejaz Region in the
          west of the Kingdom of Saudi Arabia. It has the Noble Prophet’s
          Mosque, which was built by the Prophet himself in the first year after
          Hijrah (622 AD.). It is one of the largest mosques in the world after
          the Holy Mosque. Millions of Muslims around the world visit Madina
          every year.
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
