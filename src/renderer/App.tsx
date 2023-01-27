import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import './App.css';
import Header from './components/Header';
// import Page1 from './screens/Page1';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Umrah & Ziyarah">
            {/* <Route path="About" element={<Page1 />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}
