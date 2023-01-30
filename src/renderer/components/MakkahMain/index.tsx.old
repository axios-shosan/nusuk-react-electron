import { useState, ChangeEvent } from 'react';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import TabBtn from '../TabBtn';
import tabs from '../../data/MakkahTabs';
import classes from './style.module.css';
import Carousel from '../Carousel';

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

export default function MakkahMain() {
  const [currentTab, setCurrentTab] = useState<string>('edit');

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
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
      <div className={classes.tabContent}>
        <h1 className={classes.contentTitle}>Food & Drink</h1>
        <hr className={classes.divider} />
        <Carousel />
      </div>
    </>
  );
}
