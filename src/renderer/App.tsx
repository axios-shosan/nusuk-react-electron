import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Header from './components/Header';
import Makkah from './screens/Makkah';
import Pillars from './screens/Pillars';
import Explore from './screens/Explore';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/pillars" element={<Pillars />} />
          <Route path="/" element={<Home />} />
          <Route path="/makkah" element={<Makkah />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </>
  );
}
