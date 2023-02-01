import React from 'react';
import { Link } from 'react-router-dom';

import classes from './style.module.css';

import AboutNusukImage from '../../../Images/AboutNusuk.png';
import UmrahZiyarahImage from '../../../Images/Umrah&Ziyarah.png';
import MakkahImage from '../../../Images/Makkah.png';
import MadinaImage from '../../../Images/Madina.png';

const carouselData = [
  {
    img: AboutNusukImage,
    alt: 'About Nusuk',
    title: 'About Nusuk',
    description:
      'Follow the simple steps to satisfy entry requirements to Saudi Arania.',
    href: '/about',
  },
  {
    img: UmrahZiyarahImage,
    alt: 'Umrah & Ziyarah',
    title: 'Umrah & Ziyarah',
    description:
      'Follow the simple steps to satisfy entry requirements to Saudi Arania.',
    href: '/umrah/about',
  },
  {
    img: MakkahImage,
    alt: 'Makkah',
    title: 'Makkah',
    description:
      'Follow the simple steps to satisfy entry requirements to Saudi Arania.',
    href: '/makkah/accomodation',
  },
  {
    img: MadinaImage,
    alt: 'Madina',
    title: 'Madina',
    description:
      'Follow the simple steps to satisfy entry requirements to Saudi Arania.',
    href: '/madina/accomodation',
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
    <div className={classes.carousel}>
      <div
        className={`${classes.slides} no-animation slides`}
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
