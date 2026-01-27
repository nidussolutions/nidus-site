import { useState, useEffect } from 'react';

/**
 * Hook para gerenciar o estado do Splash Screen
 * 
 * @param {number} minDisplayTime - Tempo mínimo de exibição (ms)
 * @param {boolean} persistPreference - Salvar preferência no localStorage
 * @returns {Object} { showSplash, handleSplashComplete, skipSplash }
 */
export const useSplashScreen = (minDisplayTime = 2000, persistPreference = true) => {
  const STORAGE_KEY = 'nidus-splash-seen';
  
  const [showSplash, setShowSplash] = useState(() => {
    // Verifica se o usuário já viu o splash
    if (persistPreference) {
      const hasSeenSplash = localStorage.getItem(STORAGE_KEY);
      // Mostra splash apenas na primeira visita
      return !hasSeenSplash;
    }
    return true;
  });

  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    if (!showSplash) return;

    // Timer para tempo mínimo
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, minDisplayTime);

    return () => clearTimeout(minTimer);
  }, [minDisplayTime, showSplash]);

  const handleSplashComplete = () => {
    if (persistPreference) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }

    if (minTimeElapsed) {
      setShowSplash(false);
    } else {
      // Aguarda o tempo mínimo
      const checkInterval = setInterval(() => {
        if (minTimeElapsed) {
          setShowSplash(false);
          clearInterval(checkInterval);
        }
      }, 100);
    }
  };

  const skipSplash = () => {
    if (persistPreference) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    setShowSplash(false);
  };

  const resetSplashPreference = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  return { 
    showSplash, 
    handleSplashComplete, 
    skipSplash,
    resetSplashPreference 
  };
};

export default useSplashScreen;
