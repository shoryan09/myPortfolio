import { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-GB', { 
    timeZone: 'Asia/Kolkata', 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  const year = new Date().getFullYear();

  return (
    <footer className="hud-footer">
      <div className="hf-container">
        <span className="hf-status text-mono">
          EOF // {year}
        </span>
        <span className="hf-brand text-sans">
          Shoryan Roy
        </span>
        <span className="hf-meta text-mono">
          [ NEW DELHI, INDIA // {formattedTime} ]
        </span>
      </div>
    </footer>
  );
}
