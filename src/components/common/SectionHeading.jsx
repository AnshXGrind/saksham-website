export default function SectionHeading({ number, title, copy }) {
  return <header className="section-heading"><span className="eyebrow">{number}</span><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></header>;
}
