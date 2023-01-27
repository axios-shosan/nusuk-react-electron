import { Link, matchPath, useLocation } from 'react-router-dom';
import classes from './style.module.css';
import { umrahData } from './data';

type Props = {};

export default function Footer({}: Props) {
  const { pathname } = useLocation();
  const active = (link: string) => {
    return matchPath({ path: link, end: true, caseSensitive: false }, pathname);
  };
  return (
    <footer className={classes.footer}>
      {umrahData.map((elem, index) => {
        return (
          <Link
            key={index}
            className={`${classes.footerLink} ${
              active(elem.link) ? classes.activeLink : ''
            }`}
            to={elem.link}
          >
            <img
              src={elem.icon}
              alt="About Umrah"
              className={`${classes.linkIcon} ${
                active(elem.link) ? classes.activeImage : ''
              }`}
            />
            <p
              className={`${classes.linkText} ${
                active(elem.link) ? classes.activeText : ''
              }`}
            >
              {elem.text}
            </p>
          </Link>
        );
      })}
    </footer>
  );
}
