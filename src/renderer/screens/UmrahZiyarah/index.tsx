import UmrahTop from 'renderer/components/UmrahTop';
import UmrahAboutMain from 'renderer/components/UmrahAboutMain';
import UmrahAboutBot from 'renderer/components/UmrahAboutBot';
import styles from './styles.module.css';

function UmrahZiyarah() {
  return (
    <div className={styles.wrapper}>
      <UmrahTop />
      <UmrahAboutMain />
      <UmrahAboutBot />
    </div>
  );
}

export default UmrahZiyarah;
