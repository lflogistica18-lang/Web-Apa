// Logo APA — recreado en SVG (basado en imagen de referencia del usuario)
// Variantes: full (con texto), mark (solo monograma), variant: 'color' | 'white' | 'navy'

function ApaLogo({ variant = 'color', showText = true, height = 56, textColor }) {
  const id = React.useId().replace(/:/g, '');
  const gradId = `apa-grad-${id}`;
  const ringGradId = `apa-ring-${id}`;
  const fillA = variant === 'white' ? '#ffffff' : variant === 'navy' ? '#0A1F3D' : `url(#${gradId})`;
  const fillRing = variant === 'white' ? '#ffffff' : variant === 'navy' ? '#0A1F3D' : `url(#${ringGradId})`;
  const txt = textColor || (variant === 'white' ? 'rgba(255,255,255,.78)' : 'rgba(10,31,61,.55)');
  const sep = variant === 'white' ? 'rgba(255,255,255,.4)' : 'rgba(10,31,61,.25)';

  // Mark is square ~120x120; full lockup adds ~280px of text to the right
  const markW = 120;
  const totalW = showText ? markW + 28 + 280 : markW;
  const scale = height / 120;
  const w = totalW * scale;

  return (
    <svg width={w} height={height} viewBox={`0 0 ${totalW} 120`} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFB347"/>
          <stop offset=".55" stopColor="#F58220"/>
          <stop offset="1" stopColor="#E85D14"/>
        </linearGradient>
        <linearGradient id={ringGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFC264"/>
          <stop offset=".5" stopColor="#F58220"/>
          <stop offset="1" stopColor="#E14B0A"/>
        </linearGradient>
      </defs>
      {/* Open ring — gap on top-right */}
      <path
        d="M60 12 A48 48 0 1 0 96 28"
        stroke={fillRing}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* APA wordmark inside ring */}
      <text
        x="60" y="78"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontWeight="800"
        fontSize="42"
        letterSpacing="-1"
        fill={fillA}
      >APA</text>

      {showText && (
        <g transform={`translate(${markW + 14}, 0)`}>
          <line x1="0" y1="38" x2="0" y2="82" stroke={sep} strokeWidth="1"/>
          <text
            x="14" y="56"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="500"
            fontSize="15"
            letterSpacing="2.6"
            fill={txt}
          >SOLUCIONES</text>
          <text
            x="14" y="78"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="500"
            fontSize="15"
            letterSpacing="2.6"
            fill={txt}
          >GASTRONÓMICAS</text>
        </g>
      )}
    </svg>
  );
}

window.ApaLogo = ApaLogo;
