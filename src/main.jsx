import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const focus = [
  'Machine Learning',
  'Backend Engineering',
  'System Design',
  'ML Systems',
  'Software Engineering',
  'Hackathons',
  'AI Architecture',
  'AI Agent Design',
];

const now = [
  'System design and backend architecture',
  'Machine learning systems and evaluation',
  'Distributed systems and production engineering',
  'Hackathon preparation and fast product loops',
];

function WindowChrome({ label }) {
  return (
    <div className="window-chrome">
      <div className="window-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="window-label">{label}</span>
    </div>
  );
}

function RailVisual() {
  return (
    <div className="project-visual rail-visual">
      <WindowChrome label="rail-yojna / control-room" />
      <div className="rail-board" aria-label="Rail-Yojna system flow visualization">
        <div className="rail-board-label">OPERATIONS / DECISION SUPPORT</div>
        <div className="rail-metric rail-metric-risk"><span>ASSET RISK</span><strong>0.81</strong><small>calibrated probability</small></div>
        <div className="rail-metric rail-metric-plan"><span>MAINTENANCE WINDOW</span><strong>12:40</strong><small>constraint checked</small></div>
        <div className="rail-metric rail-metric-decision"><span>RECOMMENDATION</span><strong>REVIEW</strong><small>human approval</small></div>
        <div className="rail-path"><i /><i /><i /></div>
      </div>
      <div className="rail-flow"><span>DATA</span><i /><span>MODEL</span><i /><span>OPTIMIZE</span><i /><span>REVIEW</span>
      </div>
    </div>
  );
}

function LexiVisual() {
  return (
    <div className="project-visual lexi-visual">
      <WindowChrome label="lexiscan / assessment" />
      <div className="lexi-screen">
        <div className="lexi-header">
          <span>SCREENING</span>
          <span>04 / 08</span>
        </div>
        <div className="lexi-title">Find the pattern<br />that completes the sequence.</div>
        <div className="lexi-options" aria-hidden="true">
          <div><span /></div>
          <div><span className="shape-two" /></div>
          <div><span className="shape-three" /></div>
          <div><span className="shape-four" /></div>
        </div>
        <div className="lexi-progress"><span /></div>
      </div>
    </div>
  );
}

function ProjectCard({ project, reverse = false }) {
  return (
    <article className={`project ${reverse ? 'project-reverse' : ''}`}>
      {!reverse && project.visual}
      <div className="project-copy">
        <div className="project-meta"><span>{project.number} / SELECTED WORK</span><span>{project.type}</span></div>
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.subtitle}</p>
        <p>{project.description}</p>
        <div className="project-details">
          {project.details.map(([label, value]) => <p key={label}><span>{label}</span>{value}</p>)}
        </div>
        <div className="project-tech">{project.tech}</div>
        <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
          View repository <span aria-hidden="true">↗</span>
        </a>
      </div>
      {reverse && project.visual}
    </article>
  );
}

const projects = [
  {
    number: '01', type: 'END-TO-END SYSTEM', title: 'Rail-Yojna', subtitle: 'Planning infrastructure for railway maintenance.',
    description: 'A decision-support system that connects risk prediction, maintenance planning, optimization, operational constraints, validation, and a React interface.',
    details: [['Problem', 'Turn operational data and competing constraints into a plan that people can inspect.'], ['System', 'A pipeline from data and ML signals through optimization to human review.'], ['Layers', 'ML · FastAPI · OR-Tools · React'], ['Validation', 'Safety checks, constraint handling, and reviewable recommendations.']],
    tech: 'Python · FastAPI · React · Machine Learning · OR-Tools', href: 'https://github.com/AnshXGrind/Rail-Yojna', visual: <RailVisual />,
  },
  {
    number: '02', type: 'END-TO-END PRODUCT', title: 'LexiScan', subtitle: 'Learning-difficulty screening designed as an experience.',
    description: 'An interactive learning-difficulty screening platform built with React and TypeScript, with assessment flows, results, progress, and guidance in one product.',
    details: [['Problem', 'Make a sensitive screening flow clear, calm, and easy to move through.'], ['Product flow', 'Assessment → responses → results → progress and guidance.'], ['Implementation', 'React and TypeScript with reusable interaction patterns.'], ['UX', 'Readable layouts, focused tasks, and accessible product decisions.']],
    tech: 'TypeScript · React · Vite · Tailwind', href: 'https://github.com/AnshXGrind/lexiscan', visual: <LexiVisual />,
  },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="Saksham Garg home">SG</a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#lab">Lab</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-status" href="mailto:anshgarg2512@gmail.com">Say hello <span aria-hidden="true">↗</span></a>
    </header>
  );
}

function SectionHead({ number, title, copy }) {
  return (
    <div className="section-head">
      <div className="section-kicker">{number}</div>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll('.reveal')];
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      nodes.forEach((node) => node.classList.add('revealed'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Nav />
      <main id="top">
        <section className="hero reveal revealed">
          <div className="eyebrow">WORKS ON BACKEND SYSTEM MACHINE LEARNING SYSTEM DESIGNING AI ARCHITECture </div>
          <h1>SAKSHAM </h1> <h1><em>GARG</em>  </h1>
          <p className="hero-copy">
            I build complete software systems: from data and models to APIs, interfaces, architecture, and the details that make a product usable.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">View work <span aria-hidden="true">↓</span></a>
            <a className="button button-light" href="https://github.com/AnshXGrind" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-note"><span>Currently building across</span><strong>ML / backend / systems / hackathons</strong></div>
        </section>

        <section className="marquee-band" aria-label="Areas of focus">
          <div className="marquee-track">
            {[...focus, ...focus].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}<b>✦</b>
              </span>
            ))}
          </div>
        </section>

        <section id="work" className="section reveal">
          <SectionHead number="01" title="Selected work" copy="Two complete builds, each treated as a system rather than a collection of screens." />
          <div className="projects">
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} reverse />
          </div>
        </section>

        <section id="about" className="section section-tight reveal">
          <SectionHead number="02" title="About" />
          <div className="about-grid">
            <p className="about-lead">
              I’m a computer science student interested in the layer underneath the interface: how data moves, how services fail, where state lives, and how models become useful products.
            </p>
            <div className="about-notes">
              <p><span>What I enjoy</span> Architecture, data flow, APIs, reliability, and shipping the whole thing.</p>
              <p><span>How I work</span> Understand → design → build → validate → ship.</p>
              <p><span>Why hackathons matter</span> They make the feedback loop short and the system boundaries visible.</p>
            </div>
          </div>
        </section>

        <section className="section section-tight engineering reveal">
          <SectionHead number="03" title="Engineering" copy="Areas I’m actively building depth in, through projects and practice." />
          <div className="engineering-list">
            {focus.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><i aria-hidden="true">↗</i></div>)}
          </div>
        </section>

        <section id="lab" className="section section-tight reveal">
          <SectionHead number="04" title="Lab" copy="Smaller experiments and learning threads. Useful context, not a trophy shelf." />
          <div className="lab-list">
            {['RAG experiments', 'ML notebooks', 'Computer vision experiments', 'Small web products'].map((item, index) => <a href="https://github.com/AnshXGrind" target="_blank" rel="noreferrer" key={item}><span>0{index + 1}</span><strong>{item}</strong><i aria-hidden="true">↗</i></a>)}
          </div>
        </section>

        <section className="section section-tight now-section reveal">
          <SectionHead number="05" title="Now" copy="A short list of what I’m improving next." />
          <div className="now-grid">{now.map((item, index) => <div className="now-item" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
        </section>

        <section id="contact" className="contact reveal">
          <div className="contact-inner">
            <div className="section-kicker">06 / CONTACT</div>
            <h2>Have a project<br /><em>or want to build something?</em></h2>
            <p>Open to thoughtful collaborations, hackathons, and conversations about building useful systems.</p>
            <a className="contact-mail" href="mailto:anshgarg2512@gmail.com">anshgarg2512@gmail.com <span>↗</span></a>
            <div className="contact-links">
              <a href="https://github.com/AnshXGrind" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/sakshamgrg" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://saksham-main.vercel.app" target="_blank" rel="noreferrer">Portfolio ↗</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Saksham Garg</span>
       <span style="font-family: 'Orbitron', sans-serif; color: blue;">Velarix</span>
 
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
