
import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';

// Public Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import Careers from '@/pages/Careers';
import CookiesPolicy from '@/pages/CookiesPolicy';
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

// Layouts
import PublicLayout from '@/components/PublicLayout';

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Redirect any legacy admin routes to home */}
          <Route path="/admin/*" element={<Navigate to="/" replace />} />

          {/* Public Routes */}
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
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/cookies-policy" element={<CookiesPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
              </PublicLayout>
            }
          />
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
};

export default App;
