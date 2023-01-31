import MiqatStep from '../MiqatStep';
import styles from './styles.module.css';

const text = [
  'Bathing and applying perfume, then men wear Ihram clothing and women enter Ihram wearing their normal clothes.',
  'Entering into the rituals and uttering the Talbiyah, saying Labbayka Allahuma Umrah (O Allah! Here I am in response to Your call to perform Umrah).',
  'Talbiyah begins as it was reported from Prophet Muhammad, peace be upon him: "Labbayka Allahumma labbayk, labbayka la sharika laka labbayk. Inna al-hamd wa’l-ni’mata laka wa’l-mulk, la sharika lak (Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise and blessings are Yours, and all sovereignty, You have no partner)." Talbiyah continues until pilgrims reach the Kaaba.',
  'General prohibitions of Ihram: sexual intercourse, marriage contract, hunting, shaving, cutting nails, and using perfume. During Ihram, men are not allowed to cover their heads or wear sewn clothes on any part of the body. Women are not allowed to wear niqab or gloves.',
  'During Ihram, it is permissible to take a bath, wear glasses, rings and watches, heal wounds, wear a belt or a purse around the body, wear slippers, and carry an umbrella.',
  'Those who enter Ihram should have good manners, abandon disputes, provide assistance to those who need it, and follow the instructions of the regulatory authorities.',
  'Important phone numbers related to Hajj and Umrah: (911) for emergency cases and security services, (937) for medical consultations.',
];
function UmrahMiqatSteps() {
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.header}>Steps to follow:</h2>
      <hr className={styles.divider} />
      <div className={styles.steps}>
        {text.map((content, id) => (
          <MiqatStep num={id + 1} content={content} />
        ))}
      </div>
    </div>
  );
}

export default UmrahMiqatSteps;
