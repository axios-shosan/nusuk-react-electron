import styled from '@emotion/styled';
import { Box } from '@mui/material';
import classes from './style.module.css';

const TabLabel = styled(Box)(
  () => `
        display: flex !important;
        flex-direction: column !important; 
        gap: 10px !important;
        background-color: transprent !important;
        color : #B49164 !important;
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 14px !important;
        line-height: 17px !important;
        text-align: center !important;
        padding-right: 15px;
        padding-left: 15px;
        width: 186px;
`
);

type Props = { icon: string; text: string };

export default function TabBtn({ icon, text }: Props) {
  return (
    <TabLabel>
      <img src={icon} alt="Icon" className={`${classes.linkIcon} `} />
      <p className={`${classes.linkText}`}>{text}</p>
    </TabLabel>
  );
}
