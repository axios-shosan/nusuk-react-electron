import { useState } from 'react';
import Button from 'renderer/components/Button';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import ParagraphSection from '../ParagraphSection';
import pillarsData from './data';
import Classes from './style.module.css';

const PillarsMain = () => {
  const [contentPage, setContentPage] = useState(0);

  const switchContent = (page) => {
    setContentPage(page);
  };
  return (
    <div className={Classes.container}>
      <div className={Classes.buttonsContainer}>
        {pillarsData.map((pillar, id) => (
          <Button
            key={id}
            active={contentPage === id}
            onClick={() => {
              switchContent(id);
            }}
            extraClasses={Classes.button}
          >
            {pillar.title}
          </Button>
        ))}
      </div>
      <ParagraphSection
        title={pillarsData[contentPage].title}
        text={pillarsData[contentPage].text}
        imgSrc={pillarsData[contentPage].image}
        imgAlt={pillarsData[contentPage].alt}
      />
    </div>
  );
};

export default PillarsMain;
