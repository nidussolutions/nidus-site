import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Gift, Loader2 } from 'lucide-react';
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

  // Reseta o formulário sempre que o popup for fechado
  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPhone('');
      setLoading(false);
    }
  }, [isOpen]);

  const isEmailValid = useMemo(() => EMAIL_REGEX.test(email), [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      toast({
        title: 'Email inválido',
        description: 'Por favor, insira um endereço de email válido.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      try {
        const promotionsRaw = localStorage.getItem('nidus_promotions');
        const promotions = promotionsRaw ? JSON.parse(promotionsRaw) : [];

        if (
          Array.isArray(promotions) &&
          promotions.some((promo) => promo.email === email)
        ) {
          toast({
            title: 'Email já cadastrado',
            description: 'Este email já está participando da promoção.',
            variant: 'destructive',
          });
          return;
        }

        const newPromo = {
          id: Date.now(),
          email,
          phone: phone || null,
          created_at: new Date().toISOString(),
        };

        const updatedPromotions = Array.isArray(promotions)
          ? [...promotions, newPromo]
          : [newPromo];

        localStorage.setItem(
          'nidus_promotions',
          JSON.stringify(updatedPromotions)
        );

        toast({
          title: 'Inscrição confirmada! 🎉',
          description: 'Seu cupom de desconto foi enviado para o seu email.',
        });

        onOpenChange(false);
      } catch (error) {
        console.error('Error submitting email:', error);
        toast({
          title: 'Erro na inscrição',
          description:
            'Não foi possível registrar seus dados. Tente novamente.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black border border-nidus-blue text-nidus-text-dark max-w-md p-0 overflow-hidden rounded-2xl shadow-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="bg-nidus-blue/5 border-b border-nidus-blue/20">
            <DialogHeader className="p-6 text-center items-center">
              <div className="w-16 h-16 bg-nidus-blue/10 rounded-full flex items-center justify-center border-2 border-nidus-blue/30 mb-4">
                <Gift className="w-8 h-8 text-nidus-blue" />
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tighter text-nidus-text-dark">
                Ganhe <span className="text-nidus-purple">40% OFF</span> no seu
                primeiro projeto
              </DialogTitle>
              <DialogDescription className="text-nidus-text-light pt-2">
                Participe da nossa newsletter e receba um desconto exclusivo,
                além de conteúdos sobre tecnologia, automação e produtividade.
              </DialogDescription>

              <div className="mt-4 flex flex-col gap-1 text-xs items-center">
                <span className="inline-flex items-center justify-center rounded-full bg-nidus-blue px-3 py-1 border border-nidus-blue/20">
                  Sem spam: apenas conteúdos relevantes e oportunidades.
                </span>
              </div>
            </DialogHeader>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="pt-2">
            <div className="px-6 space-y-3">
              <div className="space-y-1">
                <label
                  htmlFor="promo-email"
                  className="text-sm font-medium text-nidus-text-dark"
                >
                  Email
                </label>
                <Input
                  id="promo-email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  className="bg-white border-gray-300 text-black h-11 focus-visible:ring-nidus-purple placeholder:text-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  aria-invalid={!isEmailValid && email.length > 0}
                />
                {!isEmailValid && email.length > 0 && (
                  <p className="text-xs text-red-500 mt-1">
                    Digite um email válido para resgatar o desconto.
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="promo-phone"
                  className="text-sm font-medium text-nidus-text-dark"
                >
                  Telefone (opcional)
                </label>
                <Input
                  id="promo-phone"
                  type="tel"
                  placeholder="(00) 90000-0000"
                  className="bg-white border-gray-300 text-black h-11 focus-visible:ring-nidus-purple placeholder:text-gray-400"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                />
              </div>

              <p className="text-[11px] text-nidus-text-light/80 leading-snug pt-1">
                Ao continuar, você concorda em receber comunicações da Nidus.
                Seus dados são armazenados localmente e podem ser removidos a
                qualquer momento.
              </p>
            </div>

            <DialogFooter className="p-6 pt-4 flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
              <Button
                type="button"
                variant="ghost"
                className="w-full sm:w-auto text-xs text-nidus-text-light hover:text-nidus-text-dark"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Não quero o desconto agora
              </Button>

              <Button
                type="submit"
                size="lg"
                className="bg-nidus-blue hover:bg-nidus-blue/90 text-nidus-white font-semibold w-full sm:w-auto"
                disabled={loading || !isEmailValid}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Resgatar desconto'
                )}
              </Button>
            </DialogFooter>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionPopup;
