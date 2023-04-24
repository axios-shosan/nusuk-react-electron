import Typewriter from 'typewriter-effect';
import Hero from 'renderer/components/Hero';
import { Link } from 'react-router-dom';
import Button from 'renderer/components/Button';
import CarouselExplore from 'renderer/components/CarouselExplore';
import classes from './style.module.css';
import heroImage from '../../../Images/exploreHero.png';
import logo from '../../../Images/logonusuk.png';
import Iframebtn from 'renderer/components/Iframbtn/Iframbtn';
const Explore = () => {
  return (
    <div>
<Iframebtn></Iframebtn>
      <header className={classes.wrapper}>
        <img src={logo} alt="Nusuk logo" className={classes.logo} />
      </header>
      <div className={classes.heroContainer}>
        <Hero image={heroImage} />
        <h1>
        Welcome to Nusuk <br /> your official guide <br /> to Makkah and Madina
        </h1>
      </div>
      <div className={classes.carouselContainer}>
        <CarouselExplore />
      </div>
    </div>
  );
};

export default Explore;
