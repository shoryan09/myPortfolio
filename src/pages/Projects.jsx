import { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: '01',
    title: 'LINKWORK',
    mission: 'Connect. Connect. Build meaningful professional networks in a high-stakes ecosystem.',
    tech: ['REACT', 'NODE', 'EXPRESS', 'MONGODB', 'SOCKET.IO'],
    repo: 'https://github.com/shoryan09/Linkwork',
    live: 'https://github.com/shoryan09/Linkwork',
  },
  {
    id: '02',
    title: 'PASSX_FINAL',
    mission: 'AES encryption interface. Secure offline credential management protocol.',
    tech: ['REACT', 'NODE', 'EXPRESS', 'MONGODB'],
    repo: 'https://github.com/shoryan09/PassX_Final',
    live: 'https://github.com/shoryan09/PassX_Final',
  },
  {
    id: '03',
    title: 'LANGTON_ANT',
    mission: 'Simulation of emergent complexity using simple cellular automate logic.',
    tech: ['JS', 'HTML', 'CANVAS'],
    repo: 'https://github.com/shoryan09/langtons-ant',
    live: 'https://github.com/shoryan09/langtons-ant',
  },
  {
    id: '04',
    title: 'ANIHUB',
    mission: 'Anime metadata ingestion engine. AniList API integration.',
    tech: ['REACT', 'TAILWIND', 'AL_API'],
    repo: 'https://github.com/shoryan09/AniHub',
    live: 'https://github.com/shoryan09/AniHub',
  },
];

export default function Projects() {
  return (
    <main className="hud-projects">
      <div className="projects-view">
        <header className="projects-view__header">
          <h1 className="text-serif">Project archives</h1>
        </header>

        <div className="board-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="board-tile">
              <div className="tile-inner">
                {/* Front: Basic Info */}
                <div className="tile-front">
                  <div className="tile-id text-mono">{project.id}</div>
                  <h2 className="tile-title text-serif">{project.title}</h2>
                  <div className="tile-tech-preview text-mono">
                    {project.tech.slice(0, 3).join(' // ')}
                  </div>
                  <div className="tile-corner">▼</div>
                </div>

                {/* Back: Mission Details */}
                <div className="tile-back">
                  <span className="mission-label text-mono">MISSION_LOG //</span>
                  <p className="mission-text text-sans">{project.mission}</p>
                  
                  <div className="tile-tech-stack text-mono">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>

                  <div className="tile-actions">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="tile-btn text-mono">
                       SOURCE_CODE
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="tile-btn tile-btn--primary text-mono">
                       LIVE_LINK
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="projects-footer text-mono">
          [END_OF_ARCHIVES]
        </footer>
      </div>
    </main>
  );
}
