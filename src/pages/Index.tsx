
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { CategoryCard } from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/data/products';
import { Truck, Shield, Percent, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero секция */}
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
        
        {/* Преимущества */}
        <section className="py-10">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex p-4 rounded-lg bg-gray-50">
                <Truck className="h-10 w-10 text-brand mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Быстрая доставка</h3>
                  <p className="text-sm text-gray-600">Доставим по Москве и области</p>
                </div>
              </div>
              <div className="flex p-4 rounded-lg bg-gray-50">
                <Shield className="h-10 w-10 text-brand mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Гарантия качества</h3>
                  <p className="text-sm text-gray-600">Только сертифицированные товары</p>
                </div>
              </div>
              <div className="flex p-4 rounded-lg bg-gray-50">
                <Percent className="h-10 w-10 text-brand mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Выгодные цены</h3>
                  <p className="text-sm text-gray-600">Специальные предложения</p>
                </div>
              </div>
              <div className="flex p-4 rounded-lg bg-gray-50">
                <Award className="h-10 w-10 text-brand mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">10 лет на рынке</h3>
                  <p className="text-sm text-gray-600">Опыт и надежность</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Популярные категории */}
        <section className="py-10">
          <div className="container">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Популярные категории</h2>
              <Link to="/catalog" className="text-brand hover:underline font-medium">
                Все категории
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map(category => (
                <CategoryCard 
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  image={category.image}
                  slug={category.slug}
                  count={category.count}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Хиты продаж */}
        <section className="py-10">
          <div className="container">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Хиты продаж</h2>
              <Link to="/bestsellers" className="text-brand hover:underline font-medium">
                Все хиты продаж
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  image={product.image}
                  unit={product.unit}
                  discount={product.discount}
                  new={product.new}
                  bestseller={product.bestseller}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Баннер с акцией */}
        <section className="py-10 bg-gray-100">
          <div className="container">
            <div className="bg-brand text-white rounded-lg p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-white text-brand px-3 py-1 rounded-full text-sm font-bold mb-4">Специальное предложение</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Скидка 20% на все виды утеплителей</h2>
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
        
        {/* Информационный блок */}
        <section className="py-10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">СтройМаркет - ваш надежный поставщик строительных материалов</h2>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
