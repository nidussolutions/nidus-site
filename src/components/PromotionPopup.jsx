
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
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
import { Loader2 } from 'lucide-react';

const PromotionPopup = ({ isOpen, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: 'Email Inválido',
        description: 'Por favor, insira um endereço de email válido.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      try {
        const promotions = JSON.parse(localStorage.getItem('nidus_promotions') || '[]');
        
        if (promotions.some(promo => promo.email === email)) {
           toast({
            title: 'Email já cadastrado!',
            description: 'Este email já está participando da promoção.',
            variant: 'destructive',
          });
          setLoading(false);
          return;
        }

        const newPromo = {
          id: Date.now(),
          email,
          phone: phone || null,
          created_at: new Date().toISOString()
        };
        
        promotions.push(newPromo);
        localStorage.setItem('nidus_promotions', JSON.stringify(promotions));

        toast({
          title: 'Inscrição Confirmada! 🎉',
          description: 'Seu cupom de desconto foi enviado para o seu email.',
        });
        onOpenChange(false);
      } catch (error) {
        console.error('Error submitting email:', error);
        toast({
          title: 'Erro na Inscrição',
          description: 'Não foi possível registrar seus dados. Tente novamente.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white border-gray-200 text-nidus-text-dark max-w-md p-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <DialogHeader className="p-6 text-center items-center">
            <div className="w-16 h-16 bg-nidus-purple/10 rounded-full flex items-center justify-center border-2 border-nidus-purple/30 mb-4">
              <Gift className="w-8 h-8 text-nidus-purple" />
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tighter text-nidus-text-dark">
              Ganhe <span className="text-nidus-purple">30% OFF</span> no seu Primeiro Projeto!
            </DialogTitle>
            <DialogDescription className="text-nidus-text-light pt-2">
              Junte-se à nossa newsletter e receba um desconto exclusivo, além de insights sobre tecnologia e automação.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="px-6 space-y-4">
              <Input
                type="email"
                placeholder="seu.email@exemplo.com"
                className="bg-white border-gray-300 text-black h-12 focus-visible:ring-nidus-purple placeholder:text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
               <Input
                type="tel"
                placeholder="Telefone (Opcional)"
                className="bg-white border-gray-300 text-black h-12 focus-visible:ring-nidus-purple placeholder:text-black"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={loading}
              />
            </div>

            <DialogFooter className="p-6 bg-gray-50 mt-6 sm:justify-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-nidus-purple hover:bg-opacity-90 text-nidus-white font-semibold w-full sm:w-auto"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : 'Resgatar Desconto'}
              </Button>
            </DialogFooter>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionPopup;
