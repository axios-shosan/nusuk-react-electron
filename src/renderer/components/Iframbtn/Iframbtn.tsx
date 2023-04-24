import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import classes from './styles.module.css';

export default function Iframebtn() {
  return (
    <Link className={classes.center} to={'/iframe'}>
      {' '}
      <button className={classes.btn}>
        <p>Nusuk website</p>
      </button>
    </Link>
  );
}
