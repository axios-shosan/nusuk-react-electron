import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Header from './components/Header';
import Makkah from './screens/Makkah';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makkah" element={<Makkah />} />
        </Routes>
      </Router>
    </>
  );
}
