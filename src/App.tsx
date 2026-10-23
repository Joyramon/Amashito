import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductGallery } from '@/components/ProductGallery';
import { StorySection } from '@/components/StorySection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50">
        <Navbar onNavigate={scrollToSection} />
        <main>
          <Hero onShopNow={() => scrollToSection('productos')} />
          <ProductGallery />
          <StorySection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
