import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Booking {
  id: number;
  status: 'moderation' | 'confirmed' | 'rejected';
  hotelName: string;
  city: string;
  country: string;
  checkIn: string;
  checkOut: string;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  roomType: string;
  price: number;
  comment: string;
  createdAt: string;
}

const initialBookings: Booking[] = [
  {
    id: 1,
    status: 'moderation',
    hotelName: 'Гранд Отель Сочи',
    city: 'Сочи',
    country: 'Россия',
    checkIn: '15.12.2024',
    checkOut: '20.12.2024',
    guestName: 'Петров Петр Петрович',
    guestPhone: '+7 (999) 111-22-33',
    guestEmail: 'petrov@example.com',
    roomType: 'Люкс с видом на море',
    price: 25000,
    comment: 'Номер с видом на море, поздний выезд',
    createdAt: '01.11.2024'
  },
  {
    id: 2,
    status: 'moderation',
    hotelName: 'Невский Палас',
    city: 'Санкт-Петербург',
    country: 'Россия',
    checkIn: '01.01.2025',
    checkOut: '05.01.2025',
    guestName: 'Сидоров Сидор Сидорович',
    guestPhone: '+7 (999) 333-44-55',
    guestEmail: 'sidorov@example.com',
    roomType: 'Стандартный двухместный',
    price: 32000,
    comment: 'Ранний заезд, дополнительная подушка',
    createdAt: '28.10.2024'
  },
  {
    id: 3,
    status: 'confirmed',
    hotelName: 'Арбат Хаус',
    city: 'Москва',
    country: 'Россия',
    checkIn: '25.12.2024',
    checkOut: '28.12.2024',
    guestName: 'Иванов Иван Иванович',
    guestPhone: '+7 (999) 555-66-77',
    guestEmail: 'ivanov@example.com',
    roomType: 'Одноместный стандарт',
    price: 18000,
    comment: 'Тихий номер, высокий этаж',
    createdAt: '20.10.2024'
  },
  {
    id: 4,
    status: 'rejected',
    hotelName: 'Байкал Резорт',
    city: 'Иркутск',
    country: 'Россия',
    checkIn: '10.02.2025',
    checkOut: '15.02.2025',
    guestName: 'Козлов Григорий Михайлович',
    guestPhone: '+7 (999) 777-88-99',
    guestEmail: 'kozlov@example.com',
    roomType: 'Семейный номер',
    price: 21000,
    comment: 'Номер для некурящих, детская кроватка',
    createdAt: '15.10.2024'
  }
];

export default function OrdersManagement() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [sortBy, setSortBy] = useState<string>('date');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const updateBookingStatus = (id: number, newStatus: 'confirmed' | 'rejected') => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'moderation':
        return <Badge className="bg-amber-500 hover:bg-amber-600">На модерации</Badge>;
      case 'confirmed':
        return <Badge className="bg-green-500 hover:bg-green-600">Подтверждено</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Отклонено</Badge>;
      default:
        return null;
    }
  };

  const filteredBookings = bookings.filter(booking =>
    filterStatus === 'all' || booking.status === filterStatus
  );

  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.createdAt.split('.').reverse().join('-')).getTime() -
        new Date(a.createdAt.split('.').reverse().join('-')).getTime();
    }
    return 0;
  });

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">Управление бронями</h1>
            <p className="text-muted-foreground">Администраторская панель</p>
          </div>
          <div className="flex gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Статус</label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все брони</SelectItem>
                  <SelectItem value="moderation">На модерации</SelectItem>
                  <SelectItem value="confirmed">Подтверждено</SelectItem>
                  <SelectItem value="rejected">Отклонено</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Сортировка</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">По дате создания</SelectItem>
                  <SelectItem value="checkIn">По дате заезда</SelectItem>
                  <SelectItem value="price">По стоимости</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {sortedBookings.map((booking) => (
            <Card key={booking.id} className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading text-xl font-bold">{booking.hotelName}</h3>
                      {getStatusBadge(booking.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {booking.city}, {booking.country}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Создана</p>
                    <p className="font-medium">{booking.createdAt}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Информация о госте</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="User" size={14} />
                          <span>{booking.guestName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Phone" size={14} />
                          <span>{booking.guestPhone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Mail" size={14} />
                          <span>{booking.guestEmail}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Детали бронирования</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="CalendarCheck" size={14} />
                          <span>Заезд: {booking.checkIn}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="CalendarX" size={14} />
                          <span>Выезд: {booking.checkOut}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Bed" size={14} />
                          <span>{booking.roomType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {booking.comment && (
                  <div className="bg-primary/5 p-4 rounded-lg mb-4">
                    <p className="text-sm font-medium mb-1">Пожелания гостя:</p>
                    <p className="text-sm">{booking.comment}</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Стоимость проживания</p>
                    <p className="font-heading text-2xl font-bold text-primary">{booking.price} ₽</p>
                  </div>

                  {booking.status === 'moderation' && (
                    <div className="flex gap-2">
                      <Button
                        onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Icon name="Check" size={16} className="mr-2" />
                        Подтвердить
                      </Button>
                      <Button
                        onClick={() => updateBookingStatus(booking.id, 'rejected')}
                        variant="destructive"
                      >
                        <Icon name="X" size={16} className="mr-2" />
                        Отклонить
                      </Button>
                    </div>
                  )}

                  {booking.status === 'confirmed' && (
                    <Badge className="bg-green-500 text-white">
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      Подтверждена
                    </Badge>
                  )}

                  {booking.status === 'rejected' && (
                    <Badge variant="destructive">
                      <Icon name="XCircle" size={16} className="mr-2" />
                      Отклонена
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
