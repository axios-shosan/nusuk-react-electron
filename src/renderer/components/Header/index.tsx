/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prettier/prettier */
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../Images/logonusuk.png';
import Button from '../Button';
import styles from './styles.module.css';

// type HeaderProps = {
//   mainHeading: string;
//   subHeading: string;
// };

function Header() {
  const navigate = useNavigate();

  const mainHeading = useLocation().pathname.split('/')[1];
  const subHeading = '';
  return (
    <header className={styles.wrapper}>
      <img src={logo} alt="Nusuk logo" className={styles.logo} />
      <div className={styles.headings}>
        <h1>{mainHeading}</h1>
        <p>{subHeading}</p>
      </div>
      <Button onClick={() => navigate('Umrash & Ziyarah/About')}>Home</Button>
    </header>
  );
}

export default Header;
