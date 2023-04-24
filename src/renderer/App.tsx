import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import MakkahLayout from './components/layouts/MakkahLayout';
import Home from './screens/Home';
import MakkahAccomodation from './screens/MakkahAccomodation';
import ToMakkah from './screens/ToMakkah';
import Pillars from './screens/Pillars';
import Explore from './screens/Explore';
import UmrahLayout from './components/layouts/UmrahLayout';
import Miqat from './screens/Miqat';
import AboutUmrah from './screens/AboutUmrah';
import Mosque from './screens/Mosque';
import Tips from './screens/Tips';
import MakkahHolySite from './screens/MakkahHolySite';
import MakkahLandmarks from './screens/MakkahLandmarks';
import MakkahFood from './screens/MakkahFood';
import MakkahShopping from './screens/MakkahShopping';
import MadinaLayout from './components/layouts/MadinaLayout';
import MadinaAccomodation from './screens/MadinaAccomodation';
import MadinaLandmarks from './screens/MadinaLandmarks';
import MadinaShopping from './screens/MadinaShopping';
import MadinaFood from './screens/MadinaFood';
import ToMadina from './screens/ToMadina';
import About from './screens/About';
import UmrahAccessibility from './screens/UmrahAccessibility';
import Ziyarah from './screens/Ziyarah';
import Iframe from './components/Iframe';
import Splash from './components/Splash';
// import Makkah from './screens/Makkah';

export default function App() {
  const [rendered, setRendered] = useState(false);
  function redirectToHomepage() {
    setRendered(true);
    if (window.location.href !== '/home') window.location.href = '/home'; // or whatever your homepage would be
  }
 
  let redirectTimeoutId: number;
  
  return (
    <div
      // onTouchEnd={() => {
      //   window.clearTimeout(redirectTimeoutId);
      //   redirectTimeoutId = window.setTimeout(redirectToHomepage, 70000);
      // }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={!rendered ? <Splash /> : <Navigate to={'/home'} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="explore" element={<Explore />} />

          <Route path="/about" element={<About />} />

          <Route path="/umrah" element={<UmrahLayout />}>
            <Route path="about" element={<AboutUmrah />} />
            <Route path="pillars" element={<Pillars />} />
            <Route path="miqat" element={<Miqat />} />
            <Route path="mosque" element={<Mosque />} />
            <Route path="tips" element={<Tips />} />

            <Route path="accessibility" element={<UmrahAccessibility />} />
            <Route path="ziyarah" element={<Ziyarah />} />
          </Route>

          <Route path="makkah" element={<MakkahLayout />}>
            <Route path="accomodation" element={<MakkahAccomodation />} />
            <Route path="holy-sites" element={<MakkahHolySite />} />
            <Route path="landmarks" element={<MakkahLandmarks />} />
            <Route path="shopping" element={<MakkahShopping />} />
            <Route path="food-drinks" element={<MakkahFood />} />
            <Route path="to-makkah" element={<ToMakkah />} />
            <Route path="" element={<Navigate to="/makkah/accomodation" />} />
          </Route>

          <Route path="madina" element={<MadinaLayout />}>
            <Route path="accomodation" element={<MadinaAccomodation />} />
            <Route path="landmarks" element={<MadinaLandmarks />} />
            <Route path="shopping" element={<MadinaShopping />} />
            <Route path="food-drinks" element={<MadinaFood />} />
            <Route path="to-madina" element={<ToMadina />} />
          </Route>
          <Route path="/iframe" element={<Iframe />} />
        </Routes>
      </Router>
    </div>
  );
}
