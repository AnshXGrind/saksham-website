import { site } from '../../data/site';

export default function Hero() {
  return <section className="hero">
    <span className="eyebrow">{site.name} / COMPUTER SCIENCE</span>
    <h1>{site.name}<br /><em>ML · Backend · Systems</em></h1>
    <p>I build software end-to-end — from models and data to APIs, architecture, and the product people actually use.</p>
    <div className="hero-actions"><a className="button button-dark" href="#work">View work <span aria-hidden="true">↓</span></a><a className="button button-light" href={site.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></div>
    <div className="hero-note"><span>Currently working across</span><strong>ML / backend / systems / hackathons</strong></div>
  </section>;
}
