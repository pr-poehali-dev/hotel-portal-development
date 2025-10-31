import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    consent: false
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!formData.email) newErrors.push('Email обязателен для заполнения');
    if (!formData.firstName) newErrors.push('Имя обязательно для заполнения');
    if (!formData.phone) newErrors.push('Телефон обязателен для заполнения');
    if (!formData.password) newErrors.push('Пароль обязателен для заполнения');
    if (formData.password !== formData.confirmPassword) {
      newErrors.push('Пароли не совпадают');
    }
    if (!formData.consent) {
      newErrors.push('Необходимо согласие на обработку персональных данных');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      console.log('Form submitted', formData);
    }
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="space-y-1 text-center">
          <Link to="/" className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Hotel" size={32} className="text-primary" />
            <span className="font-heading text-2xl font-bold">HotelBooking</span>
          </Link>
          <CardTitle className="text-2xl font-heading">Регистрация</CardTitle>
          <CardDescription>Создайте аккаунт для бронирования отелей</CardDescription>
        </CardHeader>
        <CardContent>
          {errors.length > 0 && (
            <Alert variant="destructive" className="mb-4">
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                E-mail <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.ru"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstName">
                Имя <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Иван"
                value={formData.firstName}
                onChange={(e) => updateField('firstName', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Фамилия</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Иванов"
                value={formData.lastName}
                onChange={(e) => updateField('lastName', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Телефон <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                required
              />
            </div>

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
                Повторите пароль <span className="text-destructive">*</span>
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

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="consent"
                className="rounded"
                checked={formData.consent}
                onChange={(e) => updateField('consent', e.target.checked)}
                required
              />
              <Label htmlFor="consent" className="text-sm cursor-pointer">
                Согласен на обработку персональных данных <span className="text-destructive">*</span>
              </Label>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Зарегистрироваться
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Уже есть аккаунт?{' '}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Войти
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
