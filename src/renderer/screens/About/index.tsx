import React, { useEffect } from 'react';
import Header from 'renderer/components/Header';
import Hero from 'renderer/components/Hero';
import AboutContent from 'renderer/components/AboutContent';
import AboutHeroImg from '../../../../assets/images/about/aboutHero.png';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Button from 'renderer/components/Button';
import Iframebtn from 'renderer/components/Iframbtn/Iframbtn';
export default function About() {
  return (
    <div>
      <Header mainHeading="About Nusuk" />
      <Hero image={AboutHeroImg} />
      <main className={styles.main}>
        <AboutContent />
      </main>
      <Link className="homeLink" to="/explore">
        <Button extraClasses="homeBtn">Home</Button>
      </Link>
      <Iframebtn/>
    </div>
  );
}
