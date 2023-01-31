import { ScrollCardProps } from 'renderer/components/ScrollCard';
import ScrollCarousel from 'renderer/components/ScrollCarousel';
import image from '../../../Images/UmrahAboutTop.png';
import styles from './style.module.css';

function MakkahAccomodation() {
  const content: ScrollCardProps[] = [
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
    {
      image,
      description:
        'Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers...',
      target: 'somelink',
      title: 'Al Safwah',
    },
  ];
  return (
    <>
      <h1 className={styles.heading}>Accomodation</h1>
      <hr className={styles.divider} />
      <ScrollCarousel elements={content} />
    </>
  );
}

export default MakkahAccomodation;
