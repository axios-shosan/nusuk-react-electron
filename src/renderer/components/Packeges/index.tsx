import React from 'react';
import classes from './style.module.css';
import closeImg from '../../../../assets/icons/btn_close.png';
import Button from '../Button';

type Prorps = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, children, handleClose }: Prorps) {
  return open ? (
    <div
      className={classes.modelWrapper}
      onClick={() => {
        handleClose();
      }}
    >
      <div className={classes.modal}>
        <button
          className={classes.btnClose}
          onClick={() => {
            handleClose();
          }}
        >
          <img src={closeImg} alt="X" />
        </button>
        <h1 className={classes.title}>Packages & Offers</h1>
        <p className={classes.text}>
          If you want to receive the latest packages and offers that we
          currently have, please fill up the form below and we will be in touch
          with. You will also be subscribed to our newsletters to receive the
          latest news from all our products and services.
        </p>
        <div className={classes.inputWrapper}>
          <input
            className={classes.input}
            type="text"
            name="name"
            id=""
            placeholder="Name:"
          />
          <input
            className={classes.input}
            type="text"
            name="email"
            id=""
            placeholder="Email:"
          />
          <input
            className={classes.input}
            type="text"
            name="number"
            id=""
            placeholder="Number"
          />
        </div>
        <Button extraClasses={`${classes.btn}`}>
          <p className={`${classes.btnText}`}>Send</p>
        </Button>
      </div>
    </div>
  ) : (
    <></>
  );
}
