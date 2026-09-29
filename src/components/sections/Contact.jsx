import { site } from '../../data/site';
import ArrowLink from '../common/ArrowLink';
import Reveal from '../common/Reveal';

export default function Contact() {
  return <Reveal><section id="contact" className="contact"><div className="contact-inner"><span className="eyebrow">06 / CONTACT</span><h2>Have a project<br /><em>or want to build something?</em></h2><p>Open to thoughtful collaborations, hackathons, and conversations about building useful systems.</p><a className="contact-mail" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a><div className="contact-links"><ArrowLink href={site.github}>GitHub</ArrowLink><ArrowLink href={site.linkedin}>LinkedIn</ArrowLink></div></div></section></Reveal>;
}
