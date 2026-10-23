import { useState } from 'react';
import { PRODUCTS, CATEGORY_LABELS, type ProductCategory } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ChileIcon } from '@/components/ChileIcon';

type Filter = 'all' | ProductCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'chicharron', label: 'Chicharrones' },
  { id: 'pasta', label: 'Pasta de Ajo' },
  { id: 'tela', label: 'Telas Enceradas' },
];

export function ProductGallery() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered =
    filter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="productos" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Nuestros Productos
          </span>
          <h2 className="mt-2 font-display text-5xl text-brand-charcoal sm:text-6xl">
            GALERÍA AMASHITO
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-600">
            Cada producto a $90 MXN. Selecciona tus favoritos, agrega la cantidad que quieras y recíbelo en tu casa.
          </p>
        </div>

        {/* Iconos de chile decorativos */}
        <div className="mb-10 flex items-center justify-center gap-4">
          <ChileIcon variant="jalapeno" className="h-10 w-10" />
          <ChileIcon variant="serrano" className="h-10 w-10" />
          <ChileIcon variant="habanero" className="h-10 w-10" />
        </div>

        {/* Filtros */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                filter === f.id
                  ? 'bg-brand-red text-white shadow-lg'
                  : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:ring-brand-red/30'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Nota de envíos */}
        <div className="mt-12 flex items-center justify-center gap-3 rounded-2xl bg-brand-green/10 px-6 py-4 text-center">
          <span className="text-2xl">🇲🇽</span>
          <p className="text-sm font-semibold text-brand-green-dark">
            Realizamos envíos a toda la República Mexicana
          </p>
        </div>
      </div>
    </section>
  );
}
