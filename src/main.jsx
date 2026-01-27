
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';
import '@/lib/gsapConfig'; // Configurações otimizadas do GSAP carregadas globalmente
import ScrollToTop from '@/components/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </>
);
