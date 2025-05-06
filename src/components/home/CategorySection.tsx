
import { Link } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/products';

export function CategorySection() {
  return (
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
  );
}
