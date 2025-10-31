import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const topHotels = [
  {
    id: 1,
    name: 'Гранд Отель Сочи',
    city: 'Сочи',
    country: 'Россия',
    description: 'Роскошный отель на берегу Черного моря с собственным пляжем и спа-центром мирового класса',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/41f82c34-1d27-4d34-be48-458d95da16b1.jpg'
  },
  {
    id: 2,
    name: 'Арбат Хаус',
    city: 'Москва',
    country: 'Россия',
    description: 'Бутик-отель в сердце исторического центра Москвы с видом на Кремль',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/a3da6286-d444-49c0-80fa-702c979158fd.jpg'
  },
  {
    id: 3,
    name: 'Невский Палас',
    city: 'Санкт-Петербург',
    country: 'Россия',
    description: 'Элегантный отель на Невском проспекте с изысканными интерьерами',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/426a6c6b-6d0f-4221-8f62-260db94d4050.jpg'
  }
];

const popularHotels = [
  {
    id: 1,
    name: 'Отель Метрополь',
    city: 'Москва',
    phone: '+7 (495) 123-45-67',
    address: 'ул. Тверская, 15',
    price: '5000',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/41f82c34-1d27-4d34-be48-458d95da16b1.jpg'
  },
  {
    id: 2,
    name: 'Приморский Отель',
    city: 'Владивосток',
    phone: '+7 (423) 234-56-78',
    address: 'ул. Светланская, 30',
    price: '3500',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/426a6c6b-6d0f-4221-8f62-260db94d4050.jpg'
  },
  {
    id: 3,
    name: 'Золотое Кольцо',
    city: 'Ярославль',
    phone: '+7 (485) 345-67-89',
    address: 'ул. Кирова, 8',
    price: '2800',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/a3da6286-d444-49c0-80fa-702c979158fd.jpg'
  },
  {
    id: 4,
    name: 'Байкал Резорт',
    city: 'Иркутск',
    phone: '+7 (395) 456-78-90',
    address: 'ул. Набережная, 5',
    price: '4200',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/41f82c34-1d27-4d34-be48-458d95da16b1.jpg'
  },
  {
    id: 5,
    name: 'Кавказ Спа',
    city: 'Кисловодск',
    phone: '+7 (879) 567-89-01',
    address: 'проспект Мира, 22',
    price: '3200',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/426a6c6b-6d0f-4221-8f62-260db94d4050.jpg'
  },
  {
    id: 6,
    name: 'Отель Эрмитаж',
    city: 'Санкт-Петербург',
    phone: '+7 (812) 678-90-12',
    address: 'Дворцовая наб., 18',
    price: '6500',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/a3da6286-d444-49c0-80fa-702c979158fd.jpg'
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center gap-2">
                <Icon name="Hotel" size={28} className="text-primary" />
                <span className="font-heading text-2xl font-bold">Hotel<span className="text-primary">Booking</span></span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/search" className="text-sm font-medium hover:text-primary transition-colors">
                Поиск
              </Link>
              <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">
                Личный кабинет
              </Link>
              <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">
                Избранное
              </Link>
              <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">
                Бронирования
              </Link>
              <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">
                Мои заказы
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:88007775577" className="hidden md:flex items-center gap-2 text-sm font-medium">
              <Icon name="Phone" size={16} />
              8-800-777-55-77
            </a>
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login">Войти</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Регистрация</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Топ-10 отелей России</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {topHotels.map((hotel) => (
                <CarouselItem key={hotel.id}>
                  <Card className="overflow-hidden animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-6">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-[400px] object-cover"
                      />
                      <CardContent className="flex flex-col justify-center p-8">
                        <h3 className="font-heading text-2xl font-bold mb-2">{hotel.name}</h3>
                        <p className="text-muted-foreground mb-4">{hotel.city}, {hotel.country}</p>
                        <p className="text-foreground mb-6">{hotel.description}</p>
                        <Button asChild>
                          <Link to={`/result/${hotel.id}`}>Подробнее</Link>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Быстрый поиск</h2>
          <div className="flex gap-4">
            <Input
              placeholder="Введите название отеля..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button asChild>
              <Link to="/search">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover-scale animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="DollarSign" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Низкие цены</h3>
              <p className="text-muted-foreground">Лучшие предложения на рынке</p>
            </Card>
            <Card className="text-center p-8 hover-scale animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Отели по всей стране</h3>
              <p className="text-muted-foreground">Более 10,000 отелей в России</p>
            </Card>
            <Card className="text-center p-8 hover-scale animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Headphones" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Мы всегда на связи для вас</p>
            </Card>
          </div>

          <h2 className="font-heading text-3xl font-bold mb-8">Популярные отели</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {popularHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover-scale animate-fade-in">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-heading text-lg font-bold mb-2">{hotel.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{hotel.city}</p>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Icon name="Phone" size={14} />
                    <span>{hotel.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <Icon name="MapPin" size={14} />
                    <span>{hotel.address}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">от </span>
                      <span className="font-heading text-xl font-bold text-primary">{hotel.price} ₽</span>
                      <span className="text-sm text-muted-foreground">/ночь</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Найдите идеальный отель</h2>
          <Card className="p-6">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Направление/город, страна</label>
                <Input placeholder="Куда едем?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Даты заезда-отъезда</label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Количество гостей</label>
                <Input type="number" placeholder="1" min="1" />
              </div>
            </div>
            <Button className="w-full" size="lg" asChild>
              <Link to="/search">
                <Icon name="Search" size={20} className="mr-2" />
                Найти отель
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Подпишитесь на новости</h2>
          <Card className="p-6">
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="consent" className="rounded" />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  Согласен на обработку персональных данных
                </label>
              </div>
              <Button className="w-full">Подписаться</Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  8-800-777-55-77
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  hotel@hotel.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Клиентам</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Как забронировать</p>
                <p>Оплата и возврат</p>
                <p>FAQ</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Партнерам</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><Link to="/add">Добавить отель</Link></p>
                <p>Партнерская программа</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">О нас</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>О компании</p>
                <p>Контакты</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-8">
            <nav className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Главная</Link>
              <Link to="/register" className="hover:text-primary">Регистрация</Link>
              <Link to="/login" className="hover:text-primary">Авторизация</Link>
              <Link to="/profile" className="hover:text-primary">Личный кабинет</Link>
              <Link to="/search" className="hover:text-primary">Поиск</Link>
              <Button variant="link" className="h-auto p-0 text-sm">Задать вопрос</Button>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
