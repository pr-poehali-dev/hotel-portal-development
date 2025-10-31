import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const confirmedBookings = [
  {
    id: 1,
    hotelName: 'Гранд Отель Сочи',
    city: 'Сочи',
    country: 'Россия',
    checkIn: '15.12.2024',
    checkOut: '20.12.2024',
    price: 25000,
    cancellation: 'Бесплатная отмена до 10.12.2024',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/41f82c34-1d27-4d34-be48-458d95da16b1.jpg',
    comment: 'Номер с видом на море, поздний выезд'
  },
  {
    id: 2,
    hotelName: 'Невский Палас',
    city: 'Санкт-Петербург',
    country: 'Россия',
    checkIn: '01.01.2025',
    checkOut: '05.01.2025',
    price: 32000,
    cancellation: 'Платная отмена (2000 ₽)',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/426a6c6b-6d0f-4221-8f62-260db94d4050.jpg',
    comment: 'Ранний заезд, дополнительная подушка'
  }
];

const pendingBookings = [
  {
    id: 3,
    hotelName: 'Арбат Хаус',
    city: 'Москва',
    country: 'Россия',
    checkIn: '25.12.2024',
    checkOut: '28.12.2024',
    price: 18000,
    cancellation: 'Бесплатная отмена до 20.12.2024',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/a3da6286-d444-49c0-80fa-702c979158fd.jpg',
    comment: 'Тихий номер, высокий этаж'
  },
  {
    id: 4,
    hotelName: 'Байкал Резорт',
    city: 'Иркутск',
    country: 'Россия',
    checkIn: '10.02.2025',
    checkOut: '15.02.2025',
    price: 21000,
    cancellation: 'Бесплатная отмена до 05.02.2025',
    image: 'https://cdn.poehali.dev/projects/a759bbd4-db2b-469a-9c6d-5d61dcf1068c/files/41f82c34-1d27-4d34-be48-458d95da16b1.jpg',
    comment: 'Номер для некурящих'
  }
];

export default function Profile() {
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
        <h1 className="font-heading text-4xl font-bold mb-8">Личный кабинет</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading">Личная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">ФИО</p>
                    <p className="font-medium">Иванов Иван Иванович</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Edit" size={16} />
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Паспортные данные</p>
                    <p className="font-medium">1234 567890</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Edit" size={16} />
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="font-medium">+7 (999) 123-45-67</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Edit" size={16} />
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="font-medium">ivan@example.com</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Edit" size={16} />
                  </Button>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Icon name="Heart" size={24} className="mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">Избранных</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Icon name="Calendar" size={24} className="mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-sm text-muted-foreground">Броней</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-green-500 hover:bg-green-600">Подтверждено</Badge>
                <h2 className="font-heading text-2xl font-bold">Подтвержденные брони</h2>
              </div>
              <div className="space-y-4">
                {confirmedBookings.map((booking) => (
                  <Card key={booking.id} className="overflow-hidden border-green-200 animate-fade-in">
                    <div className="grid md:grid-cols-3 gap-4">
                      <img
                        src={booking.image}
                        alt={booking.hotelName}
                        className="w-full h-full object-cover"
                      />
                      <CardContent className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-heading text-xl font-bold mb-1">{booking.hotelName}</h3>
                            <p className="text-sm text-muted-foreground">{booking.city}, {booking.country}</p>
                          </div>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Подтверждено
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="CalendarCheck" size={16} className="text-primary" />
                            <span>Заезд: {booking.checkIn}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="CalendarX" size={16} className="text-primary" />
                            <span>Выезд: {booking.checkOut}</span>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-lg mb-4">
                          <p className="text-sm text-muted-foreground mb-1">Комментарий:</p>
                          <p className="text-sm">{booking.comment}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{booking.cancellation}</p>
                            <p className="font-heading text-2xl font-bold text-primary">{booking.price} ₽</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" size={16} className="mr-2" />
                              Редактировать
                            </Button>
                            <Button variant="destructive" size="sm">
                              <Icon name="Trash2" size={16} className="mr-2" />
                              Удалить
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-amber-500 hover:bg-amber-600">Не подтверждено</Badge>
                <h2 className="font-heading text-2xl font-bold">Ожидают подтверждения</h2>
              </div>
              <div className="space-y-4">
                {pendingBookings.map((booking) => (
                  <Card key={booking.id} className="overflow-hidden border-amber-200 animate-fade-in">
                    <div className="grid md:grid-cols-3 gap-4">
                      <img
                        src={booking.image}
                        alt={booking.hotelName}
                        className="w-full h-full object-cover"
                      />
                      <CardContent className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-heading text-xl font-bold mb-1">{booking.hotelName}</h3>
                            <p className="text-sm text-muted-foreground">{booking.city}, {booking.country}</p>
                          </div>
                          <Badge variant="outline" className="text-amber-600 border-amber-600">
                            Ожидание
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="CalendarCheck" size={16} className="text-primary" />
                            <span>Заезд: {booking.checkIn}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="CalendarX" size={16} className="text-primary" />
                            <span>Выезд: {booking.checkOut}</span>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-lg mb-4">
                          <p className="text-sm text-muted-foreground mb-1">Комментарий:</p>
                          <p className="text-sm">{booking.comment}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{booking.cancellation}</p>
                            <p className="font-heading text-2xl font-bold text-primary">{booking.price} ₽</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" size={16} className="mr-2" />
                              Редактировать
                            </Button>
                            <Button variant="destructive" size="sm">
                              <Icon name="Trash2" size={16} className="mr-2" />
                              Удалить
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
