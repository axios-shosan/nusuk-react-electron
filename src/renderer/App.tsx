import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Pillars from './screens/Pillars';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Pillars />} />
        </Routes>
      </Router>
    </>
  );
}
