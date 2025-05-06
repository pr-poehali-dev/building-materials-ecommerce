
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { CategorySection } from '@/components/home/CategorySection';
import { ProductSection } from '@/components/home/ProductSection';
import { PromoBanner } from '@/components/home/PromoBanner';
import { AboutSection } from '@/components/home/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <CategorySection />
        <ProductSection />
        <PromoBanner />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
