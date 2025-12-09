import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Send, Loader2 } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const footerLinks = {
  Navegação: [
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Serviços', path: '/services' },
    { name: 'Projetos', path: '/portfolio' },
    { name: 'Contato', path: '/contact' },
  ],
  Legal: [
    { name: 'Política de Privacidade', path: '/privacy-policy' },
    { name: 'Termos de Serviço', path: '/terms-of-service' },
    { name: 'Política de Cookies', path: '/cookies-policy' },
  ],
  Recursos: [
    { name: 'Admin', path: '/admin' },
    { name: 'Carreiras', path: '/careers' },
    { name: 'FAQ', path: '/faq' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/mynidus/', label: 'Instagram' },
];

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      toast({
        title: 'Email inválido',
        description: 'Informe um endereço de email válido.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const stored = localStorage.getItem('nidus_newsletter');
      const subscribers = stored ? JSON.parse(stored) : [];

      const alreadySubscribed = subscribers.some(
        (sub) => sub.email === normalizedEmail
      );

      if (alreadySubscribed) {
        toast({
          title: 'Você já está inscrito',
          description: 'Este email já está cadastrado na newsletter.',
          variant: 'destructive',
        });
        setLoading(false);
        return;
      }

      subscribers.push({
        id: Date.now(),
        email: normalizedEmail,
        created_at: new Date().toISOString(),
      });

      localStorage.setItem(
        'nidus_newsletter',
        JSON.stringify(subscribers)
      );

      toast({
        title: 'Inscrição confirmada!',
        description: 'Obrigado por se inscrever em nossa newsletter.',
      });

      setEmail('');
      setLoading(false);
    }, 800);
  };

  return (
    <footer className="nidus-blue text-nidus-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md border-2 border-nidus-purple flex items-center justify-center">
                <span className="text-xl font-bold text-nidus-purple">N</span>
              </div>
              <span className="text-xl font-semibold">Nidus</span>
            </Link>

            <p className="text-gray-300 text-sm max-w-xs mb-6">
              Construindo o futuro digital com desenvolvimento web moderno e automação inteligente.
            </p>

            <p id="newsletter-heading" className="font-semibold mb-3">
              Inscreva-se na nossa newsletter
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-2 max-w-sm"
              aria-labelledby="newsletter-heading"
            >
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                aria-label="Email para newsletter"
                className="bg-nidus-dark border-nidus-blue-light text-nidus-white h-11"
              />

              <Button
                type="submit"
                size="icon"
                disabled={loading}
                aria-label="Inscrever-se"
                className="bg-nidus-purple h-11 w-11"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <nav key={category}>
                <p className="font-semibold mb-4">{category}</p>
                <ul className="space-y-3">
                  {links.map(({ name, path }) => (
                    <li key={name}>
                      <Link
                        to={path}
                        className="text-gray-300 hover:text-nidus-white text-sm transition"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-nidus-blue-light flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Nidus. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-nidus-blue-light bg-nidus-blue-dark/50 hover:bg-nidus-blue-light/80 transition"
              >
                <Icon className="w-4 h-4 text-gray-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
