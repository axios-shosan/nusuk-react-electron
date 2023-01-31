import Hero from 'renderer/components/Hero';
import CarouselExplore from 'renderer/components/CarouselExplore';
import Header from 'renderer/components/Header';
import classes from './style.module.css';
import heroImage from '../../../Images/exploreHero.png';

const Explore = () => {
  return (
    <div>
      <Header />
      <div className={classes.heroContainer}>
        <Hero image={heroImage} />
        <h1>
          Welcome to Nusuk <br /> your official guide <br /> to Makkah and
          Madina
        </h1>
      </div>
      <div className={classes.carouselContainer}>
        <CarouselExplore />
      </div>
    </div>
  );
};

export default Explore;
