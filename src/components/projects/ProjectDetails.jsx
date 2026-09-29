export default function ProjectDetails({ sections }) {
  return <div className="project-details">{sections.map(([label, text]) => <p key={label}><span>{label}</span>{text}</p>)}</div>;
}
