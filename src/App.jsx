import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { getSplashComponent, SPLASH_CONFIG } from '@/components/SplashConfig';

// Carregamento imediato de todas as páginas para melhor performance
import PublicLayout from '@/components/PublicLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import Careers from '@/pages/Careers';
import CookiesPolicy from '@/pages/CookiesPolicy';
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

const App = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setSplashComplete(true);
  };

  // Mostra splash screen apenas no carregamento inicial
  if (showSplash && !splashComplete) {
    const SplashComponent = getSplashComponent();
    return (
      <SplashComponent 
        onComplete={handleSplashComplete}
        showSkipButton={SPLASH_CONFIG.showSkipButton}
      />
    );
  }

  // Renderiza o app principal com fade in suave
  return (
    <div className="animate-fade-in overflow-x-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/*"
            element={
              <PublicLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/cookies-policy" element={<CookiesPolicy />} />
                  <Route
                    path="/terms-of-service"
                    element={<TermsOfService />}
                  />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
              </PublicLayout>
            }
          />
        </Routes>
      </AnimatePresence>
      <Toaster />
    </div>
  );
};

export default App;

