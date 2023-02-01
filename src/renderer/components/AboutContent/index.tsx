import React from 'react';
import image from 'Images/AboutUmrah.png';
import styles from './styles.module.css';
import FadeInSection from '../FadeInSection';
import image1 from 'Images/about/about-1.jpeg';
import image2 from 'Images/about/about-2.jpeg';
import image3 from 'Images/about/about-3.jpeg';
import image4 from 'Images/about/about-4.jpeg';

const content = [
  {
    title: 'The Holistic Journey Platform',
    body: [
      {
        subtitle: 'Your Gateway to Umrah',
        text: 'Use Nusuk, the first-ever official planning, booking and experience platform, to create your Umrah itinerary to Makkah, Madina, and beyond. With Nusuk, travelers from all over the world can easily organize their entire visit, from applying for an eVisa to booking hotels and flights. ',
        image: image1,
      },
    ],
  },
  {
    title: 'About Saudi Arabia',
    body: [
      {
        subtitle: 'Language',
        text: 'Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions. English serves as an informal second language in the Kingdom and is spoken by a large section of its society. All road signs are bilingual, showing information in both Arabic and English.',
        image: image2,
      },
      {
        subtitle: 'Culture',
        text: 'Saudi Arabia’s rich heritage and traditions have been shaped by its position as a historic trade hub and the birthplace of Islam. In recent years, the Kingdom has undergone a significant cultural transformation, evolving century-old customs to fit the contemporary world we live in today.',
        image: image3,
      },
    ],
  },
  {
    title: 'Currency & Payments',
    body: [
      {
        subtitle: 'Your Gateway to Umrah',
        text: 'Currency exchange and transactions are easy in Saudi Arabia. Saudi Arabia’s national currency is the Saudi riyal (ر.س SAR), which is subdivided into 100 halala. You’ll receive notes in denominations of five riyals, ten riyals, 50 riyals, 100 riyals and 500 riyals; and coins in one riyal, two riyals, 50 halala, 25 halala, 10 halala, 5 halala and 1 halala.',
        image: image4,
      },
    ],
  },
];

export default function AboutContent() {
  return (
    <div>
      {content.map((element, index) => {
        return (
          <>
            <h1 className={styles.title}>{element.title}</h1>
            <hr className={styles.divider} />

            {element.body.map((e, i) => (
              <div key={i}>
                <img src={e.image} alt="About" className={styles.image} />

                <div className={styles.container}>
                  <FadeInSection>
                    <h2 className={styles.subtitle}>{e.subtitle}</h2>
                    <p className={styles.text}>{e.text}</p>
                  </FadeInSection>
                </div>
              </div>
            ))}
          </>
        );
      })}
    </div>
  );
}
