import React from 'react';
import { Link } from 'react-router-dom';

import classes from './style.module.css';

import AboutNusukImage from '../../../Images/AboutNusuk.png';
import UmrahZiyarahImage from '../../../Images/Umrah&Ziyarah.png';
import MakkahImage from '../../../Images/Makkah.png';
import MadinaImage from '../../../Images/Madina.png';
import Logo from '../../../Images/frame.png';

const carouselData = [
  {
    img: AboutNusukImage,
    alt: 'About Nusuk',
    title: 'About Nusuk',
    description: 'The Holistic Journey Platform.',
    href: '/about',
  },
  {
    img: UmrahZiyarahImage,
    alt: 'Umrah & Ziyarah',
    title: 'Umrah & Ziyarah',
    description:
      'All you need to know about Rituals to perform in Umrah and Ziyarah Al Masjid An Nabawi.',
    href: '/umrah/about',
  },
  {
    img: MakkahImage,
    alt: 'Makkah',
    title: 'Makkah',
    description: 'Makkah, the holiest city for Muslims.',
    href: '/makkah/accomodation',
  },
  {
    img: MadinaImage,
    alt: 'Madina',
    title: 'Madina',
    description:
      'The second holiest city in all of the KSA. Learn more about the Medina region here!',
    href: '/madina/accomodation',
  },
  {
    img: Logo,
    alt: 'website',
    title: 'Frame',
    description: 'Click here to access the nusuk website Live !',
    href: '/iframe',
  },
];

export default function CarouselExplore() {
  const [activeSection, setActiveSection] = React.useState(0);

  const handleScroll = () => {
    const wrapper = document.getElementsByClassName('slides')[0];
    const elements = document.getElementsByClassName('slide');
    const index = wrapper.scrollLeft / elements[0].scrollWidth;
    setActiveSection(Math.round(index));
  };

  const handleLinkClick = (index: number) => {
    setActiveSection(index);
  };
  return (
    <div className={`${classes.carousel} no-animation`}>
      <div
        className={`${classes.slides} slides`}
        onScroll={() => {
          handleScroll();
        }}
      >
        {carouselData.map(({ img, alt, title, description, href }, id) => (
          <div className="slide" id={`slide-${id}`}>
            <img src={img} alt={alt} className={classes.image} />
            <div className={classes.text}>
              <h2>{title}</h2>
              <p>{description}</p>
              <Link className={classes.readMore} to={href}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.scrollBtnsWrp}>
        {/* <button
          className={`${classes.slideBtn} ${classes.prevBtn}`}
          onClick={() => {
            handleClickScroll('prev');
          }}
        >
          <img src={prevIcon} alt="Previous" />
        </button> */}
        <a
          className={`${classes.scrollBtn} ${
            activeSection === 0 ? classes.active : ''
          }`}
          href="#slide-0"
          onClick={() => {
            handleLinkClick(0);
          }}
        />
        <a
          className={`${classes.scrollBtn} ${
            activeSection === 1 ? classes.active : ''
          }`}
          href="#slide-1"
          onClick={() => {
            handleLinkClick(1);
          }}
        />
        <a
          className={`${classes.scrollBtn} ${
            activeSection === 2 ? classes.active : ''
          }`}
          href="#slide-2"
          onClick={() => {
            handleLinkClick(2);
          }}
        />
        <a
          className={`${classes.scrollBtn} ${
            activeSection === 3 ? classes.active : ''
          }`}
          href="#slide-3"
          onClick={() => {
            handleLinkClick(3);
          }}
        />
        <a
          className={`${classes.scrollBtn} ${
            activeSection === 4 ? classes.active : ''
          }`}
          href="#slide-4"
          onClick={() => {
            handleLinkClick(4);
          }}
        />
        {/* <button
          className={`${classes.slideBtn} ${classes.nextBtn}`}
          onClick={() => {
            handleClickScroll('next');
          }}
        >
          <img src={nextIcon} alt="Next" />
        </button> */}
      </div>
    </div>
  );
}
