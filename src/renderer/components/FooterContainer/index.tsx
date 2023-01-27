import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Button from '../Button';
import homeIcon from '../../../../assets/icons/home-icon.svg';
import classes from './style.module.css';

type Props = {};

export default function FooterSection({}: Props) {
  return (
    <div className={classes.footerContainer}>
      <Link to="/">
        <Button icon={homeIcon}>Home</Button>
      </Link>
      <Footer />;
    </div>
  );
}
