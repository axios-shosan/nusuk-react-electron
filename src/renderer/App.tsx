import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/FooterContainer';
import Home from './screens/Home';
import './App.css';
import Header from './components/Header';
import UmrahZiyarah from './screens/UmrahZiyarah';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Umrah & Ziyarah">
            <Route path="About" element={<UmrahZiyarah />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
