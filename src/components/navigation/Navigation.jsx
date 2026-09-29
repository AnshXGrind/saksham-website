import { scenes } from '../../data/scenes';

export default function Navigation({ progress, goTo }) {
  return <header className="canvas-navigation"><a className="canvas-brand" href="#top" aria-label="Saksham Garg home">SG</a><nav aria-label="Scene navigation">{scenes.map((scene, index) => <button key={scene.id} className={Math.round(progress) === index ? 'is-active' : ''} onClick={() => goTo(index)} aria-label={`Go to ${scene.label}`} aria-current={Math.round(progress) === index ? 'page' : undefined}><span>{scene.number}</span>{scene.label}</button>)}</nav><span className="canvas-index">{String(Math.round(progress) + 1).padStart(2, '0')} / 06</span></header>;
}
