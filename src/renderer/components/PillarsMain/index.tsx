import { useState } from 'react';
import Button from 'renderer/components/Button';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import tabs from '../../data/UmrahTabs';
import TabBtn from '../TabBtn';
import ParagraphSection from '../ParagraphSection';
import pillarsData from './data';
import Classes from './style.module.css';

const TabsWrapper = styled(Tabs)(
  () => `
   margin-right: auto !important;
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
    .MuiTabs-indicator{
        color: #B49164 !important;
        background-color: #B49164 !important;

    }
            .Mui-selected {
            background-color: #1D2225 !important;
        }
`
);

const PillarsMain = () => {
  const [contentPage, setContentPage] = useState(0);

  const [currentTab, setCurrentTab] = useState<string>('edit');

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const switchContent = (page) => {
    setContentPage(page);
  };
  return (
    <div>
      <TabsWrapper
        onChange={handleTabsChange}
        value={currentTab}
        scrollButtons="auto"
        centered
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={<TabBtn icon={tab.icon} text={tab.text} />}
            value={tab.value}
          />
        ))}
      </TabsWrapper>
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
      {/* // <div className={Classes.contentWrapper}>
//   <h1>{pillarsData[contentPage].title}</h1>
//   <img
//     src={pillarsData[contentPage].image}
//     alt={pillarsData[contentPage].alt}
//   />
//   {pillarsData[contentPage].text.map((text, id) => (
//     <p>{text}</p>
//   ))}
// </div> */}
    </div>
  );
};

export default PillarsMain;
