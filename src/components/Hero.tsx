import { Flame, Truck, Leaf, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export function Hero({ onShopNow }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-charcoal pt-20">
      {/* Fondo de textura */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-red/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-gold/15 blur-3xl" />
      </div>

      {/* Grid de líneas decorativas */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col items-start gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/20 px-4 py-1.5">
              <Flame className="h-4 w-4 animate-flicker text-brand-red-light" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red-light">
                Hecho a mano · 100% artesanal
              </span>
            </div>

            <h1 className="font-display text-6xl leading-none text-white sm:text-7xl lg:text-8xl">
              PICOR QUE
              <br />
              <span className="text-brand-gold">DEJA HUELLA</span>
            </h1>

            <p className="max-w-md text-lg leading-relaxed text-white/70">
              Chicharrón de chile jalapeño, serrano y habanero. Pasta de ajo artesanal.
              Todo hecho con <span className="font-semibold text-brand-green-light">aceite libre de grasas trans</span>.
              Ideal para botanear solo o acompañar tu comida.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onShopNow}
                className="rounded-full bg-brand-red px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-red/30 transition-all hover:scale-105 hover:bg-brand-red-light active:scale-95"
              >
                Comprar ahora
              </button>
              <a
                href="https://www.instagram.com/amashito.artesanal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/20 px-8 py-3.5 text-base font-bold text-white transition-all hover:border-brand-gold hover:text-brand-gold"
              >
                Ver en Instagram
              </a>
            </div>

            {/* Features */}
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
              <FeatureBadge icon={Truck} text="Envíos a toda la República" />
              <FeatureBadge icon={Leaf} text="Libre de grasas trans" />
              <FeatureBadge icon={Sparkles} text="Receta artesanal" />
            </div>
          </div>

          {/* Imagen */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Círculo de fondo */}
              <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-brand-red/30 to-brand-gold/20 blur-2xl" />

              {/* Imagen principal */}
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-brand-gold/30 shadow-2xl sm:h-96 sm:w-96">
                <img
                  src="https://images.pexels.com/photos/15357925/pexels-photo-15357925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Chiles jalapeños rojos y verdes"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
              </div>

              {/* Chile flotante */}
              <div className="absolute -right-4 -top-4 animate-float">
                <svg viewBox="0 0 100 100" className="h-20 w-20 drop-shadow-xl">
                  <path
                    d="M52 26 C42 28 36 38 36 50 C36 62 40 74 46 82 C48 85 50 86 52 85 C50 82 50 78 49 74 C48 68 46 60 46 52 C46 42 48 34 52 26 Z"
                    fill="#10B981"
                  />
                  <path
                    d="M52 26 C46 28 42 36 42 48 C42 60 44 70 48 78 C50 82 51 84 52 85 C52 82 52 78 51 74 C50 68 48 60 48 52 C48 42 50 34 52 26 Z"
                    fill="#34D399"
                    opacity="0.6"
                  />
                  <path
                    d="M52 26 C51 22 53 19 56 18 C54 21 54 24 52 26 Z"
                    fill="#059669"
                  />
                </svg>
              </div>

              {/* Etiqueta de precio */}
              <div className="absolute -bottom-2 -left-2 rotate-[-8deg] rounded-2xl bg-brand-gold px-5 py-3 shadow-xl">
                <span className="font-display text-2xl text-brand-charcoal">$90</span>
                <p className="text-xs font-bold uppercase text-brand-charcoal/70">cada producto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa de transición */}
      <svg
        className="relative block w-full text-stone-50"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ height: '60px' }}
      >
        <path
          fill="currentColor"
          d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}

function FeatureBadge({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-brand-gold" />
      <span className="text-sm font-semibold text-white/60">{text}</span>
    </div>
  );
}
