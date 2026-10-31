import { useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    goToCheckout,
  } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const shipping = totalPrice >= 500 ? 0 : totalPrice > 0 ? 80 : 0;
  const grandTotal = totalPrice + shipping;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 bg-brand-charcoal px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-brand-gold" />
            <h2 className="font-display text-xl text-white">CARRITO</h2>
            {totalItems > 0 && (
              <span className="rounded-full bg-brand-red px-2 py-0.5 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="rounded-full p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
            aria-label="Cerrar carrito"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          /* Carrito vacío */
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <ShoppingBag className="h-16 w-16 text-stone-300" />
            <h3 className="font-display text-2xl text-stone-400">
              TU CARRITO ESTÁ VACÍO
            </h3>
            <p className="text-sm text-stone-500">
              Agrega algunos de nuestros productos artesanales para comenzar.
            </p>
            <button
              onClick={closeCart}
              className="mt-2 rounded-full bg-brand-red px-6 py-2.5 font-bold text-white transition hover:bg-brand-red-light"
            >
              Ver productos
            </button>
          </div>
        ) : (
          <>
            {/* Lista de items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li
                    key={item.product.id}
                    className="flex gap-3 rounded-2xl bg-stone-50 p-3 ring-1 ring-stone-200"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                    />
                    <div className="flex flex-1 flex-col gap-1">
                      <h4 className="text-sm font-bold leading-tight text-brand-charcoal">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-stone-500">
                        {item.product.size} · ${item.product.price} c/u
                      </p>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex items-center rounded-full bg-white ring-1 ring-stone-200">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-100"
                            aria-label="Disminuir"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-7 text-center text-sm font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-100"
                            aria-label="Aumentar"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-brand-red">
                            ${item.product.price * item.quantity}
                          </span>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="rounded-full p-1 text-stone-400 transition hover:bg-red-50 hover:text-brand-red"
                            aria-label="Eliminar"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Envío gratis banner */}
              {shipping > 0 && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-gold/10 px-3 py-2 text-xs text-brand-charcoal">
                  <Truck className="h-4 w-4 text-brand-gold" />
                  <span>
                    Agrega ${500 - totalPrice} más y obtén <strong>envío gratis</strong>
                  </span>
                </div>
              )}
              {shipping === 0 && totalPrice > 0 && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-green/10 px-3 py-2 text-xs font-semibold text-brand-green-dark">
                  <CheckCircle2 className="h-4 w-4" />
                  ¡Felicidades! Tienes envío gratis
                </div>
              )}
            </div>

            {/* Footer con totales y pagar */}
            <div className="border-t border-stone-200 bg-stone-50 px-5 py-4">
              <div className="mb-3 space-y-1.5 text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">${totalPrice}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Envío</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-brand-green">Gratis</span>
                    ) : (
                      `$${shipping}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between border-t border-stone-200 pt-2 text-base">
                  <span className="font-bold text-brand-charcoal">Total</span>
                  <span className="font-display text-2xl text-brand-red">
                    ${grandTotal}
                  </span>
                </div>
              </div>

              <button
                onClick={goToCheckout}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red py-3.5 font-bold text-white shadow-lg transition-all hover:bg-brand-red-light active:scale-95"
              >
                <ShoppingBag className="h-5 w-5" />
                Completar pedido · ${grandTotal}
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-stone-400">
                <ShieldCheck className="h-4 w-4" />
                Pago seguro · Envíos a toda la República
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
