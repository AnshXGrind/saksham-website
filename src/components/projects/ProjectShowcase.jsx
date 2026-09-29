import ArrowLink from '../common/ArrowLink';
import ProjectDetails from './ProjectDetails';
import ProjectVisual from './ProjectVisual';

export default function ProjectShowcase({ project, reverse = false }) {
  return <article className={`project-showcase ${reverse ? 'project-reverse' : ''}`}>
    {!reverse && <ProjectVisual type={project.visual} />}
    <div className="project-copy"><div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><p className="project-description">{project.description}</p><ProjectDetails sections={project.sections} /><div className="project-stack">{project.stack.join(' · ')}</div><ArrowLink href={project.github}>View repository</ArrowLink></div>
    {reverse && <ProjectVisual type={project.visual} />}
  </article>;
}
