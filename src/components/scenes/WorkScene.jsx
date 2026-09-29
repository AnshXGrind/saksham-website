import { projects } from '../../data/projects';
import SceneLabel from '../common/SceneLabel';
import ProjectOrbitCard from '../projects/ProjectOrbitCard';

export default function WorkScene() { return <div className="scene-content work-content"><SceneLabel number="02">Work</SceneLabel><div className="work-intro"><span className="technical-eyebrow">FLAGSHIP BUILDS</span><h2 id="work-title">Systems<br /><em>in motion.</em></h2><p>Two end-to-end builds where the model, backend, constraints, and interface have to agree.</p></div><div className="orbit-projects">{projects.map((project) => <ProjectOrbitCard key={project.slug} project={project} />)}</div></div>; }
