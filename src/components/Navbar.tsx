import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag, Truck } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';
import { useCart } from '@/context/CartContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'productos', label: 'Productos' },
  { id: 'historia', label: 'Nuestra Historia' },
  { id: 'contacto', label: 'Contacto' },
];

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart, checkoutMode, exitCheckout } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    if (checkoutMode) {
      exitCheckout();
      return;
    }
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-brand-charcoal/95 shadow-lg backdrop-blur-md'
          : 'bg-brand-charcoal/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNav('inicio')}
          className="transition-transform hover:scale-105"
          aria-label="Inicio Amashito"
        >
          <BrandLogo />
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-all hover:bg-brand-red/20 hover:text-brand-gold-light"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 rounded-full bg-brand-green/15 px-3 py-1.5 lg:flex">
            <Truck className="h-4 w-4 text-brand-green-light" />
            <span className="text-xs font-semibold text-brand-green-light">
              Envíos a toda la República
            </span>
          </div>

          {/* Cart button */}
          <button
            onClick={openCart}
            className="relative rounded-full bg-brand-red p-2.5 transition-all hover:bg-brand-red-light hover:scale-105 active:scale-95"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="h-5 w-5 text-white" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-gold px-1 text-xs font-bold text-brand-charcoal animate-pop">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2.5 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-fade-in border-t border-white/10 bg-brand-charcoal md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-white/80 transition hover:bg-brand-red/20 hover:text-brand-gold-light"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-2 rounded-lg bg-brand-green/15 px-4 py-3">
              <Truck className="h-4 w-4 text-brand-green-light" />
              <span className="text-xs font-semibold text-brand-green-light">
                Envíos a toda la República Mexicana
              </span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
