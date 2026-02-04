import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { getSplashComponent, SPLASH_CONFIG } from '@/components/SplashConfig';

import PublicLayout from '@/components/PublicLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';

const FAQ = lazy(() => import('@/pages/FAQ'));
const Careers = lazy(() => import('@/pages/Careers'));
const CookiesPolicy = lazy(() => import('@/pages/CookiesPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));

const App = () => {
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
      <Routes>
        <Route
          path="/*"
          element={
            <PublicLayout>
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Carregando...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/cookies-policy" element={<CookiesPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
              </Suspense>
            </PublicLayout>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;

