import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    number: '01',
    year: '2026',
    title: 'Rail-Yojna',
    subtitle: 'AI-assisted railway maintenance & planning.',
    description:
      'An end-to-end decision-support system combining risk prediction, maintenance planning, optimization, operational constraints, safety evaluation, and human review.',
    tech: 'Python · FastAPI · React · ML · OR-Tools',
    href: 'https://github.com/AnshXGrind/Rail-Yojna',
    visual: 'rail',
  },
  {
    number: '02',
    year: '2026',
    title: 'LexiScan',
    subtitle: 'Accessible screening, designed as a product.',
    description:
      'An interactive platform for learning-difficulty screening with cognitive assessments, results analysis, progress tracking, and personalized guidance.',
    tech: 'TypeScript · React · Vite · Tailwind',
    href: 'https://github.com/AnshXGrind/lexiscan',
    visual: 'lexi',
  },
];

const focus = [
  'Machine Learning',
  'Backend Engineering',
  'System Design',
  'AI Systems',
  'Hackathons',
  'Onchain',
];

const stack = [
  ['Languages', 'Python · C++ · TypeScript · JavaScript'],
  ['AI / ML', 'PyTorch · scikit-learn · Pandas · NumPy · RAG'],
  ['Backend', 'FastAPI · REST · Databases · APIs · System Design'],
  ['Frontend', 'React · Vite · Tailwind CSS'],
  ['Infrastructure', 'Docker · Linux · Git · Vercel'],
  ['Exploring', 'Ethereum · Solidity · Smart Contracts · AI Agents'],
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
      <div className="rail-board">
        <div className="rail-column">
          <span className="rail-muted">ASSET RISK</span>
          <strong>0.81</strong>
          <small>calibrated probability</small>
        </div>
        <div className="rail-column rail-middle">
          <span className="rail-chip">MAINTENANCE</span>
          <span className="rail-chip">TRAIN WINDOW</span>
          <span className="rail-chip">SAFETY</span>
        </div>
        <div className="rail-column rail-right">
          <span className="rail-muted">RECOMMENDATION</span>
          <strong>APPROVE</strong>
          <small>human review required</small>
        </div>
      </div>
      <div className="rail-flow">
        <span>DATA</span><i />
        <span>RISK</span><i />
        <span>PLAN</span><i />
        <span>DECIDE</span>
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
        <div className="lexi-title">Which pattern<br />matches the sequence?</div>
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
      {!reverse && project.visual === 'rail' && <RailVisual />}
      {!reverse && project.visual === 'lexi' && <LexiVisual />}
      <div className="project-copy">
        <div className="project-meta"><span>{project.number}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.subtitle}</p>
        <p>{project.description}</p>
        <div className="project-tech">{project.tech}</div>
        <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
          View repository <span>↗</span>
        </a>
      </div>
      {reverse && project.visual === 'lexi' && <LexiVisual />}
      {reverse && project.visual === 'rail' && <RailVisual />}
    </article>
  );
}

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
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-status" href="mailto:anshgarg2512@gmail.com">
        <span /> Available
      </a>
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
          <div className="eyebrow">ML · BACKEND · SYSTEMS · HACKATHONS</div>
          <h1>I build intelligent<br /><em>systems that ship.</em></h1>
          <p className="hero-copy">
            I’m Saksham Garg — a computer science student building end-to-end products across machine learning,
            backend engineering, system design, and emerging onchain technology.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Selected work <span>↓</span></a>
            <a className="button button-light" href="https://github.com/AnshXGrind" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
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
          <SectionHead number="01" title="Selected work" copy="Two complete builds. Different problems. The same obsession with making the whole system work." />
          <div className="projects">
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} reverse />
          </div>
        </section>

        <section id="about" className="section section-tight reveal">
          <SectionHead number="02" title="About" />
          <div className="about-grid">
            <p className="about-lead">
              I like the layer underneath the interface: how data moves, how services fail, where state lives,
              how models behave, and how all of it becomes one coherent product.
            </p>
            <div className="about-notes">
              <p><span>Currently</span> Deepening ML, backend engineering and system design.</p>
              <p><span>Exploring</span> Distributed systems, LLM systems, Ethereum, smart contracts and AI agents.</p>
              <p><span>Approach</span> Understand → design → build → validate → ship.</p>
            </div>
          </div>
        </section>

        <section id="stack" className="section section-tight reveal">
          <SectionHead number="03" title="Stack" copy="The tools I reach for when an idea needs to become a working system." />
          <div className="stack-list">
            {stack.map(([label, value]) => (
              <div className="stack-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-tight reveal">
          <SectionHead number="04" title="Now" copy="What’s next is deliberately simple." />
          <div className="now-grid">
            <div className="now-item"><span>01</span><p>Get stronger at system design and backend architecture.</p></div>
            <div className="now-item"><span>02</span><p>Build better AI systems instead of isolated ML demos.</p></div>
            <div className="now-item"><span>03</span><p>Take that engineering discipline into onchain products and hackathons.</p></div>
          </div>
        </section>

        <section id="contact" className="contact reveal">
          <div className="contact-inner">
            <div className="section-kicker">05</div>
            <h2>Let’s build<br /><em>something real.</em></h2>
            <p>For collaborations, hackathons, ideas, or just a good technical conversation.</p>
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
        <span>Built with React + Vite</span>
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
