import { useState } from 'react';
import Button from 'renderer/components/Button';
import { pillarsData } from './data';
import Classes from './style.module.css';

const Pillars = ({}) => {
  const [contentPage, setContentPage] = useState(0);

  const switchContent = (page) => {
    setContentPage(page);
  };

  return (
    <div className={Classes.pillarsWrapper}>
      <div className={Classes.headerWrapper}>
        {pillarsData.map((pillar, id) => (
          <Button
            key={id}
            active={contentPage === id}
            onClick={() => {
              switchContent(id);
            }}
          >
            {pillar.title}
          </Button>
        ))}
      </div>
      <div className={Classes.contentWrapper}>
        <h1>{pillarsData[contentPage].title}</h1>
        <img
          src={pillarsData[contentPage].image}
          alt={pillarsData[contentPage].alt}
        />
        {pillarsData[contentPage].text.map((text, id) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Pillars;
