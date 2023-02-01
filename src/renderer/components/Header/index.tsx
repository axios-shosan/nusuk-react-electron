import { useNavigate } from 'react-router-dom';
import logo from '../../../Images/logonusuk.png';
import Button from '../Button';
import styles from './styles.module.css';

type HeaderProps = {
  mainHeading?: string;
  subHeading?: string;
};

function Header({ mainHeading, subHeading }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={styles.wrapper}>
      <img src={logo} alt="Nusuk logo" className={styles.logo} />
      <div className={styles.headings}>
        <h1>{mainHeading}</h1>
        <p>{subHeading}</p>
      </div>
    </header>
  );
}

export default Header;
