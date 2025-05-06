
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">О компании</h3>
            <div className="text-2xl font-bold text-brand flex items-center mb-4">
              <span className="bg-brand text-white p-1 rounded mr-2">СМ</span>
              СтройМаркет
            </div>
            <p className="text-gray-600 mb-4">
              Ваш надежный поставщик строительных материалов с 2010 года. 
              Работаем напрямую с производителями.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/category/cement" className="text-gray-600 hover:text-brand">Цемент и смеси</Link></li>
              <li><Link to="/category/lumber" className="text-gray-600 hover:text-brand">Пиломатериалы</Link></li>
              <li><Link to="/category/metal" className="text-gray-600 hover:text-brand">Металлопрокат</Link></li>
              <li><Link to="/category/insulation" className="text-gray-600 hover:text-brand">Теплоизоляция</Link></li>
              <li><Link to="/category/paints" className="text-gray-600 hover:text-brand">Краски и лаки</Link></li>
              <li><Link to="/category/tools" className="text-gray-600 hover:text-brand">Инструменты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Покупателям</h3>
            <ul className="space-y-2">
              <li><Link to="/delivery" className="text-gray-600 hover:text-brand">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-600 hover:text-brand">Оплата</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-brand">Возврат и обмен</Link></li>
              <li><Link to="/sales" className="text-gray-600 hover:text-brand">Акции и скидки</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-brand">Часто задаваемые вопросы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-brand" />
                <span className="text-gray-600">г. Москва, ул. Строителей, д. 123</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-brand" />
                <a href="tel:+78001234567" className="text-gray-600 hover:text-brand">8 (800) 123-45-67</a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-brand" />
                <a href="mailto:info@stroymarket.ru" className="text-gray-600 hover:text-brand">info@stroymarket.ru</a>
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              <strong>График работы:</strong><br />
              Пн-Пт: 8:00 - 20:00<br />
              Сб-Вс: 9:00 - 18:00
            </p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 СтройМаркет. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link to="/privacy" className="text-gray-500 text-sm hover:text-brand">Политика конфиденциальности</Link></li>
                <li><Link to="/terms" className="text-gray-500 text-sm hover:text-brand">Пользовательское соглашение</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
