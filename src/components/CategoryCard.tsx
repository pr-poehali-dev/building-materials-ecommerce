
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

type CategoryProps = {
  id: number;
  name: string;
  image: string;
  slug: string;
  count: number;
}

export function CategoryCard({ name, image, slug, count }: CategoryProps) {
  return (
    <Link to={`/category/${slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
        <div className="overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{count} товаров</p>
        </CardContent>
      </Card>
    </Link>
  );
}
