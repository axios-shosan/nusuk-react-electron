import MiqatStep from '../MiqatStep';
import styles from './styles.module.css';

const text = [
  'It is important to prepare and plan for Umrah',
  'In the event that a mu’tamir adheres to a treatment plan that requires certain medicines, please prepare and keep them in a way that does not affect their validity and quality',
  'Prepare a kit of medical supplies that help you to be fully prepared in case of any emergency, such as a cold, diarrhea, and skin allergy. Please learn about the medicines authorized by the Saudi Food and Drug Authority',
  'The temperature in Makkah Al-Mukarramah varies, which may require the use of an umbrella for protection from the sun',
  'Bring copies of important documents that you may need during the journey, such as Passport, etc.',
  'You can learn about the baggage allowed to be brought from your country to the Kingdom of Saudi Arabia',
  'You can come to Makkah through an integrated transportation system, by land and air. Land Transport: Al-Haramain Express Train and pilgrim transportation buses. Air Transport: Through King Abdulaziz International Airport in Jeddah, Prince Mohammed Bin Abdulaziz International Airport in Medina, and Taif International Airport ',
  'If your trip for Umrah is within a group, it is advised to adhere to accompanying the group from the beginning of the trip to its end.',
  'Pilgrims should abide by the instructions of the campaign guide regarding the time of going to Masjid Al Haram (the Great Mosque of Makkah). They should also remember well their residence address, the bus stop and the agreed assembly point after completing the Umrah.',
  'Upon reaching the courtyards of Masjid Al Haram, pilgrims should pay attention to the signs of the gates that indicate that they are designated for entry or exit.',
  'There are escalators in Masjid Al Haram to facilitate movement. Pilgrims should avoid sitting on them so as not to obstruct movement, and women should pay attention to their hijab so as not to get stuck at the end of the ladder.',
  `Free electric cart service is available in Masjid Al Haram for the elderly and the disabled. This service is available in the eastern square, the southern square, and the western square. The carts have special entrances, including Ajyad Bridge, Shubaika entrance, Al-Arqam ladder, and Al-Marwa bridge entrance. Electric cart service is also available on the Mezzanine's first floor for those who need it.`,
  'For safety, pilgrims should wear face masks, be careful not to scramble and harm the pilgrims, and abide by the instructions inside Masjid Al Haram.',
  'Pilgrims should not have their hair cut in Masjid Al Haram, as there are many authorized and health-safe barber shops in the vicinity of Haram.',
  'After completing the performance of the Umrah, pilgrims will be free from Ihram restrictions, and everything that was prohibited for him because of Ihram will be allowed to him.',
];
function TipsSteps() {
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.header}>
        To perform Umrah you need a permit that you can obtain from the Nusuk
        app. Available on iPhone, Android or Huawei
      </h2>
      <hr className={styles.divider} />
      <div className={styles.steps}>
        {text.map((content, id) => (
          <MiqatStep num={id + 1} content={content} />
        ))}
      </div>
    </div>
  );
}

export default TipsSteps;
