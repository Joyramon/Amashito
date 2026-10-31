import { useState } from 'react';
import { X, Leaf, Hand, Sparkles, Citrus, Salad, Sandwich, ChefHat } from 'lucide-react';

interface Demo {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ComponentType<{ className?: string }>;
  cardTitle: string;
  cardText: string;
  modalTitle: string;
  modalText: string;
}

const DEMOS: Demo[] = [
  {
    title: 'Conserva tus frutas',
    description:
      'Envuelve medio aguacate para proteger la superficie expuesta y guardarlo en el refrigerador.',
    image:
      'https://images.pexels.com/photos/33702904/pexels-photo-33702904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Medio aguacate sobre tela encerada',
    icon: Citrus,
    cardTitle: 'Conserva tus frutas',
    cardText:
      'Envuelve medio aguacate para proteger la superficie expuesta y guardarlo en el refrigerador.',
    modalTitle: 'Conserva tus frutas',
    modalText:
      'Coloca la tela encerada alrededor de la parte cortada del aguacate. Moldea suavemente con tus manos para que se adhiera y consérvala en el refrigerador.',
  },
  {
    title: 'Cubre tus recipientes',
    description:
      'Adapta la tela al borde de un recipiente para cubrir tus alimentos sin utilizar plástico adherente.',
    image:
      'https://images.pexels.com/photos/17718009/pexels-photo-17718009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Tela encerada cubriendo un recipiente',
    icon: ChefHat,
    cardTitle: 'Cubre tus recipientes',
    cardText:
      'Adapta la tela al borde de un recipiente para cubrir tus alimentos sin utilizar plástico adherente.',
    modalTitle: 'Cubre tus recipientes',
    modalText:
      'Coloca la tela sobre el recipiente y presiona los bordes con tus manos, usando el calor de tus palmas para formar una cubierta hermética.',
  },
  {
    title: 'Lleva tus alimentos',
    description:
      'Envuelve sándwiches o bocadillos para transportarlos en tu lonchera de forma ecológica.',
    image:
      'https://images.pexels.com/photos/20219983/pexels-photo-20219983.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sándwich envuelto en tela',
    icon: Sandwich,
    cardTitle: 'Lleva tus alimentos',
    cardText:
      'Envuelve sándwiches o bocadillos para transportarlos en tu lonchera de forma ecológica.',
    modalTitle: 'Prepara tu lonchera',
    modalText:
      'Coloca el sándwich en el centro de la tela, dobla sus extremos y moldea con tus manos para mantenerlo envuelto y fresco.',
  },
  {
    title: 'Protege tus verduras',
    description:
      'Utiliza la tela para envolver algunas verduras y mantenerlas protegidas durante su almacenamiento.',
    image:
      'https://images.pexels.com/photos/35594805/pexels-photo-35594805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Verduras envueltas en tela encerada',
    icon: Salad,
    cardTitle: 'Protege tus verduras',
    cardText:
      'Utiliza la tela para envolver algunas verduras y mantenerlas protegidas durante su almacenamiento.',
    modalTitle: 'Protege tus verduras',
    modalText:
      'Envuelve las verduras limpias y secas con la tela antes de guardarlas en el refrigerador. La cera natural ayuda a mantener su frescura por más tiempo.',
  },
];

export function UsageGuideSection() {
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null);

  return (
    <section id="guia-uso" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Guía de Uso
          </span>
          <h2 className="mt-2 font-display text-5xl text-brand-charcoal sm:text-6xl">
            DESCUBRE CÓMO USAR
            <br />
            <span className="text-brand-green">NUESTRAS TELAS ENCERADAS</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Las telas enceradas son una alternativa reutilizable al plástico para
            envolver alimentos y cubrir recipientes. Su flexibilidad permite
            adaptarlas a diferentes formas con el calor de las manos.
          </p>
        </div>

        {/* Beneficios */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <BenefitBadge icon={Leaf} text="Ecológica y reutilizable" />
          <BenefitBadge icon={Hand} text="Se moldea con el calor de las manos" />
          <BenefitBadge icon={Sparkles} text="Libre de plástico" />
        </div>

        {/* Galería de tarjetas */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DEMOS.map((demo) => (
            <article
              key={demo.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-stone-200 transition-all hover:shadow-2xl hover:ring-brand-green/20"
            >
              {/* Imagen */}
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src={demo.image}
                  alt={demo.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur">
                  <demo.icon className="h-6 w-6 text-brand-green-dark" />
                </div>
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-display text-lg leading-tight text-brand-charcoal">
                  {demo.cardTitle}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-stone-600">
                  {demo.cardText}
                </p>
                <button
                  onClick={() => setActiveDemo(demo)}
                  className="mt-1 flex items-center justify-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-green-dark hover:shadow-lg active:scale-95"
                >
                  Ver demostración
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeDemo && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-5 animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveDemo(null);
          }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl animate-pop">
            {/* Imagen del modal */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={activeDemo.image}
                alt={activeDemo.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
              <button
                onClick={() => setActiveDemo(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-stone-700 shadow-lg transition hover:bg-white"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <activeDemo.icon className="h-6 w-6 text-brand-gold-light" />
                <h3 className="font-display text-xl text-white">
                  {activeDemo.modalTitle}
                </h3>
              </div>
            </div>

            {/* Contenido */}
            <div className="space-y-4 p-6">
              <p className="text-base leading-relaxed text-stone-700">
                {activeDemo.modalText}
              </p>
              <div className="flex items-center gap-2 rounded-xl bg-brand-green/10 px-4 py-3">
                <Hand className="h-5 w-5 flex-shrink-0 text-brand-green-dark" />
                <p className="text-xs font-semibold text-brand-green-dark">
                  Recuerda: usa el calor de tus manos para moldear la tela
                </p>
              </div>
              <button
                onClick={() => setActiveDemo(null)}
                className="w-full rounded-full bg-brand-green px-6 py-3 font-bold text-white transition hover:bg-brand-green-dark"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function BenefitBadge({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm ring-1 ring-stone-200">
      <Icon className="h-4 w-4 text-brand-green" />
      <span className="text-sm font-semibold text-stone-700">{text}</span>
    </div>
  );
}
