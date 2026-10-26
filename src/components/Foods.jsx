// Cute cartoon food drawings used in the loading screen and hero.
// Each one is drawn so the string attaches at the top-center.

function Face({ y = 60, eye = 4 }) {
  return (
    <g>
      <ellipse cx="44" cy={y + 9} rx="7" ry="4" fill="#ff8a8a" opacity="0.55" />
      <ellipse cx="76" cy={y + 9} rx="7" ry="4" fill="#ff8a8a" opacity="0.55" />
      <circle cx="48" cy={y} r={eye} fill="#3b2414" />
      <circle cx="72" cy={y} r={eye} fill="#3b2414" />
      <circle cx="49.5" cy={y - 1.5} r={eye / 2.6} fill="#fff" />
      <circle cx="73.5" cy={y - 1.5} r={eye / 2.6} fill="#fff" />
      <path d={`M52 ${y + 10} Q60 ${y + 18} 68 ${y + 10}`} stroke="#3b2414" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  )
}

export function Idli({ size = 90 }) {
  return (
    <svg width={size} viewBox="0 26 120 70" className="food" aria-label="Idli">
      <defs>
        <radialGradient id="idliG" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#efe6d2" />
        </radialGradient>
      </defs>
      <path d="M10 62 Q12 30 60 28 Q108 30 110 62 Q108 92 60 93 Q12 92 10 62Z" fill="url(#idliG)" stroke="#d9c9a5" strokeWidth="3" />
      {[[30, 45], [88, 48], [25, 72], [95, 74], [62, 38], [40, 84], [80, 86]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#d9c9a5" />
      ))}
      <Face y={58} />
    </svg>
  )
}

export function Dosa({ size = 80 }) {
  return (
    <svg width={size} viewBox="0 0 120 126" className="food" aria-label="Dosa">
      <defs>
        <linearGradient id="dosaG" x1="0" x2="1">
          <stop offset="0%" stopColor="#c96f1a" />
          <stop offset="45%" stopColor="#f0b04a" />
          <stop offset="100%" stopColor="#c47018" />
        </linearGradient>
      </defs>
      <path d="M60 4 L104 110 Q60 124 16 110 Z" fill="url(#dosaG)" stroke="#a65a12" strokeWidth="3" strokeLinejoin="round" />
      <path d="M60 4 L74 116" stroke="#a65a12" strokeWidth="2" opacity="0.5" />
      {[[48, 40], [70, 52], [40, 96], [86, 100], [58, 104]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="2.4" fill="#8f4a0e" opacity="0.45" />
      ))}
      <Face y={72} eye={3.6} />
    </svg>
  )
}

export function Paratha({ size = 100 }) {
  return (
    <svg width={size} viewBox="0 0 120 120" className="food" aria-label="Aloo Paratha">
      <defs>
        <radialGradient id="parathaG" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#f6cf7d" />
          <stop offset="100%" stopColor="#d9963a" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="64" r="52" fill="url(#parathaG)" stroke="#b5762a" strokeWidth="3" />
      {[[30, 42, 7], [86, 40, 5], [24, 80, 6], [92, 84, 7], [62, 104, 6], [40, 104, 4], [96, 62, 4]].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.7} fill="#9a5418" opacity="0.5" />
      ))}
      {/* butter cube */}
      <g transform="rotate(-12 60 22)">
        <rect x="48" y="12" width="24" height="18" rx="4" fill="#fff3a6" stroke="#e8c84a" strokeWidth="2" />
        <rect x="52" y="15" width="8" height="4" rx="2" fill="#fff" opacity="0.8" />
      </g>
      <Face y={64} />
    </svg>
  )
}

// A food item hanging on a string. It drops in, bounces, then swings.
export function Hanger({ Food, size, left, right, length = 160, delay = 0, swing = 3.2 }) {
  return (
    <div
      className="hanger"
      style={{ left, right, '--delay': `${delay}s`, '--swing': `${swing}s` }}
    >
      <div className="hanger-swing">
        <div className="string" style={{ height: length }} />
        <Food size={size} />
      </div>
    </div>
  )
}
