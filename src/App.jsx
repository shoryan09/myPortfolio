import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { initLenis } from './lenis';
import { Analytics } from "@vercel/analytics/react"
import './index.css';

export default function App() {
  // Single app-level Lenis instance with the standard rAF loop.
  useEffect(() => {
    const teardown = initLenis();
    return () => {
      if (teardown) teardown();
    };
  }, []);

  return (
    <>
      <div className="ambient-bg" aria-hidden="true" />
      <div className="page-wrapper">
        <Navbar />
        <Home />
        <Footer />
      </div>
      <Analytics />
    </>
  );
}
