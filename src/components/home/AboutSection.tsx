
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              СтройМаркет - ваш надежный поставщик строительных материалов
            </h2>
            <p className="mb-4 text-gray-700">
              Компания СтройМаркет работает на рынке строительных материалов уже более 10 лет. 
              За это время мы зарекомендовали себя как надежный поставщик качественных строительных материалов.
            </p>
            <p className="mb-4 text-gray-700">
              Мы предлагаем широкий ассортимент товаров для строительства и ремонта: от цемента и пиломатериалов до 
              отделочных материалов и инструментов. Работаем напрямую с производителями, что позволяет предлагать нашим 
              клиентам выгодные цены.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">Подробнее о компании</Link>
            </Button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000" 
              alt="Склад строительных материалов" 
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
