
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Строительные материалы<br />
              <span className="text-brand">по выгодным ценам</span>
            </h1>
            <p className="text-lg mb-6 text-gray-600">
              Всё для строительства и ремонта вашего дома.
              Качественные материалы напрямую от производителей.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/sales">Акции и скидки</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000" 
              alt="Строительные материалы" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
