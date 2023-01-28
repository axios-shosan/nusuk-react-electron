import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/FooterContainer';
import Home from './screens/Home';
import './App.css';
import UmrahZiyarah from './screens/UmrahZiyarah';
import Pillars from './screens/Pillars';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Umrah & Ziyarah">
            <Route path="About" element={<UmrahZiyarah />} />
            <Route path="pillars" element={<Pillars />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
