import { now } from '../../data/site';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

export default function Now() {
  return <Reveal><section className="section section-tight"><SectionHeading number="05" title="Now" copy="A short list of what I’m improving next." /><div className="now-list">{now.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></section></Reveal>;
}
