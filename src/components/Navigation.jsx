import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';

const navItems = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/about' },
  { name: 'Serviços', path: '/services' },
  { name: 'Contato', path: '/contact' },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const headerHidden = !mobileMenuOpen && isHidden;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2.5 sm:py-3 bg-background/80 backdrop-blur-lg border-b border-border transition-transform duration-300 ease-in-out ${
        headerHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md border-2 border-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <span className="text-lg sm:text-xl font-bold text-primary">N</span>
          </div>
          <span className="text-lg sm:text-xl font-semibold text-foreground">Nidus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => navigate(user ? '/admin' : '/contact')}
            className="bg-primary hover:bg-primary/90 text-white font-semibold hover:scale-105 transition-transform duration-200"
          >
            {user ? (
              <>
                <Briefcase className="mr-2 h-4 w-4" /> Admin
              </>
            ) : 'Começar Projeto'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground z-50 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <div className={`transition-transform duration-200 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg md:hidden pt-24 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center h-full pb-20 transition-all duration-300 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-3xl font-semibold transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-10 w-[90%] max-w-xs">
            <Button
              onClick={() => {
                navigate(user ? '/admin' : '/contact');
                setMobileMenuOpen(false);
              }}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 w-full font-semibold"
            >
              {user ? 'Painel Admin' : 'Começar Projeto'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
