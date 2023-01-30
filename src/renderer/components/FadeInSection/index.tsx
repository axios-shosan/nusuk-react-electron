import { style } from '@mui/system';
import { useState, useRef, useEffect } from 'react';
import classes from './style.module.css';

type Props = {
  children: any;
};

const FadeInSection = ({ children }: Props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const refElement = domRef.current;
    observer.observe(refElement);
    return () => observer.unobserve(refElement);
  }, []);
  return (
    <div
      className={`${classes.fadeInSection} ${
        isVisible ? classes.isVisible : ''
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};
export default FadeInSection;
