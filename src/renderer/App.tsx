import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/FooterContainer';
import './App.css';
import Home from './screens/Home';
import UmrahZiyarah from './screens/UmrahZiyarah';
import Miqat from './screens/Miqat';
import Pillars from './screens/Pillars';
import Header from './components/Header';
import Makkah from './screens/Makkah';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Umrah & Ziyarah">
            <Route path="About" element={<UmrahZiyarah />} />
            <Route path="Miqat" element={<Miqat />} />
            <Route path="pillars" element={<Pillars />} />
          </Route>
          <Route path="Makkah" element={<Makkah />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
