import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

export default function Add() {
  const [formData, setFormData] = useState({
    hotelPhone: '',
    hotelEmail: '',
    legalInfo: '',
    password: '',
    confirmPassword: '',
    stars: '3',
    country: '',
    city: '',
    district: '',
    hotelType: '',
    description: '',
    amenities: [] as string[],
    consent: false
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [photos, setPhotos] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!formData.hotelPhone) newErrors.push('Укажите контактный номер телефона');
    if (!formData.hotelEmail) newErrors.push('Укажите email отеля');
    if (!formData.legalInfo) newErrors.push('Укажите юридические данные');
    if (!formData.password) newErrors.push('Введите пароль');
    if (formData.password !== formData.confirmPassword) {
      newErrors.push('Пароли не совпадают');
    }
    if (!formData.country || !formData.city) {
      newErrors.push('Укажите страну и город');
    }
    if (!formData.consent) {
      newErrors.push('Необходимо согласие на обработку персональных данных');
    }
    if (photos.length === 0) {
      newErrors.push('Добавьте хотя бы одно фото');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      console.log('Form submitted', formData);
    }
  };

  const updateField = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (photos.length + files.length > 3) {
      alert('Максимум 3 фотографии');
      return;
    }
    setPhotos([...photos, ...files]);
  };

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
        <Card className="max-w-4xl mx-auto animate-fade-in">
          <CardHeader>
            <CardTitle className="text-3xl font-heading">Добавление отеля</CardTitle>
            <CardDescription>
              Заполните информацию об отеле для добавления в каталог
            </CardDescription>
          </CardHeader>
          <CardContent>
            {errors.length > 0 && (
              <Alert variant="destructive" className="mb-6">
                <Icon name="AlertCircle" size={16} />
                <AlertDescription>
                  <ul className="list-disc list-inside text-sm">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="hotelPhone">
                    Контактный телефон отеля <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="hotelPhone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.hotelPhone}
                    onChange={(e) => updateField('hotelPhone', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hotelEmail">
                    E-mail отеля <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="hotelEmail"
                    type="email"
                    placeholder="hotel@example.com"
                    value={formData.hotelEmail}
                    onChange={(e) => updateField('hotelEmail', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="legalInfo">
                  Юридические данные отеля <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="legalInfo"
                  placeholder="ООО &quot;Гостиница&quot;, ИНН 1234567890, ОГРН..."
                  value={formData.legalInfo}
                  onChange={(e) => updateField('legalInfo', e.target.value)}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="password">
                    Пароль <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => updateField('password', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    Подтверждение пароля <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => updateField('confirmPassword', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stars">Количество звезд</Label>
                <Select value={formData.stars} onValueChange={(value) => updateField('stars', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 звезда</SelectItem>
                    <SelectItem value="2">2 звезды</SelectItem>
                    <SelectItem value="3">3 звезды</SelectItem>
                    <SelectItem value="4">4 звезды</SelectItem>
                    <SelectItem value="5">5 звезд</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="photos">
                  Фотографии отеля и номеров <span className="text-destructive">*</span>
                </Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Icon name="Upload" size={32} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Загрузите до 3 фотографий
                  </p>
                  <Input
                    id="photos"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoUpload}
                    className="max-w-xs mx-auto"
                  />
                  {photos.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium">Загружено фото: {photos.length}/3</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Дополнительная информация об отеле</Label>
                <Textarea
                  id="description"
                  placeholder="Опишите отель, его особенности и преимущества..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country">
                    Страна <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="country"
                    placeholder="Россия"
                    value={formData.country}
                    onChange={(e) => updateField('country', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">
                    Город <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="city"
                    placeholder="Москва"
                    value={formData.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district">Район</Label>
                  <Input
                    id="district"
                    placeholder="Центральный"
                    value={formData.district}
                    onChange={(e) => updateField('district', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hotelType">Вид отеля по типу</Label>
                <Select value={formData.hotelType} onValueChange={(value) => updateField('hotelType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип отеля" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hotel">Отель</SelectItem>
                    <SelectItem value="resort">Курорт</SelectItem>
                    <SelectItem value="boutique">Бутик-отель</SelectItem>
                    <SelectItem value="hostel">Хостел</SelectItem>
                    <SelectItem value="apartment">Апартаменты</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Удобства в отеле</Label>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Wi-Fi', 'Парковка', 'Бассейн', 'Спа', 'Ресторан', 'Тренажерный зал', 'Трансфер', 'Кондиционер', 'Сейф'].map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={amenity}
                        className="rounded"
                        checked={formData.amenities.includes(amenity)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateField('amenities', [...formData.amenities, amenity]);
                          } else {
                            updateField('amenities', formData.amenities.filter(a => a !== amenity));
                          }
                        }}
                      />
                      <Label htmlFor={amenity} className="cursor-pointer font-normal">
                        {amenity}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <input
                  type="checkbox"
                  id="consent"
                  className="rounded"
                  checked={formData.consent}
                  onChange={(e) => updateField('consent', e.target.checked)}
                  required
                />
                <Label htmlFor="consent" className="cursor-pointer">
                  Согласен на обработку персональных данных <span className="text-destructive">*</span>
                </Label>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Icon name="Plus" size={20} className="mr-2" />
                Добавить отель
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
