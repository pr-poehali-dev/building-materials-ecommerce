
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function PromoBanner() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container">
        <div className="bg-brand text-white rounded-lg p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-white text-brand px-3 py-1 rounded-full text-sm font-bold mb-4">
                Специальное предложение
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Скидка 20% на все виды утеплителей
              </h2>
              <p className="mb-6 text-white/90">
                Только до конца месяца! Успейте приобрести качественные утеплители для вашего дома по выгодной цене.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/category/insulation">Перейти к утеплителям</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1607400201515-c2c41c07d307?q=80&w=1000" 
                alt="Утеплители со скидкой" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
