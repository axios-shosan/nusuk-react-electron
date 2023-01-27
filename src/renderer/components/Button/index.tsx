import React, { PropsWithChildren } from 'react';
import styles from './style.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: string;
  extraClasses?: string;
}

export default function Button({
  active = false,
  icon = '',
  extraClasses = '',
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return icon === '' ? (
    <button
      className={`${styles.button} ${
        active ? styles.active : ''
      } ${extraClasses}`}
      {...rest}
    >
      {children}
    </button>
  ) : (
    <button
      className={`${styles.button} ${styles.iconButton} ${
        active ? styles.active : ''
      } ${extraClasses}`}
      {...rest}
    >
      <img src={icon} alt="Icon" />
      <p className={styles.textButton}>{children}</p>
    </button>
  );
}
