import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

export default function About() {
  return <Reveal><section id="about" className="section section-tight"><SectionHeading number="02" title="About" /><div className="about-grid"><p className="about-lead">I’m a computer science student interested in the layer underneath the interface: how data moves, how services fail, where state lives, and how models become useful products.</p><div className="about-notes"><p><span>What I enjoy</span>Architecture, data flow, APIs, reliability, and shipping the whole thing.</p><p><span>How I work</span>Understand → design → build → validate → ship.</p><p><span>Why hackathons matter</span>They compress the build-feedback loop and make system boundaries visible.</p></div></div></section></Reveal>;
}
