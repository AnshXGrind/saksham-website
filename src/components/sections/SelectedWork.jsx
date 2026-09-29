import { projects } from '../../data/projects';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import ProjectShowcase from '../projects/ProjectShowcase';

export default function SelectedWork() {
  return <Reveal><section id="work" className="section"><SectionHeading number="01" title="Selected work" copy="Two complete builds, each treated as a system rather than a collection of screens." /><div className="projects">{projects.map((project, index) => <ProjectShowcase key={project.slug} project={project} reverse={index === 1} />)}</div></section></Reveal>;
}
