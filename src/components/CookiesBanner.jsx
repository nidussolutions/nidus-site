import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie_consent');
      if (consent !== 'true') {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcknowledge = () => {
    try {
      localStorage.setItem('cookie_consent', 'true');
    } catch (error) {
      console.error("Could not write to localStorage:", error);
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-50 p-4 rounded-xl bg-slate-800/80 backdrop-blur-lg border border-slate-700 shadow-2xl max-w-md"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1">
                <Cookie className="w-6 h-6 text-azul-claro"/>
            </div>
            <div>
              <p id="cookie-banner-desc" className="text-sm text-slate-300 mb-2">
                Usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies. Leia nossa{' '}
                <Link to="/cookies-policy" className="underline hover:text-white transition-colors">
                  Política de Cookies
                </Link>
                .
              </p>
              <Button 
                onClick={handleAcknowledge} 
                size="sm" 
                className="w-full sm:w-auto bg-azul-claro text-white hover:bg-azul-claro/90 font-semibold"
                aria-describedby="cookie-banner-desc"
              >
                Entendido
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiesBanner;