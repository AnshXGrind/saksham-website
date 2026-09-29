import { site } from '../../data/site';
import ArrowLink from '../common/ArrowLink';
import SceneLabel from '../common/SceneLabel';

export default function ContactScene() { return <div className="scene-content contact-content"><SceneLabel number="06">Contact</SceneLabel><div className="contact-orbit-copy"><span className="technical-eyebrow">FINAL NOTE / OPEN CHANNEL</span><h2 id="contact-title">Let’s build<br /><em>something useful.</em></h2><p>For thoughtful collaborations, hackathons, or a good technical conversation.</p><div className="contact-actions"><a className="email-link" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a><div><ArrowLink href={site.github}>GitHub</ArrowLink><ArrowLink href={site.linkedin}>LinkedIn</ArrowLink></div></div></div></div>; }
