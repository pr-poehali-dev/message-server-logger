import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки на сервер
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено!",
        description: "Ваше сообщение было успешно отправлено и сохранено на сервере.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            MESSAGE HUB
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Современная платформа для отправки сообщений. Отправляйте сообщения с уверенностью в безопасности и надежности.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Shield" size={20} />
              Безопасно
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Zap" size={20} />
              Быстро
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Check" size={20} />
              Надежно
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/70 border-0 shadow-2xl animate-scale-in">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Icon name="MessageSquare" size={32} className="text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
              <CardDescription className="text-base">
                Заполните форму ниже, и ваше сообщение будет сохранено на нашем сервере
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Имя
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Напишите ваше сообщение здесь..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="min-h-[120px] text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent"></div>
                      Отправляем...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Icon name="Send" size={18} />
                      Отправить сообщение
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in">
          <Card className="backdrop-blur-sm bg-white/50 border-0 hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto">
                <Icon name="Upload" size={24} className="text-primary" />
              </div>
              <CardTitle className="text-lg">Мгновенная отправка</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Ваше сообщение отправляется на сервер мгновенно и сохраняется в безопасном файле
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/50 border-0 hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto">
                <Icon name="Archive" size={24} className="text-accent" />
              </div>
              <CardTitle className="text-lg">Надежное хранение</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Все сообщения сохраняются в отдельных файлах с временными метками
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/50 border-0 hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="p-3 rounded-full bg-secondary/10 w-fit mx-auto">
                <Icon name="Shield" size={24} className="text-secondary" />
              </div>
              <CardTitle className="text-lg">Полная безопасность</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Все данные передаются по защищенному соединению и надежно хранятся
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border border-primary/10">
            <h3 className="text-2xl font-semibold mb-4">Готовы начать?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Отправьте свое первое сообщение и убедитесь в простоте и надежности нашей системы
            </p>
            <Button 
              onClick={() => document.getElementById('name')?.focus()}
              variant="outline" 
              className="border-primary/20 hover:bg-primary/5"
            >
              <Icon name="ArrowUp" size={16} />
              Заполнить форму
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;