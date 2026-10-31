interface TelaEnceradaIconProps {
  className?: string;
  variant: 'small' | 'medium' | 'large';
}

const VARIANTS = {
  small: { fruit: '#F5B700', fruitName: 'limón' },
  medium: { fruit: '#10B981', fruitName: 'cilantro' },
  large: { fruit: '#F97316', fruitName: 'papaya' },
};

export function TelaEnceradaIcon({ className = 'h-12 w-12', variant }: TelaEnceradaIconProps) {
  const c = VARIANTS[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {/* Tela encerada con pliegues */}
      <path
        d="M20 28 C25 22 35 20 50 20 C65 20 75 22 80 28 C82 35 78 42 75 48 C78 55 82 62 80 70 C75 78 65 82 50 82 C35 82 25 78 20 70 C18 62 22 55 25 48 C22 42 18 35 20 28 Z"
        fill="#10B981"
        opacity="0.85"
      />
      {/* Líneas de pliegues en la tela */}
      <path
        d="M22 30 C30 28 40 26 50 26 C60 26 70 28 78 30"
        stroke="#059669"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M22 50 C30 48 40 46 50 46 C60 46 70 48 78 50"
        stroke="#059669"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M22 70 C30 68 40 66 50 66 C60 66 70 68 78 70"
        stroke="#059669"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />

      {/* Fruta asomando */}
      {variant === 'small' && (
        <circle cx="50" cy="50" r="14" fill={c.fruit} />
      )}
      {variant === 'small' && (
        <ellipse cx="46" cy="46" rx="4" ry="6" fill="white" opacity="0.3" />
      )}
      {variant === 'small' && (
        <path d="M50 36 C49 33 51 31 53 30 C51 32 51 34 50 36 Z" fill="#059669" />
      )}

      {variant === 'medium' && (
        <ellipse cx="50" cy="50" rx="12" ry="16" fill={c.fruit} />
      )}
      {variant === 'medium' && (
        <path
          d="M48 34 C47 32 49 30 51 30 C49 32 50 34 48 34 Z"
          fill="#059669"
        />
      )}
      {variant === 'medium' && (
        <ellipse cx="46" cy="46" rx="3" ry="5" fill="white" opacity="0.25" />
      )}

      {variant === 'large' && (
        <ellipse cx="50" cy="50" rx="16" ry="14" fill={c.fruit} />
      )}
      {variant === 'large' && (
        <ellipse cx="46" cy="46" rx="5" ry="4" fill="#FBBF24" opacity="0.6" />
      )}
      {variant === 'large' && (
        <circle cx="50" cy="52" r="2" fill="#FBBF24" />
      )}
    </svg>
  );
}
