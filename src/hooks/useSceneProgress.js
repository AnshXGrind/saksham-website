import { useEffect, useRef, useState } from 'react';

const clamp = (value) => Math.max(0, Math.min(5, value));

export default function useSceneProgress({ reducedMotion = false } = {}) {
  const target = useRef(0);
  const current = useRef(0);
  const pointer = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const tick = () => {
      const distance = target.current - current.current;
      current.current = reducedMotion ? target.current : current.current + distance * 0.12;
      if (Math.abs(distance) < 0.001) current.current = target.current;
      setProgress(current.current);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion]);

  const moveBy = (amount) => { target.current = clamp(target.current + amount); };
  const goTo = (scene) => { target.current = clamp(scene); };
  const onWheel = (event) => { event.preventDefault(); moveBy((Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY) * 0.0022); };
  const onPointerDown = (event) => { pointer.current = event.clientX; event.currentTarget.setPointerCapture?.(event.pointerId); };
  const onPointerMove = (event) => { if (pointer.current === null) return; const delta = pointer.current - event.clientX; pointer.current = event.clientX; moveBy(delta * 0.008); };
  const onPointerUp = () => { pointer.current = null; };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') { event.preventDefault(); moveBy(1); }
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); moveBy(-1); }
      if (event.key === 'Home') { event.preventDefault(); goTo(0); }
      if (event.key === 'End') { event.preventDefault(); goTo(5); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return { progress, goTo, onWheel, onPointerDown, onPointerMove, onPointerUp };
}
