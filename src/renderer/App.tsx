import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Tmp from './screens/tmp';
import NavBar from './components/NavBar';
import UmrahAndZiyarah from './screens/Umrah And Ziyarah/UmrahAndZiyarah';
export default function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<UmrahAndZiyarah/>} />
          <Route path="/UmrahAndZiyarah" element={<UmrahAndZiyarah />} />
          <Route path="/tmp" element={<Tmp />} />
        </Routes>
      </Router>
    </div>
  );
}
