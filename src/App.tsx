import { CartProvider, useCart } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductGallery } from '@/components/ProductGallery';
import { StorySection } from '@/components/StorySection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { CheckoutPage } from '@/components/CheckoutPage';
import { UsageGuideSection } from '@/components/UsageGuideSection';

function AppContent() {
  const { checkoutMode } = useCart();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (checkoutMode) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Navbar onNavigate={scrollToSection} />
        <CheckoutPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar onNavigate={scrollToSection} />
      <main>
        <Hero onShopNow={() => scrollToSection('productos')} />
        <ProductGallery />
        <UsageGuideSection />
        <StorySection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
