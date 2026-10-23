import { Instagram, Facebook, Mail, MapPin, Truck, ShieldCheck } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';

export function Footer() {
  return (
    <footer id="contacto" className="bg-stone-950 text-white">
      {/* Barra superior con beneficios */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-3 lg:px-8">
          <BenefitBar icon={Truck} title="Envíos Nacionales" desc="A toda la República Mexicana" />
          <BenefitBar icon={ShieldCheck} title="Pago Seguro" desc="Compra con confianza" />
          <BenefitBar icon={Mail} title="Atención Personalizada" desc="Escríbenos por Instagram" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo y descripción */}
          <div className="flex flex-col gap-4">
            <BrandLogo className="h-14 w-14" />
            <p className="text-sm leading-relaxed text-white/60">
              Chicharrón de chile y pasta de ajo artesanal. Hecho en México con aceite
              libre de grasas trans. Picor que deja huella.
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-lg text-brand-gold">CONTÁCTANOS</h4>
            <a
              href="https://www.instagram.com/amashito.artesanal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-white/70 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 transition-transform group-hover:scale-110">
                <Instagram className="h-5 w-5 text-white" />
              </span>
              <div>
                <span className="block text-xs text-white/50">Instagram</span>
                <span className="text-sm font-semibold">@amashito.artesanal</span>
              </div>
            </a>
            <a
              href="https://www.facebook.com/amashito.artesanal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-white/70 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition-transform group-hover:scale-110">
                <Facebook className="h-5 w-5 text-white" />
              </span>
              <div>
                <span className="block text-xs text-white/50">Facebook</span>
                <span className="text-sm font-semibold">Amashito Artesanal</span>
              </div>
            </a>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-lg text-brand-gold">PRODUCTOS</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/60">
              <li>Chicharrón de Jalapeño — $90 · 55g</li>
              <li>Chicharrón de Serrano — $90 · 55g</li>
              <li>Chicharrón de Habanero — $90 · 55g</li>
              <li>Pasta de Ajo Artesanal — $90 · 220g</li>
              <li>Telas Enceradas — $90 · 10×10 / 20×20 / 40×30 cm</li>
            </ul>
          </div>
        </div>

        {/* Envíos */}
        <div className="mt-10 flex items-center justify-center gap-2 rounded-2xl bg-brand-red/15 px-6 py-4 text-center">
          <MapPin className="h-5 w-5 text-brand-red-light" />
          <p className="text-sm font-semibold text-brand-red-light">
            Envíos a toda la República Mexicana
          </p>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <p className="text-center text-xs text-white/40">
            © {new Date().getFullYear()} Amashito Artesanal · Hecho con picor en México 🇲🇽
          </p>
        </div>
      </div>
    </footer>
  );
}

function BenefitBar({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center justify-center gap-3 text-center sm:justify-start">
      <Icon className="h-8 w-8 text-brand-gold" />
      <div className="text-left">
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="text-xs text-white/50">{desc}</p>
      </div>
    </div>
  );
}
