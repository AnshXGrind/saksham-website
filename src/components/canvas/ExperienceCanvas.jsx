import { useMemo } from 'react';
import { scenes } from '../../data/scenes';
import { site } from '../../data/site';
import useSceneProgress from '../../hooks/useSceneProgress';
import HeroIllustration from '../illustration/HeroIllustration';
import Scene from './Scene';
import Navigation from '../navigation/Navigation';
import IntroScene from '../scenes/IntroScene';
import WorkScene from '../scenes/WorkScene';
import EngineeringScene from '../scenes/EngineeringScene';
import LabScene from '../scenes/LabScene';
import AboutScene from '../scenes/AboutScene';
import ContactScene from '../scenes/ContactScene';

const sceneContent = [IntroScene, WorkScene, EngineeringScene, LabScene, AboutScene, ContactScene];

export default function ExperienceCanvas() {
  const reducedMotion = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const navigation = useSceneProgress({ reducedMotion });
  return <div className="experience-canvas" onWheel={navigation.onWheel} onPointerDown={navigation.onPointerDown} onPointerMove={navigation.onPointerMove} onPointerUp={navigation.onPointerUp} onPointerCancel={navigation.onPointerUp} tabIndex="0">
    <Navigation progress={navigation.progress} goTo={navigation.goTo} />
    <div className="canvas-meta"><span>SCROLL / DRAG TO EXPLORE</span><span>{site.signature} / 2026</span></div>
    <div className="scene-stage"><HeroIllustration progress={navigation.progress} />{scenes.map((scene, index) => { const Content = sceneContent[index]; return <Scene key={scene.id} scene={scene} index={index} progress={navigation.progress}><Content progress={navigation.progress} /></Scene>; })}</div>
    <div className="scene-progress" aria-hidden="true"><span style={{ transform: `scaleX(${navigation.progress / 5})` }} /></div>
  </div>;
}
