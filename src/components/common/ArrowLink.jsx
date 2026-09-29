export default function ArrowLink({ href, children }) { return <a className="orbit-link" href={href} target="_blank" rel="noreferrer">{children} <span aria-hidden="true">↗</span></a>; }
