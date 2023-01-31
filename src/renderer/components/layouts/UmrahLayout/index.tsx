import { Outlet } from 'react-router-dom';
import Header from 'renderer/components/Header';
import Hero from 'renderer/components/Hero';
import Navigation from 'renderer/components/Navigation';
import tabs from '../../../data/UmrahTabs';
import styles from './style.module.css';
import UmrahHeroImg from '../../../../../assets/images/Umrah/UmrahHero.png';

export default function UmrahLayout() {
  return (
    <>
      <Header mainHeading="Umrah & Ziyarah" />
      <Hero image={UmrahHeroImg} />
      <div className={styles.tabsWrapper}>
        <Navigation elements={tabs} />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
