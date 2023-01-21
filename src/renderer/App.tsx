import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Tmp from './screens/tmp';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tmp" element={<Tmp />} />
        </Routes>
      </Router>
    </div>
  );
}
