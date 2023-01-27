import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './screens/Home';
import './App.css';
// import Page1 from './screens/Page1';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Umrah & Ziyarah">
            {/* <Route path="About" element={<Page1 />} /> */}
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
