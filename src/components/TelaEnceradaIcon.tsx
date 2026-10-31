interface TelaEnceradaIconProps {
  className?: string;
  variant: 'small' | 'medium' | 'large';
}

export function TelaEnceradaIcon({ className = 'h-12 w-12', variant }: TelaEnceradaIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {/* Tela encerada base con pliegues */}
      <path
        d="M20 28 C25 22 35 20 50 20 C65 20 75 22 80 28 C82 35 78 42 75 48 C78 55 82 62 80 70 C75 78 65 82 50 82 C35 82 25 78 20 70 C18 62 22 55 25 48 C22 42 18 35 20 28 Z"
        fill="#10B981"
        opacity="0.9"
      />
      {/* Pliegues */}
      <path
        d="M22 30 C30 28 40 26 50 26 C60 26 70 28 78 30"
        stroke="#059669"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M22 50 C30 48 40 46 50 46 C60 46 70 48 78 50"
        stroke="#059669"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M22 70 C30 68 40 66 50 66 C60 66 70 68 78 70"
        stroke="#059669"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />

      {variant === 'small' && <FloresPattern />}
      {variant === 'medium' && <LimonPattern />}
      {variant === 'large' && <AbejasPattern />}
    </svg>
  );
}

function FloresPattern() {
  return (
    <>
      {/* Flor central */}
      <g transform="translate(50 50)">
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-7"
            rx="4"
            ry="6"
            fill="#F5B700"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="3.5" fill="#FF3B5C" />
      </g>
      {/* Flor pequeña arriba-izq */}
      <g transform="translate(34 34) scale(0.55)">
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-7"
            rx="4"
            ry="6"
            fill="#FF3B5C"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="3" fill="#F5B700" />
      </g>
      {/* Flor pequeña abajo-der */}
      <g transform="translate(66 66) scale(0.55)">
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-7"
            rx="4"
            ry="6"
            fill="#FF3B5C"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="3" fill="#F5B700" />
      </g>
    </>
  );
}

function LimonPattern() {
  return (
    <>
      {/* Limón central */}
      <ellipse cx="50" cy="50" rx="11" ry="13" fill="#F5B700" />
      <ellipse cx="47" cy="46" rx="3" ry="5" fill="white" opacity="0.35" />
      <path d="M50 37 C49 34 51 32 53 31 C51 33 51 35 50 37 Z" fill="#059669" />
      {/* Limón pequeño arriba-izq */}
      <ellipse cx="35" cy="38" rx="6" ry="7" fill="#FFD60A" />
      <ellipse cx="34" cy="36" rx="1.5" ry="2.5" fill="white" opacity="0.3" />
      <path d="M35 31 C34.5 30 35.5 29 36.5 28.5 C35.5 29.5 36 30 35 31 Z" fill="#059669" />
      {/* Limón pequeño abajo-der */}
      <ellipse cx="65" cy="62" rx="6" ry="7" fill="#FFD60A" />
      <ellipse cx="64" cy="60" rx="1.5" ry="2.5" fill="white" opacity="0.3" />
      <path d="M65 55 C64.5 54 65.5 53 66.5 52.5 C65.5 53.5 66 54 65 55 Z" fill="#059669" />
      {/* Hojas decorativas */}
      <path d="M42 56 C40 54 39 56 40 58 C41 58 42 58 42 56 Z" fill="#059669" />
      <path d="M58 44 C60 42 61 44 60 46 C59 46 58 46 58 44 Z" fill="#059669" />
    </>
  );
}

function AbejasPattern() {
  return (
    <>
      {/* Abeja central */}
      <g transform="translate(50 50)">
        <ellipse cx="0" cy="0" rx="9" ry="11" fill="#F5B700" />
        {/* Rayas negras */}
        <path d="M-5 -4 C-7 0 -7 4 -5 8 C-2 8 0 8 0 8 C-2 4 -2 0 0 -4 C0 -4 -2 -4 -5 -4 Z" fill="#1A0F0F" />
        <path d="M3 -6 C1 -2 1 6 3 9 C6 9 8 9 8 9 C6 4 6 0 8 -6 C8 -6 6 -6 3 -6 Z" fill="#1A0F0F" />
        {/* Alas */}
        <ellipse cx="-7" cy="-6" rx="4" ry="3" fill="white" opacity="0.6" transform="rotate(-30)" />
        <ellipse cx="7" cy="-6" rx="4" ry="3" fill="white" opacity="0.6" transform="rotate(30)" />
      </g>
      {/* Abeja pequeña arriba-izq */}
      <g transform="translate(33 35) scale(0.45)">
        <ellipse cx="0" cy="0" rx="9" ry="11" fill="#F5B700" />
        <path d="M-5 -4 C-7 0 -7 4 -5 8 C-2 8 0 8 0 8 C-2 4 -2 0 0 -4 C0 -4 -2 -4 -5 -4 Z" fill="#1A0F0F" />
        <path d="M3 -6 C1 -2 1 6 3 9 C6 9 8 9 8 9 C6 4 6 0 8 -6 C8 -6 6 -6 3 -6 Z" fill="#1A0F0F" />
        <ellipse cx="-7" cy="-6" rx="4" ry="3" fill="white" opacity="0.6" transform="rotate(-30)" />
        <ellipse cx="7" cy="-6" rx="4" ry="3" fill="white" opacity="0.6" transform="rotate(30)" />
      </g>
      {/* Hexágonos de panal decorativos */}
      <Hexagon cx={68} cy={40} r={4} />
      <Hexagon cx={70} cy={66} r={3} />
      <Hexagon cx={30} cy={60} r={3.5} />
    </>
  );
}

function Hexagon({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(' ');
  return <polygon points={points} fill="#F5B700" opacity="0.4" stroke="#059669" strokeWidth="0.5" />;
}
