import React, { useState, useEffect, useMemo } from 'react';
import { Gift, Loader2, Sparkles, ArrowRight, Mail, Phone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

const PromotionPopup = ({ isOpen, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPhone('');
      setLoading(false);
    }
  }, [isOpen]);

  const isEmailValid = useMemo(() => EMAIL_REGEX.test(email), [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      toast({
        title: 'Email inválido',
        description: 'Por favor, insira um endereço de email válido.',
        variant: 'destructive',
      });
      return;
    }

    const promotionsRaw = localStorage.getItem('nidus_promotions');
    const promotions = promotionsRaw ? JSON.parse(promotionsRaw) : [];

    if (Array.isArray(promotions) && promotions.some((promo) => promo.email === email)) {
      toast({
        title: 'Email já cadastrado',
        description: 'Este email já está participando da promoção.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;

    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email, phone: phone || null, _type: 'promotion' }),
        });
        if (!res.ok) throw new Error('Erro no envio');
      }

      const updatedPromotions = [...promotions, { id: Date.now(), email, phone: phone || null, created_at: new Date().toISOString() }];
      localStorage.setItem('nidus_promotions', JSON.stringify(updatedPromotions));

      toast({
        title: 'Inscrição confirmada!',
        description: 'Seu cupom de desconto foi enviado para o seu email.',
      });
      onOpenChange(false);
    } catch {
      toast({
        title: 'Erro na inscrição',
        description: 'Não foi possível registrar seus dados. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-2 border-primary/20 text-foreground max-w-[95vw] sm:max-w-lg p-0 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-primary/10 max-h-[90vh] overflow-y-auto">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative">
          {/* Header */}
          <div className="relative border-b border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5">
            <DialogHeader className="p-4 sm:p-6 md:p-8 text-center items-center">
              {/* Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-15 blur-xl animate-pulse" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border-2 border-primary/30">
                  <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  <div className="absolute -top-1 -right-1 animate-bounce">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2 sm:mb-3">
                Ganhe{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text animate-gradient-x">
                  40% OFF
                </span>
                <br />
                no seu primeiro projeto
              </DialogTitle>

              {/* Description */}
              <DialogDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md px-2 sm:px-0">
                Participe da nossa newsletter e receba um desconto exclusivo,
                além de conteúdos sobre tecnologia, automação e produtividade.
              </DialogDescription>

              {/* Badge */}
              <div className="mt-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                  <Sparkles className="w-4 h-4" />
                  Sem spam: apenas conteúdos relevantes
                </span>
              </div>
            </DialogHeader>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative bg-card/80">
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 space-y-4 sm:space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="promo-email"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </label>
                <div className="relative group">
                  <Input
                    id="promo-email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    className="h-11 sm:h-12 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    aria-invalid={!isEmailValid && email.length > 0}
                  />
                  {!isEmailValid && email.length > 0 && (
                    <p className="text-xs text-error-DEFAULT mt-2 flex items-center gap-1">
                      <span className="w-1 h-1 bg-error-DEFAULT rounded-full" />
                      Digite um email válido para resgatar o desconto.
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label
                  htmlFor="promo-phone"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  Telefone <span className="text-xs text-muted-foreground">(opcional)</span>
                </label>
                <Input
                  id="promo-phone"
                  type="tel"
                  placeholder="(00) 90000-0000"
                  className="h-11 sm:h-12 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                />
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border">
                Seus dados são armazenados de forma segura. Ao continuar,
                você concorda em receber comunicações da Nidus.
              </p>
            </div>

            {/* Footer */}
            <DialogFooter className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-2 flex flex-col sm:flex-row sm:justify-between gap-3 bg-gradient-to-t from-muted/50 to-transparent">
              <Button
                type="button"
                variant="ghost"
                className="w-full sm:w-auto text-sm text-muted-foreground hover:text-foreground"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Agora não
              </Button>

              <Button
                type="submit"
                size="lg"
                className="relative w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                disabled={loading || !isEmailValid}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="relative flex items-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Resgatar desconto
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionPopup;
