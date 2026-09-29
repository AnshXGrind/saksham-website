import { useEffect, useState } from 'react';
import { site } from '../../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
    <a className="brand" href="#top" aria-label={`${site.name} home`}>SG</a>
    <nav aria-label="Primary navigation"><a href="#top">Home</a><a href="#work">Work</a><a href="#about">About</a><a href="#lab">Lab</a><a href="#contact">Contact</a></nav>
    <a className="nav-email" href={`mailto:${site.email}`}>Say hello <span aria-hidden="true">↗</span></a>
  </header>;
}
