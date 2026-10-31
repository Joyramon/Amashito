import { useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  Truck,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  User,
  MapPin,
  Phone,
  Home,
  Hash,
  Landmark,
  FileText,
  ShoppingBag,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ESTADOS_MEXICO = [
  'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
  'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima',
  'Durango', 'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo',
  'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca',
  'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
  'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas',
];

export function CheckoutPage() {
  const { items, totalPrice, clearCart, exitCheckout } = useCart();
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [processing, setProcessing] = useState(false);
  const [cardType, setCardType] = useState<'credito' | 'debito'>('credito');

  const shipping = totalPrice >= 500 ? 0 : 80;
  const grandTotal = totalPrice + shipping;

  const handleShippingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep('success');
      clearCart();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-stone-50 pt-20 text-center">
        <ShoppingBagEmpty />
        <button
          onClick={exitCheckout}
          className="rounded-full bg-brand-red px-8 py-3 font-bold text-white transition hover:bg-brand-red-light"
        >
          Ver productos
        </button>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-stone-50 pt-20 px-4 text-center">
        <CheckCircle2 className="h-24 w-24 text-brand-green animate-pop" />
        <h1 className="font-display text-4xl text-brand-charcoal">¡PEDIDO CONFIRMADO!</h1>
        <p className="max-w-md text-stone-600">
          Gracias por tu compra. Hemos registrado tu pedido y te contactaremos
          pronto para coordinar el envío a toda la República Mexicana.
        </p>
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-stone-200">
          <Truck className="mx-auto h-10 w-10 text-brand-green" />
          <p className="mt-2 text-sm font-semibold text-stone-700">
            Recibirás tu pedido en 3-5 días hábiles
          </p>
        </div>
        <button
          onClick={exitCheckout}
          className="rounded-full bg-brand-red px-8 py-3.5 font-bold text-white shadow-lg transition hover:bg-brand-red-light"
        >
          Seguir comprando
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        {/* Back button */}
        <button
          onClick={() => {
            if (step === 'payment') setStep('shipping');
            else exitCheckout();
          }}
          className="mb-6 flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-brand-red"
        >
          <ArrowLeft className="h-4 w-4" />
          {step === 'payment' ? 'Volver a datos de envío' : 'Seguir comprando'}
        </button>

        {/* Progress bar */}
        <div className="mb-8 flex items-center gap-3">
          <StepBadge num={1} label="Envío" active={step === 'shipping'} done={step === 'payment'} />
          <div className={`h-1 flex-1 rounded-full ${step === 'payment' ? 'bg-brand-green' : 'bg-stone-200'}`} />
          <StepBadge num={2} label="Pago" active={step === 'payment'} done={false} />
        </div>

        {step === 'shipping' && (
          <form onSubmit={handleShippingSubmit} className="space-y-6">
            <FormSection title="Datos de Envío" icon={Truck}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="nombre" label="Nombre(s)" icon={User} placeholder="Ej. Juan Carlos" required />
                <Field id="apellidos" label="Apellidos" icon={User} placeholder="Ej. Pérez García" required />
                <Field id="correo" label="Correo electrónico" icon={Mail} placeholder="ejemplo@correo.com" type="email" required />
                <Field id="telefono" label="Número de teléfono" icon={Phone} placeholder="Ej. 55 1234 5678" type="tel" required />
                <Field id="direccion" label="Dirección" icon={MapPin} placeholder="Calle y número" required />
                <Field id="numeroCasa" label="Número de casa/departamento" icon={Home} placeholder="Ej. Int. 4, Depto. 2B" required />
                <Field id="codigoPostal" label="Código Postal" icon={Hash} placeholder="Ej. 01000" required />
                <SelectField id="estado" label="Estado" icon={Landmark} options={ESTADOS_MEXICO} required />
              </div>
              <div className="mt-4">
                <TextAreaField id="referencia" label="Referencia de la dirección" icon={FileText} placeholder="Ej. Casa azul con portón blanco, a un lado de la farmacia" />
              </div>
            </FormSection>

            {/* Resumen del pedido */}
            <OrderSummary items={items} totalPrice={totalPrice} shipping={shipping} grandTotal={grandTotal} />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-brand-red-light active:scale-95"
            >
              Continuar al pago
              <CreditCard className="h-5 w-5" />
            </button>
          </form>
        )}

        {step === 'payment' && (
          <form onSubmit={handlePaymentSubmit} className="space-y-6">
            <FormSection title="Datos de Pago" icon={CreditCard}>
              {/* Tipo de tarjeta */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-bold text-stone-700">
                  Tipo de tarjeta
                </label>
                <div className="flex gap-3">
                  <CardTypeButton
                    active={cardType === 'credito'}
                    onClick={() => setCardType('credito')}
                    label="Tarjeta de Crédito"
                  />
                  <CardTypeButton
                    active={cardType === 'debito'}
                    onClick={() => setCardType('debito')}
                    label="Tarjeta de Débito"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Field
                  id="numeroTarjeta"
                  label="Número de tarjeta"
                  icon={CreditCard}
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  required
                />
                <Field
                  id="nombreTarjeta"
                  label="Nombre del propietario"
                  icon={User}
                  placeholder="Como aparece en la tarjeta"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    id="vencimiento"
                    label="Fecha de vencimiento"
                    icon={Lock}
                    placeholder="MM/AA"
                    maxLength={5}
                    required
                  />
                  <Field
                    id="cvv"
                    label="CVV"
                    icon={Lock}
                    placeholder="000"
                    maxLength={4}
                    type="password"
                    required
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-green/10 px-4 py-3">
                <ShieldCheck className="h-5 w-5 flex-shrink-0 text-brand-green-dark" />
                <p className="text-xs font-semibold text-brand-green-dark">
                  Tus datos de pago están protegidos con cifrado de 256 bits
                </p>
              </div>
            </FormSection>

            {/* Resumen del pedido */}
            <OrderSummary items={items} totalPrice={totalPrice} shipping={shipping} grandTotal={grandTotal} />

            <button
              type="submit"
              disabled={processing}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-brand-red-light active:scale-95 disabled:opacity-70"
            >
              {processing ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Procesando pago...
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5" />
                  Pagar ${grandTotal}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* Helpers */

function ShoppingBagEmpty() {
  return (
    <div className="flex flex-col items-center gap-3">
      <ShoppingBag className="h-16 w-16 text-stone-300" />
      <h2 className="font-display text-2xl text-stone-400">TU CARRITO ESTÁ VACÍO</h2>
      <p className="text-sm text-stone-500">Agrega productos para continuar.</p>
    </div>
  );
}

function StepBadge({ num, label, active, done }: { num: number; label: string; active: boolean; done: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition ${
          done
            ? 'bg-brand-green text-white'
            : active
              ? 'bg-brand-red text-white'
              : 'bg-stone-200 text-stone-400'
        }`}
      >
        {done ? <CheckCircle2 className="h-5 w-5" /> : num}
      </div>
      <span className={`text-sm font-bold ${active || done ? 'text-brand-charcoal' : 'text-stone-400'}`}>
        {label}
      </span>
    </div>
  );
}

function FormSection({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-stone-200">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10">
          <Icon className="h-5 w-5 text-brand-red" />
        </div>
        <h2 className="font-display text-2xl text-brand-charcoal">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Field({
  id,
  label,
  icon: Icon,
  placeholder,
  type = 'text',
  required,
  maxLength,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  placeholder?: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-stone-700">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-10 pr-4 text-sm text-stone-800 transition focus:border-brand-red focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20"
        />
      </div>
    </div>
  );
}

function SelectField({
  id,
  label,
  icon: Icon,
  options,
  required,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-stone-700">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <select
          id={id}
          name={id}
          required={required}
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-stone-200 bg-stone-50 py-3 pl-10 pr-4 text-sm text-stone-800 transition focus:border-brand-red focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20"
        >
          <option value="" disabled>Selecciona tu estado</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function TextAreaField({
  id,
  label,
  icon: Icon,
  placeholder,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-stone-700">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          rows={3}
          className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-10 pr-4 text-sm text-stone-800 transition focus:border-brand-red focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20"
        />
      </div>
    </div>
  );
}

function CardTypeButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-xl border-2 py-3 text-sm font-bold transition ${
        active
          ? 'border-brand-red bg-brand-red/10 text-brand-red'
          : 'border-stone-200 text-stone-500 hover:border-stone-300'
      }`}
    >
      {label}
    </button>
  );
}

function OrderSummary({
  items,
  totalPrice,
  shipping,
  grandTotal,
}: {
  items: { product: { name: string; price: number; size: string }; quantity: number }[];
  totalPrice: number;
  shipping: number;
  grandTotal: number;
}) {
  return (
    <div className="rounded-3xl bg-brand-charcoal p-6 text-white">
      <h3 className="mb-4 font-display text-xl text-brand-gold">RESUMEN DEL PEDIDO</h3>
      <ul className="mb-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex justify-between text-sm text-white/70">
            <span>
              {item.product.name} × {item.quantity}
            </span>
            <span className="font-semibold">${item.product.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="space-y-1.5 border-t border-white/20 pt-3 text-sm">
        <div className="flex justify-between text-white/70">
          <span>Subtotal</span>
          <span>${totalPrice}</span>
        </div>
        <div className="flex justify-between text-white/70">
          <span>Envío</span>
          <span>{shipping === 0 ? <span className="text-brand-green-light">Gratis</span> : `$${shipping}`}</span>
        </div>
        <div className="flex justify-between border-t border-white/20 pt-2 text-base">
          <span className="font-bold">Total</span>
          <span className="font-display text-2xl text-brand-gold">${grandTotal}</span>
        </div>
      </div>
    </div>
  );
}
