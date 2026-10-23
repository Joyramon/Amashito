interface ChileIconProps {
  variant: 'jalapeno' | 'serrano' | 'habanero';
  className?: string;
}

const COLORS = {
  jalapeno: { body: '#10B981', highlight: '#34D399', dark: '#059669' },
  serrano: { body: '#047857', highlight: '#10B981', dark: '#064E3B' },
  habanero: { body: '#F97316', highlight: '#FB923C', dark: '#C2410C' },
};

export function ChileIcon({ variant, className = 'h-12 w-12' }: ChileIconProps) {
  const c = COLORS[variant];
  const isHabanero = variant === 'habanero';

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {isHabanero ? (
        <>
          {/* Habanero: forma redonda-lamparilla */}
          <path
            d="M50 28 C38 28 30 38 30 50 C30 64 38 76 50 76 C62 76 70 64 70 50 C70 38 62 28 50 28 Z"
            fill={c.body}
          />
          <path
            d="M50 28 C44 28 40 34 40 44 C40 58 44 70 50 76 C56 70 60 58 60 44 C60 34 56 28 50 28 Z"
            fill={c.highlight}
            opacity="0.6"
          />
          <ellipse cx="45" cy="45" rx="3" ry="6" fill="white" opacity="0.3" />
          {/* Pedúnculo */}
          <path
            d="M50 28 C49 24 51 22 54 20 C52 23 52 26 50 28 Z"
            fill={c.dark}
          />
        </>
      ) : (
        <>
          {/* Jalapeño / Serrano: forma alargada curva */}
          <path
            d="M52 26 C42 28 36 38 36 50 C36 62 40 74 46 82 C48 85 50 86 52 85 C50 82 50 78 49 74 C48 68 46 60 46 52 C46 42 48 34 52 26 Z"
            fill={c.body}
          />
          <path
            d="M52 26 C46 28 42 36 42 48 C42 60 44 70 48 78 C50 82 51 84 52 85 C52 82 52 78 51 74 C50 68 48 60 48 52 C48 42 50 34 52 26 Z"
            fill={c.highlight}
            opacity="0.6"
          />
          <ellipse cx="44" cy="48" rx="2" ry="8" fill="white" opacity="0.25" />
          {/* Pedúnculo */}
          <path
            d="M52 26 C51 22 53 19 56 18 C54 21 54 24 52 26 Z"
            fill={c.dark}
          />
        </>
      )}
    </svg>
  );
}
