import { useState, useRef, useEffect } from 'react';
import './Home.css';

/* Real project content migrated from the old Projects page.
   Add an entry here to add a project to the list. */
const PROJECTS = [
  {
    id: '01',
    title: 'Contextis',
    summary: 'Local-first Claude Code analytics platform with a published npm CLI agent for real-time usage tracking and cloud dashboard sync.',
    stack: ['Next.js', 'Node CLI tools', 'MongoDB', 'BullMQ', 'NextAuth'],
    repo: 'https://github.com/shoryan09/contextis',
    npm: 'https://www.npmjs.com/package/contextis',
  },
  {
    id: '02',
    title: 'Gunners Hub',
    summary:
      'AI-powered Arsenal FC fan hub with live data, RSS news, and RAG-based Q&A.',
    stack: ['JavaScript', 'React', 'Node.js', 'Express', 'Gemini', 'Pinecone', 'Tailwind CSS'],
    repo: 'https://github.com/shoryan09/arsenalMM',
  },
  {
    id: '03',
    title: 'LinkWork',
    summary: 'A minimalist freelancing platform connecting clients.',
    stack: ['TypeScript', 'React.js', 'MongoDB', 'Express', 'Socket.IO'],
    repo: 'https://github.com/shoryan09/Linkwork',
  },
  {
    id: '04',
    title: 'PassX: Password Manager',
    summary:
      'Password Manager. AES encryption interface. Secure offline credential management protocol.',
    stack: ['React', 'TypeScript', 'Web Crypto API', 'MongoDB', 'Firebase', 'Postman'],
    repo: 'https://github.com/shoryan09/PassX_Final',
  },
  {
    id: '05',
    title: "Langton's Ant",
    summary:
      'Simulation of emergent complexity using simple cellular automate logic.',
    stack: ['JavaScript', 'React', 'HTML Canvas'],
    repo: 'https://github.com/shoryan09/langtons-ant',
  },
];

const CONTACT_SOCIALS = [
  { label: 'GITHUB', handle: '@shoryan09', href: 'https://github.com/shoryan09' },
  {
    label: 'LINKEDIN',
    handle: 'shoryanroy',
    href: 'https://www.linkedin.com/in/shoryanroy',
  },
  { label: 'X_CORP', handle: '@shoryanroy', href: 'https://x.com/shoryanroy' },
  {
    label: 'EMAIL',
    handle: 'royshoryan01209@gmail.com',
    href: 'mailto:royshoryan01209@gmail.com',
  },
];

export default function Home() {
  // Tap-to-reveal on touch / mobile (desktop reveals on hover via CSS).
  const [activeProject, setActiveProject] = useState(null);
  const projectsRef = useRef(null);

  // Close the open project when clicking anywhere outside the projects section.
  useEffect(() => {
    if (!activeProject) return;
    const handleOutside = (e) => {
      if (projectsRef.current && !projectsRef.current.contains(e.target)) {
        setActiveProject(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [activeProject]);

  return (
    <main className="home">
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section id="home" className="hero">
        <div className="hero__inner">
          <div className="hero__marker text-mono">
            <span className="hero__dot" />
            available for work
          </div>

          <h1 className="hero__name">
            Shoryan Roy
          </h1>

          <p className="hero__sub">
            Building full-stack applications with a focus on performance, clean
            design, and scalable backend systems.
          </p>
        </div>
      </section>

      {/* ─── Projects ──────────────────────────────────────── */}
      <section id="projects" className="projects" ref={projectsRef}>
        <h2 className="projects__heading">Projects</h2>
        <ul className="projects__list">
          {PROJECTS.map((project) => (
            <li
              key={project.id}
              className={`project ${activeProject === project.id ? 'project--active' : ''}`}
              onClick={() =>
                setActiveProject((cur) =>
                  cur === project.id ? null : project.id
                )
              }
            >
              <span className="project__name">{project.title}</span>
              <div className="project__detail">
                <p className="project__summary">{project.summary}</p>
                <div className="project__stack">
                  {project.stack.map((tech) => (
                    <span className="stack-chip text-mono" key={tech}>{tech}</span>
                  ))}
                </div>
                <a
                  className="project__link text-mono"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
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
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
