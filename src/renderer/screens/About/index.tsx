import React, { useEffect } from 'react';
import Header from 'renderer/components/Header';
import Hero from 'renderer/components/Hero';
import AboutContent from 'renderer/components/AboutContent';
import AboutHeroImg from '../../../../assets/images/about/aboutHero.png';
import styles from './styles.module.css';

export default function About() {
  function redirectToHomepage() {
    window.location.href = '/home'; // or whatever your homepage would be
  }

  return (
    <div>
      <Header mainHeading="About Nusuk" />
      <Hero image={AboutHeroImg} />
      <main className={styles.main}>
        <AboutContent />
      </main>
    </div>
  );
}
