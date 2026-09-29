import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import SelectedWork from './components/sections/SelectedWork';
import About from './components/sections/About';
import Engineering from './components/sections/Engineering';
import Lab from './components/sections/Lab';
import Now from './components/sections/Now';
import Contact from './components/sections/Contact';

export default function App() {
  return <div className="site-shell"><Navbar /><main id="top"><Hero /><div className="focus-strip" aria-label="Current focus"><span>Machine Learning</span><i>✦</i><span>Backend Engineering</span><i>✦</i><span>System Design</span><i>✦</i><span>Software Engineering</span><i>✦</i><span>Hackathons</span></div><SelectedWork /><About /><Engineering /><Lab /><Now /><Contact /></main><Footer /></div>;
}
