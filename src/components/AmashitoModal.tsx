import { useEffect, useState } from 'react';
import { X, Flame } from 'lucide-react';

export function AmashitoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-brand-green active:scale-95"
      >
        <Flame className="h-4 w-4 text-brand-gold-light" />
        Conoce más sobre el amashito
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-5 animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-brand-cream shadow-2xl animate-pop">
            {/* Header con degradado */}
            <div className="relative bg-gradient-to-br from-brand-green-dark to-brand-charcoal px-6 pt-6 pb-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/20">
                  <Flame className="h-7 w-7 text-brand-gold-light" />
                </div>
                <h2 className="font-display text-2xl text-white">¿Qué es el amashito?</h2>
              </div>
            </div>

            {/* Contenido */}
            <div className="space-y-4 px-6 py-6">
              <p className="text-base leading-relaxed text-stone-700">
                El <strong className="text-brand-red">amashito</strong> es un chile
                tradicional de Tabasco, reconocido por su pequeño tamaño y su intenso
                picor. Forma parte de la gastronomía y cultura regional.
              </p>
              <p className="text-sm leading-relaxed text-stone-500">
                Su nombre proviene del vocablo indígena que significa "chile pequeño
                que pica". A pesar de su tamaño diminuto, su sabor es inconfundible y
                se ha convertido en símbolo de identidad tabasqueña.
              </p>
              <div className="flex items-center gap-2 rounded-xl bg-brand-green/10 px-4 py-3">
                <span className="text-2xl">🌶️</span>
                <p className="text-xs font-semibold text-brand-green-dark">
                  Pequeño en tamaño, grande en picor y tradición
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
