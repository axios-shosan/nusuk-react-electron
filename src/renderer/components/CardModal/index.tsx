import React, { useState } from 'react';
import classes from './styles.module.css';
import closeImg from '../../../../assets/icons/btn_close.png';

type Prorps = {
  open: boolean;
  setOpen: any;
  image: string;
  title: string;
  description: string;
  handleClose: () => void;
};

export default function CardModal({
  open,
  image,
  setOpen,
  title,
  description,
  handleClose,
}: Prorps) {
  return open ? (
    <div
      className={classes.modelWrapper}
      onClick={() => {
        setOpen(false);
        handleClose();
      }}
    >
      <div className={classes.modal}>
        <button
          className={classes.btnClose}
          onClick={() => {
            setOpen(false);
            handleClose();
          }}
        >
          <img src={closeImg} alt="X" />
        </button>
        <div className={classes.imgWrapper}>
          <img src={image} className={classes.img} alt="card" />
        </div>
        <div className={classes.content}>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
