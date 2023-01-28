import image from '../../../Images/UmrahAboutMid.png';
import styles from './styles.module.css';

function UmrahAboutMain() {
  return (
    <div className={styles.wrapper}>
      <h1>About Umrah</h1>
      <img src={image} alt="" className={styles.image} />
      <p className={styles.subheading}>
        To preform Umrah, Pilgrims should book umrah permit easily using Nusuk
        app
      </p>
      <p>
        Umrah, also known as the "minor pilgrimage," is a non-mandatory Islamic
        pilgrimage to Mecca that can be undertaken at any time of the year. The
        rituals of Umrah are similar to those of the Hajj, but on a smaller
        scale. The main elements of Umrah include the Tawaf, which is the
        circumambulation of the Kaaba, and the Sa'i, which is the walking
        between the hills of Safa and Marwah.
      </p>
      <p>
        The Tawaf is performed by walking seven times counterclockwise around
        the Kaaba, the holiest site in Islam, while reciting prayers and
        supplications. The Sa'i involves walking back and forth seven times
        between the hills of Safa and Marwah, which are located near the Kaaba.
        In addition to these rituals, those undertaking Umrah are also required
        to perform the Wudu, which is the purification ritual, and to wear the
        Ihram, a white seamless garment that symbolizes equality and humility
        before God.
      </p>
    </div>
  );
}

export default UmrahAboutMain;
