import { focus } from '../../data/site';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

export default function Engineering() {
  return <Reveal><section className="section section-tight"><SectionHeading number="03" title="Engineering" copy="Areas I’m actively building depth in through projects and practice." /><div className="engineering-list">{focus.map((item, index) => <div key={item.title}><span>0{index + 1}</span><strong>{item.title}</strong><small>{item.description}</small></div>)}</div></section></Reveal>;
}
