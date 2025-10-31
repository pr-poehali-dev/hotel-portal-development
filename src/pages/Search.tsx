import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const hotels = [
  {
    id: 1,
    name: 'Гранд Отель Сочи',
    city: 'Сочи',
    country: 'Россия',
    district: 'Центральный',
    description: 'Роскошный отель на берегу Черного моря с собственным пляжем',
    stars: 5,
    rating: 9.2,
    address: 'ул. Морская, 15',
    distanceFromCenter: 2.5,
    phone: '+7 (862) 123-45-67',
    priceFrom: 5000,
    amenities: ['WiFi', 'Парковка', 'Бассейн', 'Спа', 'Ресторан'],
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/41f82c34-1d27-4d34-be48-458d95da16b1.jpg'
  },
  {
    id: 2,
    name: 'Арбат Хаус',
    city: 'Москва',
    country: 'Россия',
    district: 'Центральный',
    description: 'Бутик-отель в историческом центре Москвы',
    stars: 4,
    rating: 8.8,
    address: 'Арбат, 28',
    distanceFromCenter: 0.5,
    phone: '+7 (495) 234-56-78',
    priceFrom: 4500,
    amenities: ['WiFi', 'Завтрак', 'Кондиционер'],
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/a3da6286-d444-49c0-80fa-702c979158fd.jpg'
  },
  {
    id: 3,
    name: 'Невский Палас',
    city: 'Санкт-Петербург',
    country: 'Россия',
    district: 'Центральный',
    description: 'Элегантный отель на Невском проспекте',
    stars: 5,
    rating: 9.5,
    address: 'Невский пр., 57',
    distanceFromCenter: 1.0,
    phone: '+7 (812) 345-67-89',
    priceFrom: 6500,
    amenities: ['WiFi', 'Парковка', 'Ресторан', 'Спа', 'Тренажерный зал'],
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/426a6c6b-6d0f-4221-8f62-260db94d4050.jpg'
  },
  {
    id: 4,
    name: 'Приморский Отель',
    city: 'Владивосток',
    country: 'Россия',
    district: 'Центральный',
    description: 'Современный отель с видом на залив',
    stars: 4,
    rating: 8.6,
    address: 'ул. Светланская, 30',
    distanceFromCenter: 1.5,
    phone: '+7 (423) 456-78-90',
    priceFrom: 3500,
    amenities: ['WiFi', 'Завтрак', 'Парковка'],
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/41f82c34-1d27-4d34-be48-458d95da16b1.jpg'
  },
  {
    id: 5,
    name: 'Золотое Кольцо',
    city: 'Ярославль',
    country: 'Россия',
    district: 'Центральный',
    description: 'Уютный отель в старинном городе',
    stars: 3,
    rating: 8.3,
    address: 'ул. Кирова, 8',
    distanceFromCenter: 0.8,
    phone: '+7 (485) 567-89-01',
    priceFrom: 2800,
    amenities: ['WiFi', 'Завтрак'],
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/a3da6286-d444-49c0-80fa-702c979158fd.jpg'
  }
];

export default function Search() {
  const [currentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Hotel" size={28} className="text-primary" />
            <span className="font-heading text-2xl font-bold">HotelBooking</span>
          </Link>
          <Button variant="outline" asChild>
            <Link to="/">
              <Icon name="Home" size={16} className="mr-2" />
              На главную
            </Link>
          </Button>
        </div>
      </header>

      <div className="container py-8">
        <Card className="mb-6 animate-fade-in">
          <CardContent className="p-6">
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
            <Button className="w-full" size="lg">
              <Icon name="Search" size={20} className="mr-2" />
              Найти отель
            </Button>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 animate-fade-in">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-heading font-bold mb-4">Фильтры</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Показать</label>
                      <div className="flex gap-2">
                        <Button
                          variant={viewMode === 'list' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setViewMode('list')}
                          className="flex-1"
                        >
                          <Icon name="List" size={16} className="mr-2" />
                          Список
                        </Button>
                        <Button
                          variant={viewMode === 'map' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setViewMode('map')}
                          className="flex-1"
                        >
                          <Icon name="Map" size={16} className="mr-2" />
                          Карта
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <label className="text-sm font-medium mb-2 block">Цена за ночь</label>
                      <div className="space-y-2">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={10000}
                          step={100}
                          className="my-4"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{priceRange[0]} ₽</span>
                          <span>{priceRange[1]} ₽</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <label className="text-sm font-medium mb-2 block">Количество звезд</label>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center gap-2">
                            <input type="checkbox" id={`stars-${stars}`} className="rounded" />
                            <label htmlFor={`stars-${stars}`} className="text-sm cursor-pointer flex items-center">
                              {Array.from({ length: stars }).map((_, i) => (
                                <Icon key={i} name="Star" size={14} className="fill-amber-400 text-amber-400" />
                              ))}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <label className="text-sm font-medium mb-2 block">Оценка по отзывам</label>
                      <Select defaultValue="any">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Любая</SelectItem>
                          <SelectItem value="9">9+ Превосходно</SelectItem>
                          <SelectItem value="8">8+ Очень хорошо</SelectItem>
                          <SelectItem value="7">7+ Хорошо</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div>
                      <label className="text-sm font-medium mb-2 block">Удобства</label>
                      <div className="space-y-2">
                        {['WiFi', 'Парковка', 'Бассейн', 'Спа', 'Ресторан', 'Тренажерный зал'].map((amenity) => (
                          <div key={amenity} className="flex items-center gap-2">
                            <input type="checkbox" id={amenity} className="rounded" />
                            <label htmlFor={amenity} className="text-sm cursor-pointer">
                              {amenity}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-muted-foreground">Найдено отелей: {hotels.length}</p>
              <Select defaultValue="rating">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="price-asc">Сначала дешевые</SelectItem>
                  <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                  <SelectItem value="stars">По звездам</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover-scale animate-fade-in">
                <div className="grid md:grid-cols-3 gap-4">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="md:col-span-2 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-1">{hotel.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          {Array.from({ length: hotel.stars }).map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{hotel.city}, {hotel.country}</p>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">
                        {hotel.rating}/10
                      </Badge>
                    </div>

                    <p className="text-sm mb-4">{hotel.description}</p>

                    <div className="grid md:grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={14} className="text-muted-foreground" />
                        <span>{hotel.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Navigation" size={14} className="text-muted-foreground" />
                        <span>{hotel.distanceFromCenter} км от центра</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Phone" size={14} className="text-muted-foreground" />
                        <span>{hotel.phone}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity) => (
                        <Badge key={amenity} variant="outline">{amenity}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Номер от</p>
                        <p className="font-heading text-2xl font-bold text-primary">
                          {hotel.priceFrom} ₽<span className="text-sm text-muted-foreground font-normal">/ночь</span>
                        </p>
                      </div>
                      <Button asChild>
                        <Link to={`/result/${hotel.id}`}>
                          Выбрать номер
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}

            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>{currentPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
