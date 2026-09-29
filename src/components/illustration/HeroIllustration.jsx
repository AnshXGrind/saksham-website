export default function HeroIllustration({ progress }) {
  const rotation = (progress - 2.5) * 2.2;
  return <div className="hero-illustration" style={{ '--illustration-rotation': `${rotation}deg` }} aria-label="Editorial illustration of a systems researcher with a field notebook" role="img">
    <div className="illustration-shadow" />
    <svg viewBox="0 0 420 560" aria-hidden="true">
      <defs><filter id="paper-grain"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /><feComponentTransfer><feFuncA type="table" tableValues="0 .13" /></feComponentTransfer><feBlend in="SourceGraphic" mode="multiply" /></filter></defs>
      <path className="illustration-backdrop" d="M72 470C38 379 71 133 211 57c91-49 161 60 132 162-21 76 40 151-34 221-56 53-198 63-237 30Z" />
      <path className="illustration-halo" d="M97 150c31-71 141-109 209-50 45 39 43 112 15 151-42 59-134 74-196 36-45-28-49-88-28-137Z" />
      <path className="illustration-coat" d="M112 467c-15-80-20-178 28-227 27-28 111-31 143 8 38 47 27 141 20 219H112Z" />
      <path className="illustration-coat-line" d="M179 263c-7 74-5 143 2 201M246 264c16 63 15 129 10 203" />
      <path className="illustration-head" d="M156 164c-3-62 29-92 73-86 47 6 70 54 50 101-20 47-63 58-94 30-16-14-27-28-29-45Z" />
      <path className="illustration-hair" d="M157 125c3-43 32-72 73-68 32 3 53 25 56 55-28-14-58-10-80 7-19 14-33 19-49 6Z" />
      <path className="illustration-face" d="M178 157c16 13 39 17 59 4" /><circle className="illustration-eye" cx="190" cy="139" r="3" /><circle className="illustration-eye" cx="237" cy="136" r="3" />
      <path className="illustration-arm" d="M128 304c-35 22-44 75-50 132 16 15 33 17 50 6l40-105" /><path className="illustration-arm-two" d="M276 303c40 19 55 65 56 118-13 16-31 20-51 9l-42-94" />
      <path className="illustration-notebook" d="m137 350 98-23 28 115-99 23Z" /><path className="illustration-notebook-line" d="m155 363 63-15m-56 33 69-17m-61 37 72-18" />
      <path className="illustration-leg" d="M151 464c-2 25-11 51-29 66m128-66c7 27 17 46 35 64" /><path className="illustration-shoe" d="M102 527c19-10 39-8 54 6-15 16-42 17-62 7Zm138 1c17-10 38-7 54 7-16 14-42 14-60 5Z" />
      <path className="illustration-scribble" d="M76 111c17-20 38-29 62-35m-75 59c15-8 30-12 46-12m247 110c-20 3-37 11-51 24" />
    </svg><span className="illustration-caption">FIELD NOTES / 01</span>
  </div>;
}
