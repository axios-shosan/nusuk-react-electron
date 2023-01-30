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

          <Route path="umrah">
            <Route path="about" />
            <Route path="pillars" />
            <Route path="miqat" />
            <Route path="mosque" />
            <Route path="tips" />
            <Route path="accessibility" />
            <Route path="ziyarah" />
          </Route>

          <Route path="makkah">
            <Route path="accomodation" />
            <Route path="holy-sites" />
            <Route path="landmarks" />
            <Route path="shopping" />
            <Route path="food-drinks" />
            <Route path="to-makkah" />
          </Route>

          <Route path="madina">
            <Route path="accomodation" />
            <Route path="landmarks" />
            <Route path="shopping" />
            <Route path="food-drinks" />
            <Route path="to-madina" />
          </Route>
          <Route path="/makkah" element={<Makkah />} />
        </Routes>
      </Router>
    </>
  );
}
