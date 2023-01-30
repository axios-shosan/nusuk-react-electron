import Hero from 'renderer/components/Hero';
import Img from '../../../../assets/images/home/home-background.png';

export default function Home() {
  return (
    <div>
      <a href="/">H</a>
      <Hero image={Img} animation="expand" />;
    </div>
  );
}
