export default function Scene({ scene, index, progress, children }) {
  const distance = index - progress;
  const proximity = Math.max(0, 1 - Math.min(1, Math.abs(distance)));
  const style = { '--scene-distance': distance, '--scene-proximity': proximity, '--scene-depth': Math.abs(distance) };
  const inactive = Math.abs(distance) > 1.15;
  return <section className={`scene scene-${scene.id}`} aria-labelledby={`${scene.id}-title`} style={style} aria-hidden={inactive} inert={inactive}>{children}</section>;
}
