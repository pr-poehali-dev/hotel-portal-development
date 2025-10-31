import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const hotelData = {
  id: 1,
  name: 'Гранд Отель Сочи',
  type: 'Курортный отель',
  city: 'Сочи',
  country: 'Россия',
  description: 'Роскошный пятизвездочный отель на берегу Черного моря с собственным пляжем и спа-центром мирового класса. Идеальное место для отдыха с семьей или романтического путешествия. К вашим услугам просторные номера с видом на море, рестораны с изысканной кухней и множество развлечений.',
  stars: 5,
  rating: 9.2,
  phone: '+7 (862) 123-45-67',
  email: 'info@grandhotel-sochi.ru',
  minPrice: 5000,
  images: [
    'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/41f82c34-1d27-4d34-be48-458d95da16b1.jpg',
    'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/a3da6286-d444-49c0-80fa-702c979158fd.jpg',
    'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/426a6c6b-6d0f-4221-8f62-260db94d4050.jpg'
  ],
  amenities: [
    { icon: 'Wifi', name: 'Бесплатный Wi-Fi' },
    { icon: 'Car', name: 'Парковка' },
    { icon: 'Waves', name: 'Бассейн' },
    { icon: 'Dumbbell', name: 'Тренажерный зал' },
    { icon: 'UtensilsCrossed', name: 'Ресторан' },
    { icon: 'Wind', name: 'Кондиционер' },
    { icon: 'Bath', name: 'Спа-центр' },
    { icon: 'Shirt', name: 'Прачечная' }
  ],
  rooms: [
    {
      id: 1,
      name: 'Стандартный номер',
      price: 5000,
      features: ['2 односпальные кровати', 'Вид на город', '25 м²']
    },
    {
      id: 2,
      name: 'Номер Делюкс с видом на море',
      price: 8500,
      features: ['1 двуспальная кровать', 'Вид на море', '35 м²', 'Балкон']
    },
    {
      id: 3,
      name: 'Люкс',
      price: 15000,
      features: ['1 двуспальная кровать', 'Вид на море', '55 м²', 'Балкон', 'Гостиная зона']
    }
  ]
};

export default function Result() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Hotel" size={28} className="text-primary" />
            <span className="font-heading text-2xl font-bold">HotelBooking</span>
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/search">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад к поиску
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">
                <Icon name="Home" size={16} className="mr-2" />
                На главную
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-3 gap-4 animate-fade-in">
              <img
                src={hotelData.images[0]}
                alt={hotelData.name}
                className="col-span-3 w-full h-[400px] object-cover rounded-lg"
              />
              <img
                src={hotelData.images[1]}
                alt={hotelData.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src={hotelData.images[2]}
                alt={hotelData.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={hotelData.images[0]}
                  alt={hotelData.name}
                  className="w-full h-48 object-cover brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="secondary">
                    <Icon name="Image" size={20} className="mr-2" />
                    Все фото
                  </Button>
                </div>
              </div>
            </div>

            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {Array.from({ length: hotelData.stars }).map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <h1 className="font-heading text-4xl font-bold mb-2">{hotelData.name}</h1>
                    <p className="text-muted-foreground">{hotelData.type}</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                    {hotelData.rating}/10
                  </Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span>{hotelData.city}, {hotelData.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    <span>{hotelData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    <span>{hotelData.email}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">Об отеле</h2>
                  <p className="text-foreground leading-relaxed">{hotelData.description}</p>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">Удобства</h2>
                  <div className="grid md:grid-cols-4 gap-4">
                    {hotelData.amenities.map((amenity) => (
                      <div key={amenity.name} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={amenity.icon as any} size={20} className="text-primary" />
                        </div>
                        <span className="text-sm">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h2 className="font-heading text-2xl font-bold mb-6">Доступные номера</h2>
                <div className="space-y-4">
                  {hotelData.rooms.map((room) => (
                    <div key={room.id} className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors">
                      <div>
                        <h3 className="font-heading text-lg font-bold mb-2">{room.name}</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          {room.features.map((feature) => (
                            <Badge key={feature} variant="outline">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-heading text-2xl font-bold text-primary mb-2">
                          {room.price} ₽
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">за ночь</p>
                        <Button>
                          <Icon name="Check" size={16} className="mr-2" />
                          Забронировать
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-fade-in">
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Цена от</p>
                  <p className="font-heading text-4xl font-bold text-primary mb-1">
                    {hotelData.minPrice} ₽
                  </p>
                  <p className="text-sm text-muted-foreground">за ночь</p>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Дата заезда</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Дата выезда</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Количество гостей</label>
                    <Input type="number" placeholder="2" min="1" />
                  </div>
                </div>

                <Button className="w-full mb-4" size="lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать
                </Button>

                <Button variant="outline" className="w-full" size="lg">
                  <Icon name="Heart" size={20} className="mr-2" />
                  В избранное
                </Button>

                <Separator className="my-6" />

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-green-600">
                    <Icon name="CheckCircle" size={16} />
                    <span>Бесплатная отмена</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Icon name="CheckCircle" size={16} />
                    <span>Без предоплаты</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Icon name="CheckCircle" size={16} />
                    <span>Мгновенное подтверждение</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
