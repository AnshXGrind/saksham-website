import { lab } from '../../data/lab';
import { site } from '../../data/site';
import SceneLabel from '../common/SceneLabel';

export default function LabScene() { return <div className="scene-content lab-content"><SceneLabel number="04">Lab</SceneLabel><div className="scene-heading"><span className="technical-eyebrow">FIELD NOTES / SMALLER WORK</span><h2 id="lab-title">Experiments<br /><em>in the margins.</em></h2></div><div className="lab-notebook">{lab.map((item, index) => <a key={item.name} href={site.github} target="_blank" rel="noreferrer"><span>0{index + 1}</span><strong>{item.name}</strong><small>{item.description}</small><i>{item.year} ↗</i></a>)}</div></div>; }
