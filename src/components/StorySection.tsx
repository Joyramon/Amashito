import { Flame, Heart, Leaf, Truck } from 'lucide-react';

export function StorySection() {
  return (
    <section id="historia" className="bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Imagen */}
          <div className="relative">
            <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-brand-red/20 to-brand-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6588263/pexels-photo-6588263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Ajos frescos para pasta artesanal"
                className="h-80 w-full object-cover lg:h-96"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-5">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-gold">
              Nuestra Historia
            </span>
            <h2 className="font-display text-5xl text-white sm:text-6xl">
              PASIÓN POR EL
              <br />
              <span className="text-brand-red-light">PICOR ARTESANAL</span>
            </h2>
            <p className="text-lg leading-relaxed text-white/70">
              Amashito nació del amor por los sabores auténticos de México. Cada
              chicharrón se prepara a mano, con chiles seleccionados y aceite
              <span className="font-semibold text-brand-green-light"> libre de grasas trans</span>.
              Nuestra pasta de ajo se muele en pequeñas tandas para garantizar frescura y calidad.
            </p>
            <p className="text-lg leading-relaxed text-white/70">
              Es rico. Es crujiente. Es para botanear solo o acompañar comida.
              Y lo enviamos a <span className="font-semibold text-brand-gold">toda la República Mexicana</span>.
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard icon={Flame} value="3" label="Tipos de chile" />
              <StatCard icon={Heart} value="100%" label="Artesanal" />
              <StatCard icon={Leaf} value="0" label="Grasas trans" />
              <StatCard icon={Truck} value="32" label="Estados" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl bg-white/5 px-3 py-4 ring-1 ring-white/10">
      <Icon className="h-6 w-6 text-brand-gold" />
      <span className="font-display text-2xl text-white">{value}</span>
      <span className="text-xs font-medium text-white/50">{label}</span>
    </div>
  );
}
