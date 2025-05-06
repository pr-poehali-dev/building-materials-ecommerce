
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container py-4 flex items-center justify-between">
        {/* Логотип */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-brand flex items-center">
              <span className="bg-brand text-white p-1 rounded mr-2">СМ</span>
              СтройМаркет
            </div>
          </Link>
        </div>

        {/* Поиск - скрыт на мобильных */}
        <div className="hidden md:flex relative w-full max-w-md mx-4">
          <Input
            type="search"
            placeholder="Поиск товаров..."
            className="pr-10"
          />
          <Button variant="ghost" size="icon" className="absolute right-0 top-0">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Контакты и корзина */}
        <div className="flex items-center gap-4">
          <a href="tel:+78001234567" className="hidden md:flex items-center text-muted-foreground">
            <Phone className="mr-2 h-4 w-4" />
            <span>8 (800) 123-45-67</span>
          </a>
          
          <Link to="/cart" className="flex items-center">
            <Button variant="outline" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Корзина</span>
              <span className="bg-brand text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
            </Button>
          </Link>

          {/* Мобильная навигация */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="py-4">
                <h2 className="text-xl font-bold mb-4">Меню</h2>
                <nav className="flex flex-col space-y-3">
                  <Link to="/" className="py-2 px-4 hover:bg-muted rounded-md">Главная</Link>
                  <Link to="/catalog" className="py-2 px-4 hover:bg-muted rounded-md">Каталог</Link>
                  <Link to="/about" className="py-2 px-4 hover:bg-muted rounded-md">О компании</Link>
                  <Link to="/delivery" className="py-2 px-4 hover:bg-muted rounded-md">Доставка</Link>
                  <Link to="/contacts" className="py-2 px-4 hover:bg-muted rounded-md">Контакты</Link>
                </nav>
                <div className="mt-4 pt-4 border-t">
                  <a href="tel:+78001234567" className="flex items-center py-2 px-4">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>8 (800) 123-45-67</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Основная навигация - скрыта на мобильных */}
      <nav className="hidden md:block border-t">
        <div className="container">
          <ul className="flex space-x-8">
            <li>
              <Link to="/catalog" className="py-3 inline-block font-medium hover:text-brand">
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/sales" className="py-3 inline-block font-medium hover:text-brand">
                Акции
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="py-3 inline-block font-medium hover:text-brand">
                Доставка
              </Link>
            </li>
            <li>
              <Link to="/about" className="py-3 inline-block font-medium hover:text-brand">
                О компании
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="py-3 inline-block font-medium hover:text-brand">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
