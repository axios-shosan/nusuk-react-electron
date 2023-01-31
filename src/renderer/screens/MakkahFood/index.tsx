import Carousel from 'renderer/components/Carousel';
import tempImg from '../../../Images/makkah_hero.png';
import styles from './styles.module.css';

const temp = (
  <div className={styles.temp_wrapper}>
    <img src={tempImg} alt="temp" />
    <div>
      <h2 className={styles.temp_2}>Traveling by Air</h2>
      <h1 className={styles.temp_1}>
        From King Abdulaziz International Airport in Jeddah
      </h1>
      <p className={styles.temp_p}>
        The airport gives arrivals quick access to Makkah via the Haramain train
        station adjacent to the arrival hall. They can also have access to buses
        going straight to the grand mosque. It also allows them to take a taxi
        or rent a car from rental companies and head to Makkah via Prince
        Mohammed bin Salman Road, Huda Al-Sham Road, or the old Makkah-Jeddah
        Road, and stop at one of the car parks at the entrances to Makkah, and
        move from it to the Grand Mosque via Makkah buses. Upon arrival in
        Makkah, visitors must park rented cars in one of the car parks at the
        entrances to Makkah and proceed to the Grand Mosque by Makkah public
        buses or taxis.
      </p>
    </div>
  </div>
);
const content = [
  temp,
  <h1>Accomodation 1</h1>,
  <h1>Accomodation 2</h1>,
  <h1>Accomodation 3</h1>,
];
function MakkahFood() {
  return (
    <>
      <h1 className={styles.heading}>Getting to Makkah</h1>
      <hr className={styles.divider} />
      <Carousel content={content} />
    </>
  );
}

export default MakkahFood;
