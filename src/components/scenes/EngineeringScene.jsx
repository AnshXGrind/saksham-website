import { focus } from '../../data/site';
import SceneLabel from '../common/SceneLabel';

export default function EngineeringScene() { return <div className="scene-content engineering-content"><SceneLabel number="03">Engineering</SceneLabel><div className="scene-heading"><span className="technical-eyebrow">CURRENT PRACTICE</span><h2 id="engineering-title">How I<br /><em>think in layers.</em></h2></div><div className="discipline-list">{focus.map((item, index) => <div key={item.title}><span>0{index + 1}</span><strong>{item.title}</strong><small>{item.description}</small></div>)}</div></div>; }
