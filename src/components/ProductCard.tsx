import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Flame } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ChileIcon } from '@/components/ChileIcon';
import { TelaEnceradaIcon } from '@/components/TelaEnceradaIcon';

interface ProductCardProps {
  product: Product;
}

function getChileVariant(product: Product): 'jalapeno' | 'serrano' | 'habanero' | null {
  if (product.id.includes('jalapeno')) return 'jalapeno';
  if (product.id.includes('serrano')) return 'serrano';
  if (product.id.includes('habanero')) return 'habanero';
  return null;
}

function getTelaVariant(product: Product): 'small' | 'medium' | 'large' | null {
  if (product.id === 'tela-10x10') return 'small';
  if (product.id === 'tela-20x20') return 'medium';
  if (product.id === 'tela-40x30') return 'large';
  return null;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(0);
  const [justAdded, setJustAdded] = useState(false);
  const chileVariant = getChileVariant(product);
  const telaVariant = getTelaVariant(product);

  const handleAdd = () => {
    addItem(product, qty > 0 ? qty : 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 600);
    setQty(0);
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-stone-200 transition-all hover:shadow-2xl hover:ring-brand-red/20">
      {/* Imagen */}
      <div className="relative h-56 overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-charcoal/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-gold-light backdrop-blur">
            {product.badge}
          </span>
        )}

        {/* Chile / Tela icon overlay */}
        {chileVariant && (
          <div className="absolute right-4 top-4 rounded-full bg-white/90 p-1 shadow-lg backdrop-blur">
            <ChileIcon variant={chileVariant} className="h-10 w-10" />
          </div>
        )}
        {telaVariant && (
          <div className="absolute right-4 top-4 rounded-full bg-white/90 p-1 shadow-lg backdrop-blur">
            <TelaEnceradaIcon variant={telaVariant} className="h-10 w-10" />
          </div>
        )}

        {/* Spice level */}
        {product.spiceLevel && (
          <div className="absolute bottom-3 left-4 flex items-center gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <Flame
                key={i}
                className={`h-4 w-4 ${
                  i < product.spiceLevel!
                    ? 'fill-brand-red text-brand-red'
                    : 'text-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl leading-tight text-brand-charcoal">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-stone-500">
            {product.sizeDetail}
          </p>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-stone-600">
          {product.description}
        </p>

        {/* Precio y gramaje */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-2xl font-black text-brand-red">$90</span>
            <span className="ml-1 text-xs font-medium text-stone-400">MXN</span>
          </div>
          <span className="rounded-lg bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600">
            {product.size}
          </span>
        </div>

        {/* Controles de cantidad y agregar */}
        <div className="flex items-center gap-3 pt-2">
          <div className="flex items-center rounded-full border border-stone-200">
            <button
              onClick={() => setQty((q) => Math.max(0, q - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-100 active:scale-90"
              aria-label="Disminuir cantidad"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center font-bold text-brand-charcoal">
              {qty}
            </span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-100 active:scale-90"
              aria-label="Aumentar cantidad"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all active:scale-95 ${
              justAdded
                ? 'bg-brand-green text-white'
                : 'bg-brand-red text-white hover:bg-brand-red-light hover:shadow-lg'
            }`}
          >
            {justAdded ? (
              <>
                <ShoppingCart className="h-4 w-4" />
                ¡Agregado!
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                Agregar
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
