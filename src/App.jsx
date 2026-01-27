import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { getSplashComponent, SPLASH_CONFIG } from '@/components/SplashConfig';

// Eager loading - Components críticos carregados imediatamente
import PublicLayout from '@/components/PublicLayout';
import Home from '@/pages/Home';

// Lazy loading - Outras páginas carregadas sob demanda
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Careers = lazy(() => import('@/pages/Careers'));
const CookiesPolicy = lazy(() => import('@/pages/CookiesPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-neutral-400 text-sm">Carregando...</p>
    </div>
  </div>
);

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
                <Suspense fallback={<PageLoader />}>
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
                </Suspense>
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

