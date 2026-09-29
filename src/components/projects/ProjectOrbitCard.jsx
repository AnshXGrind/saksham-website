import ArrowLink from '../common/ArrowLink';
import ProjectPreview from './ProjectPreview';

export default function ProjectOrbitCard({ project }) { return <article className={`orbit-project orbit-project-${project.visual}`}><ProjectPreview type={project.visual} /><div><span className="orbit-project-meta">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><ArrowLink href={project.github}>Open repository</ArrowLink></div></article>; }
