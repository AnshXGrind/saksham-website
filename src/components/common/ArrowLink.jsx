export default function ArrowLink({ href, children, className = '' }) {
  return <a className={`arrow-link ${className}`} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{children} <span aria-hidden="true">↗</span></a>;
}
