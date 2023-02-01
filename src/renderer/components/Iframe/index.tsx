import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import classes from './styles.module.css';

export default function Iframe() {
  return (
    <>
      <iframe
        className={classes.frame}
        title="Nusuk"
        src="https://www.nusuk.sa/"
      />
      ;
      <Link className="homeLink" to="/explore">
        <Button extraClasses="homeBtn">Home</Button>
      </Link>
    </>
  );
}
