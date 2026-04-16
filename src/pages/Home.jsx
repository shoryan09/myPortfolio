import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* ── Typing effect Hook ──────────────────────────────────── */
function useTypingEffect(words, speed = 80, pause = 2000) {
  const ref = useRef(null);
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;
    const type = () => {
      const current = words[wordIndex];
      if (!ref.current) return;
      if (!deleting) {
        ref.current.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(type, pause);
          return;
        }
      } else {
        ref.current.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeout = setTimeout(type, deleting ? speed / 2 : speed);
    };
    timeout = setTimeout(type, 400);
    return () => clearTimeout(timeout);
  }, [words, speed, pause]);
  return ref;
}

const ROLES = ['Full Stack Developer', 'Problem Solver', 'Open Source Enthusiast', 'UI UX Enthusiast'];

const STACK_GROUPS = [
  { 
    label: 'LANGUAGES //', 
    items: ['C/C++', 'Python', 'JavaScript', 'HTML/CSS'] 
  },
  { 
    label: 'FRAMEWORKS_LIBS //', 
    items: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'Tailwind CSS'] 
  },
  { 
    label: 'DATABASES //', 
    items: ['MongoDB', 'PostgreSQL'] 
  },
  { 
    label: 'TOOLS //', 
    items: ['Git', 'Postman', 'Docker', 'VS Code'] 
  },
  { 
    label: 'PLATFORMS_SERVICES //', 
    items: ['Firebase', 'MongoDB Atlas', 'Vercel', 'Render', 'GitHub Pages'] 
  },
];

const CONTACT_SOCIALS = [
  { label: 'GITHUB', handle: '@shoryan09', href: 'https://github.com/shoryan09' },
  { label: 'LINKEDIN', handle: 'shoryanroy', href: 'https://www.linkedin.com/in/shoryanroy' },
  { label: 'X_CORP', handle: '@shoryanroy', href: 'https://x.com/shoryanroy' },
  { label: 'EMAIL', handle: 'royshoryan01209@gmail.com', href: 'mailto:royshoryan01209@gmail.com' },
];

export default function Home() {
  const typingRef = useTypingEffect(ROLES);
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

  return (
    <main className="hud-home">
      {/* ─── Cinematic Hero ────────────────────────────────── */}
      <section className="grandmaster-hero">
        <div className="gm-hero__backdrop">
          <div className="gm-hero__slash" />
        </div>
        
        <div className="gm-hero__content">
          <div className="gm-hero__meta text-mono">
            <span className="pulsing-node" />
            AVAILABLE FOR WORK
          </div>

          <h1 className="gm-hero__title text-serif">
             Shoryan <span className="text-crimson">Roy</span>
          </h1>

          <div className="gm-hero__role text-sans">
            &gt; <span ref={typingRef} />
            <span className="cursor-block">_</span>
          </div>

          <p className="gm-hero__bio text-sans">
            I build full-stack applications with a focus on performance, clean design, and scalable backend systems.
          </p>

          <div className="gm-hero__actions">
            <Link to="/projects" className="gm-btn gm-btn--primary text-mono">
              PROJECT_ARCHIVES
            </Link>
          </div>

          <div className="gm-hero__stats text-mono">
             <div className="stat-block">
                <span className="stat-label">CHESS.COM_RAPID</span>
                <span className="stat-val">1709 <span className="live-dot-indicator" /></span>
             </div>
          </div>
        </div>
      </section>

      {/* ─── Tech Matrix ───────────────────────────────────── */}
      <section className="data-stack">
        <div className="data-stack__header">
          <h2 className="text-serif">TECH STACK</h2>
          <div className="header-line" />
        </div>

        <div className="stack-grid">
          {STACK_GROUPS.map((group) => (
            <div key={group.label} className="stack-cluster">
              <span className="cluster-label text-mono">{group.label}</span>
              <div className="cluster-nodes">
                {group.items.map((tech) => (
                  <div key={tech} className="node-item text-mono">{tech}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Terminal Contact ──────────────────────────────── */}
      <section className="terminal-contact" id="contact">
        <div className="terminal-box">
          <div className="terminal-header text-mono">
            <span className="term-circle red" />
            <span className="term-circle yellow" />
            <span className="term-circle green" />
            ROOT@SHORYAN: ~ / CONTACT_INIT
          </div>
          <div className="terminal-body text-mono">
            <p className="term-cmd">root@shoryan:~# ./connect.sh</p>
            
            <div className="term-links">
              {CONTACT_SOCIALS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  [{social.label}] // {social.handle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
