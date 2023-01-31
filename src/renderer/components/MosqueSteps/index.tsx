import MiqatStep from '../MiqatStep';
import styles from './styles.module.css';

const text = [
  'It is possible to go from the airport to Masjid Al Haram (the Great Mosque of Makkah) by taxis, buses of Hajj and Umrah companies, Al-Haramain train, car rental, and transportations apps.',
  'If the pilgrim uses his own car or a rented car, he cannot enter the neighborhoods surrounding Masjid Al Haram in order to avoid crowding cars. He will be asked to park the car in one of the approved car parks in Makkah, commuting busses can be found at these parking lots for pilgrims, taking them to and from the Holy Mosque, these are the parking lots: Haramin Train Station parking lot, An Nawariyah parking lot, Kuddai parking lot, Al-Jamarat parking lot, Al-Rassifah parking lot, Diqim Al-Wabar parking lot, Prince Mutaab Road parking lot.',
  'Pilgrims can book Al-Haramain Train tickets through the Al-Haramain Train, some buses and taxis take pilgrims to Masjid Al Haram at the train station in Makkah.',
  'During the initial circumambulation (Tawaf Al Qudum), it is advisable for men to place the middle of their robe under their right shoulder and the two ends on their left shoulder.',
  'The pilgrim performs the circumambulation by placing the Kaaba on his left, adjacent to the Black Stone, performing seven rounds.',
  'It is Sunnah for men to walk quickly in the first three rounds of Tawaf.',
  'It is proven that Prophet Muhammad, peace be upon him, used to say between the Yemeni corner and the Black Stone: "Our Lord! Give us good in this world and good in the Hereafter, and defend us from the torment of the Fire!"',
  'Praying two rak’ahs behind Maqam Ibrahim, if possible, or in any place in Masjid Al Haram, with reciting Surat Al-Kafirun after Al-Fatihah in the first rak’ah and Surat Al-Ikhlas in the second rak’ah.',
  `Performing Sa'I between Safa and Marwa while reciting " Indeed! Safa and Marwa are among the rites of Allah. So it is not a sin for him who performs Hajj or Umrah of the House (the Kaaba at Makkah) to travel between them (Safa and Marwah). And whoever does good voluntarily, then verily, Allah is All-Recogniser, All-Knower." (Surah Al Baqarah, 158). Sa'i starts in Safa then pilgrims proceed to Marwah and do what they did at Safa, repeating this seven times (going is one round and coming back is one round).`,
  'It is Sunnah for men to jog between the two (green) marks in pursuit.',
  'Upon completion of the Umrah, men must shave their hair or shorten it, while women cut an inch or less from it.',
];
function MosqueSteps() {
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

export default MosqueSteps;
