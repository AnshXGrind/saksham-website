import { lab } from '../../data/lab';
import { site } from '../../data/site';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

export default function Lab() {
  return <Reveal><section id="lab" className="section section-tight"><SectionHeading number="04" title="Lab" copy="Smaller experiments and learning threads. Useful context, not a trophy shelf." /><div className="lab-list">{lab.map((item, index) => <a href={site.github} target="_blank" rel="noreferrer" key={item.name}><span>0{index + 1}</span><div><strong>{item.name}</strong><small>{item.description}</small></div><em>{item.year} ↗</em></a>)}</div></section></Reveal>;
}
