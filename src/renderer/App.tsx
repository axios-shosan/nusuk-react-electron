import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import MakkahLayout from './components/layouts/MakkahLayout';
import Home from './screens/Home';
import MakkahAccomodation from './screens/MakkahAccomodation';
import ToMakkah from './screens/ToMakkah';
import Pillars from './screens/Pillars';
// import Makkah from './screens/Makkah';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/pillars" element={<Pillars />} />
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

          <Route path="makkah" element={<MakkahLayout />}>
            <Route path="accomodation" element={<MakkahAccomodation />} />
            <Route path="holy-sites" />
            <Route path="landmarks" />
            <Route path="shopping" />
            <Route path="food-drinks" />
            <Route path="to-makkah" element={<ToMakkah />} />
            <Route path="" element={<Navigate to="/makkah/accomodation" />} />
          </Route>

          <Route path="madina">
            <Route path="accomodation" />
            <Route path="landmarks" />
            <Route path="shopping" />
            <Route path="food-drinks" />
            <Route path="to-madina" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
