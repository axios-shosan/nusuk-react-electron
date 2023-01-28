import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import './App.css';
import UmrahZiyarah from './screens/UmrahZiyarah';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Umrah & Ziyarah">
            <Route path="About" element={<UmrahZiyarah />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
