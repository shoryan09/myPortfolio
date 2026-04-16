import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="ambient-bg" aria-hidden="true" />
      <div className="page-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
