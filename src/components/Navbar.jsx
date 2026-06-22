import { useState, useEffect } from 'react';
import { scrollToSection } from '../lenis';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const RESUME_URL = 'https://drive.google.com/file/d/1r23SOwGHWV23tu-5hnpgwZrH-wUeh1hF/view';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    scrollToSection(`#${id}`);
    setIsOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__container">
        <a
          href="#home"
          className="nav__brand"
          onClick={(e) => handleNav(e, 'home')}
        >
          Shoryan
        </a>

        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav__link ${active === link.id ? 'nav__link--active' : ''}`}
                onClick={(e) => handleNav(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav__resume"
          >
            Resume
            <span className="nav__resume-ic" aria-hidden="true">↓</span>
          </a>
        </div>

        <button
          className={`nav__burger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${isOpen ? 'nav__drawer--open' : ''}`}>
        <div className="nav__drawer-inner">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__drawer-link ${active === link.id ? 'nav__drawer-link--active' : ''}`}
              onClick={(e) => handleNav(e, link.id)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav__resume nav__resume--drawer"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
