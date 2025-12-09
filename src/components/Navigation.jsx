import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
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
  const { scrollY } = useScroll();
  const { user } = useAuth();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      const isScrolledDown = latest > scrollY.getPrevious();
      if (isScrolledDown && latest > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

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

  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  const menuButtonVariants = {
    initial: { rotate: 90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: -90, opacity: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <motion.header
      variants={headerVariants}
      animate={!mobileMenuOpen && isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 bg-nidus-bg-light/80 backdrop-blur-lg border-b border-gray-200/80"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-md border-2 border-nidus-purple flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <span className="text-xl font-bold text-nidus-purple">N</span>
          </div>
          <span className="text-xl font-semibold group-hover:text-nidus-text-dark transition-colors text-nidus-text-dark">Nidus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-nidus-text-dark'
                  : 'text-nidus-text-light hover:text-nidus-text-dark'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                 <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-nidus-purple"
                  layoutId="underline"
                  />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <Button
                onClick={() => navigate(user ? '/admin' : '/contact')}
                className="bg-nidus-purple hover:bg-opacity-90 text-nidus-white font-semibold"
              >
                {user ? (
                    <>
                        <Briefcase className="mr-2 h-4 w-4" /> Admin
                    </>
                ) : 'Começar Projeto'}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-nidus-text-dark z-50 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div key={mobileMenuOpen ? 'x' : 'menu'} {...menuButtonVariants}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-nidus-bg-light/95 backdrop-blur-lg md:hidden pt-24"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="flex flex-col items-center justify-center h-full pb-20"
            >
              <nav className="flex flex-col gap-8 text-center">
                {navItems.map((item, index) => (
                   <motion.div
                    key={item.name}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                   >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl font-semibold transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-nidus-text-dark'
                          : 'text-nidus-text-light hover:text-nidus-text-dark'
                      }`}
                    >
                      {item.name}
                    </Link>
                   </motion.div>
                ))}
              </nav>
              <div className='absolute bottom-10 w-[90%] max-w-xs'>
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button
                      onClick={() => {
                        navigate(user ? '/admin' : '/contact');
                        setMobileMenuOpen(false);
                      }}
                      size="lg"
                      className="bg-nidus-purple text-nidus-white hover:bg-opacity-90 w-full font-semibold"
                    >
                       {user ? 'Painel Admin' : 'Começar Projeto'}
                    </Button>
                  </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;