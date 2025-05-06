
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export function ProductSection() {
  return (
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
  );
}
