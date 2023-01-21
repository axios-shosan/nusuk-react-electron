import React, { PropsWithChildren } from 'react';
import styles from './style.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export default function Button({
  active = false,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`${styles.button} ${active ? styles.active : ''}`}
      {...rest}
    >
      {children}
    </button>
  );
}
