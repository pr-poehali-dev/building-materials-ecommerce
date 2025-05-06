
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

type ProductProps = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  unit: string;
  discount?: boolean;
  new?: boolean;
  bestseller?: boolean;
  category: string;
}

export function ProductCard({ id, name, price, oldPrice, image, unit, discount, new: isNew, bestseller, category }: ProductProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discount && <Badge className="bg-red-500 hover:bg-red-600">-{Math.round(((oldPrice! - price) / oldPrice!) * 100)}%</Badge>}
          {isNew && <Badge className="bg-blue-500 hover:bg-blue-600">Новинка</Badge>}
          {bestseller && <Badge className="bg-brand hover:bg-brand-dark">Хит</Badge>}
        </div>
      </div>
      
      <CardContent className="pt-4 flex-1">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <h3 className="font-medium line-clamp-2 h-12">{name}</h3>
        
        <div className="mt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg">{price.toLocaleString()} ₽</span>
            <span className="text-sm text-muted-foreground">/ {unit}</span>
            {oldPrice && (
              <span className="text-muted-foreground line-through text-sm">{oldPrice.toLocaleString()} ₽</span>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
}
