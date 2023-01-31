import image from 'Images/AboutUmrah.png';
import FadeInSection from '../../components/FadeInSection';

import classes from './style.module.css';

const data = {
  title:
    'To perform Umrah, Pilgrims should book Umrah permit easily using Nusuk app',
  text: [
    'Umrah is one of the best acts of worship in which Pilgrims turn their hearts, tongues and limbs to their Lord, by visiting Masjid al-Haram (the Holy Mosque of Makkah), seeking God’s forgiveness and His blessings. Umrah is an act of worship, preformed by Ihram, circumambulating the Kaaba and traveling back and forth between Safa and Marwa. Pilgrims then shave or shorten their hair. Umrah can be performed at any time of the year, except during Hajj season.',
    'Before arriving to the Holy Mosque, Pilgrims are required to book a Umrah permit from the available dates in the Nusup app, it is highly advised to book during the less crowded times, which helps Pilgrims complete Umrah in reverance and peace.',
  ],
  image,
  alt: 'About Umrah',
};

const AboutUmrah = () => {
  return (
    <div>
      <h1 className={classes.title}>{data.title}</h1>
      <hr className={classes.divider} />

      <img src={data.image} alt={data.alt} className={classes.image} />

      <div className={classes.container}>
        {data.text.map((paragraph, id) => (
          <FadeInSection>
            <p className={classes.text} key={id}>
              {paragraph}
            </p>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default AboutUmrah;
