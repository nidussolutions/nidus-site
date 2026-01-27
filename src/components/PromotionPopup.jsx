import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <DialogContent className="bg-white border-2 border-primary-200 text-foreground max-w-[95vw] sm:max-w-lg p-0 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-primary-500/10 max-h-[90vh] overflow-y-auto">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.34, 1.56, 0.64, 1]
          }}
          className="relative"
        >
          {/* Header */}
          <div className="relative border-b border-primary-200/60 bg-gradient-to-br from-primary-50/80 via-white/50 to-accent-50/60">
            <DialogHeader className="p-4 sm:p-6 md:p-8 text-center items-center">
              {/* Icon with Animation */}
              <motion.div 
                className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: 0.2 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl opacity-15 blur-xl animate-pulse" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center border-2 border-primary-300 backdrop-blur-sm">
                  <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" />
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2 sm:mb-3">
                  Ganhe{' '}
                  <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-transparent bg-clip-text animate-gradient-x">
                    40% OFF
                  </span>
                  <br />
                  no seu primeiro projeto
                </DialogTitle>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <DialogDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md px-2 sm:px-0">
                  Participe da nossa newsletter e receba um desconto exclusivo,
                  além de conteúdos sobre tecnologia, automação e produtividade.
                </DialogDescription>
              </motion.div>

              {/* Badge */}
              <motion.div 
                className="mt-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary-700 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-primary-600" />
                  Sem spam: apenas conteúdos relevantes
                </span>
              </motion.div>
            </DialogHeader>
          </div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="relative bg-white/80 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 space-y-4 sm:space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="promo-email"
                  className="text-sm font-medium text-gray-700 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary-600" />
                  Email
                </label>
                <div className="relative group">
                  <Input
                    id="promo-email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    className="bg-white border-gray-300 text-gray-900 h-11 sm:h-12 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 placeholder:text-gray-400 transition-all duration-300 group-hover:border-primary-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    aria-invalid={!isEmailValid && email.length > 0}
                  />
                  <AnimatePresence>
                    {!isEmailValid && email.length > 0 && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-xs text-error-DEFAULT mt-2 flex items-center gap-1"
                      >
                        <span className="w-1 h-1 bg-error-DEFAULT rounded-full" />
                        Digite um email válido para resgatar o desconto.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label
                  htmlFor="promo-phone"
                  className="text-sm font-medium text-gray-700 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-secondary-600" />
                  Telefone{' '}
                  <span className="text-xs text-gray-500">(opcional)</span>
                </label>
                <div className="relative group">
                  <Input
                    id="promo-phone"
                    type="tel"
                    placeholder="(00) 90000-0000"
                    className="bg-white border-gray-300 text-gray-900 h-11 sm:h-12 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:border-secondary-500 placeholder:text-gray-400 transition-all duration-300 group-hover:border-secondary-400"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Privacy Note */}
              <motion.p 
                className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                🔒 Seus dados são armazenados localmente e protegidos. Ao continuar, 
                você concorda em receber comunicações da Nidus.
              </motion.p>
            </div>

            {/* Footer */}
            <DialogFooter className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-2 flex flex-col sm:flex-row sm:justify-between gap-3 bg-gradient-to-t from-gray-50/80 to-transparent">
              <Button
                type="button"
                variant="ghost"
                className="w-full sm:w-auto text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Agora não
              </Button>

              <Button
                type="submit"
                size="lg"
                className="relative w-full sm:w-auto bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold shadow-lg shadow-primary-500/30 transition-all duration-300 hover:shadow-primary-500/50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                disabled={loading || !isEmailValid}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
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
          </motion.form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionPopup;
