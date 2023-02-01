import Typewriter from 'typewriter-effect';
import Hero from 'renderer/components/Hero';
import { Link } from 'react-router-dom';
import Button from 'renderer/components/Button';
import CarouselExplore from 'renderer/components/CarouselExplore';
import classes from './style.module.css';
import heroImage from '../../../Images/exploreHero.png';
import logo from '../../../Images/logonusuk.png';

const Explore = () => {
  return (
    <div>
      <header className={classes.wrapper}>
        <img src={logo} alt="Nusuk logo" className={classes.logo} />
      </header>
      <div className={classes.heroContainer}>
        <Hero image={heroImage} />
        <h1>
          <Typewriter
            options={{
              loop: false,
              cursor: '',
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Welcome to Nusuk <br /> your official guide <br /> to Makkah and Madina'
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
        </h1>
      </div>
      <div className={classes.carouselContainer}>
        <CarouselExplore />
      </div>
    </div>
  );
};

export default Explore;
