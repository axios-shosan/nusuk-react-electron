import React, { useEffect } from 'react';
import classes from './style.module.css';
import nextIcon from '../../../../assets/icons/nextCarousel.svg';
import prevIcon from '../../../../assets/icons/prevCarousel.svg';

export default function Carousel() {
  const [activeSection, setActiveSection] = React.useState(0);

  const handleScroll = () => {
    const wrapper = document.getElementsByClassName('slides')[0];
    const elements = document.getElementsByClassName('slide');
    const index = wrapper.scrollLeft / elements[0].scrollWidth;
    setActiveSection(Math.round(index));
  };

  const handleClickScroll = (action: 'prev' | 'next') => {
    const elements = document.getElementsByClassName('slide');

    if (action === 'prev') {
      if (activeSection === 0) return;
      elements[activeSection - 1].scrollIntoView({ behavior: 'smooth' });
      setActiveSection(activeSection - 1);
    } else {
      if (activeSection === elements.length - 1) return;
      elements[activeSection + 1].scrollIntoView({ behavior: 'smooth' });
      setActiveSection(activeSection + 1);
    }
  };

  const handleLinkClick = (index: number) => {
    setActiveSection(index);
  };
  return (
    <div className={classes.carousel}>
      <div
        className={`${classes.slides} slides`}
        onScroll={() => {
          handleScroll();
        }}
      >
        <div className="slide" id="slide-0">
          0
        </div>
        <div className="slide" id="slide-1">
          1
        </div>
        <div className="slide" id="slide-2">
          2
        </div>
        <div className="slide" id="slide-3">
          3
        </div>
      </div>
      <div className={classes.scrollBtnsWrp}>
        <button
          className={`${classes.slideBtn} ${classes.prevBtn}`}
          onClick={() => {
            handleClickScroll('prev');
          }}
        >
          <img src={prevIcon} alt="Previous" />
        </button>
        <a
          className={classes.scrollBtn}
          href="#slide-0"
          onClick={() => {
            handleLinkClick(0);
          }}
        />
        <a
          className={classes.scrollBtn}
          href="#slide-1"
          onClick={() => {
            handleLinkClick(0);
          }}
        />
        <a
          className={classes.scrollBtn}
          href="#slide-2"
          onClick={() => {
            handleLinkClick(0);
          }}
        />
        <a
          className={classes.scrollBtn}
          href="#slide-3"
          onClick={() => {
            handleLinkClick(0);
          }}
        />
        <button
          className={`${classes.slideBtn} ${classes.nextBtn}`}
          onClick={() => {
            handleClickScroll('next');
          }}
        >
          <img src={nextIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
}
