import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TabBtn from '../TabBtn';
import styles from './styles.module.css';

export type NavigationProps = {
  elements: { name: string; icon: string; target: string }[];
};

const TabsWrapper = styled(Tabs)(
  () => `
   margin-right: auto !important;
   margin-left: auto !important;
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

function Navigation({ elements }: NavigationProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<string>(pathname.split('/')[2]);

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <nav className={styles.wrapper}>
      <TabsWrapper
        onChange={handleTabsChange}
        value={currentTab}
        scrollButtons="auto"
        variant="fullWidth"
        centered
      >
        {elements.map((element) => (
          <Tab
            key={element.name}
            label={<TabBtn icon={element.icon} text={element.name} />}
            value={element.target}
            onClick={() => navigate(element.target)}
          />
        ))}
      </TabsWrapper>
    </nav>
  );
}

export default Navigation;
