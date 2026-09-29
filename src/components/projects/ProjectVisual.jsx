function WindowChrome({ label }) {
  return <div className="window-chrome"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span className="window-label">{label}</span></div>;
}

function RailVisual() {
  return <div className="project-visual rail-visual"><WindowChrome label="rail-yojna / control-room" /><div className="rail-board"><span className="rail-board-label">DATA → RISK → PLAN → REVIEW</span><div className="rail-node rail-node-one"><small>ASSET RISK</small><strong>0.81</strong></div><div className="rail-node rail-node-two"><small>MAINTENANCE WINDOW</small><strong>12:40</strong></div><div className="rail-node rail-node-three"><small>RECOMMENDATION</small><strong>REVIEW</strong></div><div className="rail-path" /></div></div>;
}

function LexiVisual() {
  return <div className="project-visual lexi-visual"><WindowChrome label="lexiscan / assessment" /><div className="lexi-screen"><div className="lexi-header"><span>SCREENING</span><span>04 / 08</span></div><div className="lexi-title">Find the pattern<br />that completes the sequence.</div><div className="lexi-options" aria-hidden="true"><i /><i /><i /><i /></div><div className="lexi-progress"><span /></div></div></div>;
}

export default function ProjectVisual({ type }) { return type === 'rail' ? <RailVisual /> : <LexiVisual />; }
