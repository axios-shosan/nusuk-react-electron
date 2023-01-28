import Header from 'renderer/components/Header';
import UmrahAboutTop from 'renderer/components/UmrahAboutTop';
import UmrahAboutMain from 'renderer/components/UmrahAboutMain';
import UmrahAboutBot from 'renderer/components/UmrahAboutBot';
import Footer from 'renderer/components/Footer';
import styles from './styles.module.css';

function UmrahZiyarah() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <UmrahAboutTop />
        <UmrahAboutMain />
        <UmrahAboutBot />
      </div>
      <Footer />
    </>
  );
}

export default UmrahZiyarah;
