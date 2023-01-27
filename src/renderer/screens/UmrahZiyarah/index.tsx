import Header from 'renderer/components/Header';
import UmrahAboutTop from 'renderer/components/UmrahAboutTop';
import UmrahAboutMain from 'renderer/components/UmrahAboutMain';
import UmrahAboutBot from 'renderer/components/UmrahAboutBot';
import styles from './styles.module.css';

function UmrahZiyarah() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <UmrahAboutTop />
      <UmrahAboutMain />
      <UmrahAboutBot />
    </div>
  );
}

export default UmrahZiyarah;
