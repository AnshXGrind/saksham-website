export default function ProjectPreview({ type }) {
  if (type === 'rail') return <div className="project-preview project-preview-rail"><span>DATA</span><i /><span>RISK</span><i /><span>PLAN</span><i /><span>REVIEW</span><b>ML + OPTIMIZATION</b></div>;
  return <div className="project-preview project-preview-lexi"><small>ASSESSMENT / 04</small><strong>Find the<br />pattern.</strong><div><i /><i /><i /></div></div>;
}
