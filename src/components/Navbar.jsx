import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/', label: 'SYS/HOME', id: 'nav-home' },
  { path: '/projects', label: 'DB/PROJECTS', id: 'nav-projects' },
  { path: '#contact', label: 'COMMS/CONTACT', id: 'nav-contact', isHash: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`hud-nav ${scrolled ? 'hud-nav--scrolled' : ''}`}>
      <div className="hud-nav__container">
        
        <NavLink to="/" className="hud-nav__logo">
          <span className="hud-logo-icon">▲</span>
          <span className="hud-logo-text">SHORYAN</span>
        </NavLink>

        {/* Links Array */}
        <ul className={`hud-nav__links ${isOpen ? 'hud-nav__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              {link.isHash ? (
                <a 
                  href={link.path} 
                  className="hud-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `hud-link ${isActive ? 'hud-link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* HUD Action */}
        <div className="hud-nav__actions">
          <a href="https://drive.google.com/file/d/1QAhDrRq2XPwIL-9U6SYgX8Ug8XjTWYFl/view" target="_blank" rel="noopener noreferrer" className="hud-btn">
            [ ARCHIVE_RESUME ] ↗
          </a>
        </div>

        {/* Burger for mobile */}
        <button className={`hud-hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`hud-drawer ${isOpen ? 'hud-drawer--open' : ''}`}>
        <div className="hud-drawer__inner">
           {NAV_LINKS.map((link) => (
            <div key={link.id + '-mobile'}>
               {link.isHash ? (
                <a href={link.path} className="hud-drawer__link" onClick={closeMenu}>{link.label}</a>
               ) : (
                <NavLink to={link.path} className="hud-drawer__link" onClick={closeMenu}>{link.label}</NavLink>
               )}
            </div>
           ))}
           <a href="https://drive.google.com/file/d/1UBvikWyyJ-6xgRibAdHKHa1iiPc3B5Kp/view" target="_blank" rel="noopener noreferrer" className="hud-btn hud-drawer__btn">
            [ ARCHIVE_RESUME ]
          </a>
        </div>
      </div>
    </nav>
  );
}
