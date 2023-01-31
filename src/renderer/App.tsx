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
import Explore from './screens/Explore';
import UmrahLayout from './components/layouts/UmrahLayout';
import Miqat from './screens/Miqat';
import Header from './components/Header';
import AboutUmrah from './screens/AboutUmrah';
import Mosque from './screens/Mosque';
import Tips from './screens/Tips';
// import Makkah from './screens/Makkah';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="explore" element={<Explore />} />

          <Route path="/umrah" element={<UmrahLayout />}>
            <Route path="about" element={<AboutUmrah />} />
            <Route path="pillars" element={<Pillars />} />
            <Route path="miqat" element={<Miqat />} />
            <Route path="mosque" element={<Mosque />} />
            <Route path="tips" element={<Tips />} />
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
