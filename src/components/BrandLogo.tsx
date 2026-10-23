interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export function BrandLogo({ className = 'h-12 w-12', showText = true }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 100 100"
        className={className}
        aria-label="Logo de Amashito"
        role="img"
      >
        {/* Círculo de fondo */}
        <circle cx="50" cy="50" r="48" fill="#1A0F0F" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#F5B700" strokeWidth="2" />

        {/* Llama decorativa arriba */}
        <path
          d="M50 4 C46 12 50 16 46 22 C42 28 46 32 50 34 C54 32 58 28 54 22 C50 16 54 12 50 4 Z"
          fill="#FF3B5C"
          opacity="0.9"
        />
        <path
          d="M50 8 C48 14 50 17 48 21 C46 25 49 29 50 31 C51 29 54 25 52 21 C50 17 52 14 50 8 Z"
          fill="#F5B700"
        />

        {/* Chile central estilizado */}
        <path
          d="M50 30 C44 30 42 36 42 44 C42 54 44 64 46 72 C47 78 48 82 50 84 C52 82 53 78 54 72 C56 64 58 54 58 44 C58 36 56 30 50 30 Z"
          fill="#10B981"
        />
        <path
          d="M50 30 C48 30 46 34 46 40 C46 50 47 60 48 68 C49 74 49.5 79 50 81 C50.5 79 51 74 52 68 C53 60 54 50 54 40 C54 34 52 30 50 30 Z"
          fill="#34D399"
        />

        {/* Brillo del chile */}
        <ellipse cx="47" cy="48" rx="2" ry="10" fill="white" opacity="0.25" />

        {/* Pedúnculo */}
        <path
          d="M50 30 C49 26 51 24 53 22 C51 24 51 27 50 30 Z"
          fill="#059669"
        />

        {/* Texto AMASHITO en curva inferior */}
        <path
          id="amashito-curve"
          d="M16 50 A34 34 0 0 0 84 50"
          fill="none"
        />
        <text fill="white" fontSize="13" fontWeight="900" fontFamily="Anton, sans-serif" letterSpacing="1.5">
          <textPath href="#amashito-curve" startOffset="50%" textAnchor="middle">
            AMASHITO
          </textPath>
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-xl text-white tracking-wider">
            AMASHITO
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Artesanal
          </span>
        </div>
      )}
    </div>
  );
}
