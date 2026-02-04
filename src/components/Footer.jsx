import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Send, Loader2, Mail, MapPin, Phone, Github } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const footerLinks = {
  Empresa: [
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Serviços', path: '/services' },
    { name: 'Contato', path: '/contact' },
  ],
  Recursos: [
    { name: 'FAQ', path: '/faq' },
  ],
  Legal: [
    { name: 'Política de Privacidade', path: '/privacy-policy' },
    { name: 'Termos de Serviço', path: '/terms-of-service' },
    { name: 'Política de Cookies', path: '/cookies-policy' },
  ],
};

const contactInfo = [
  { icon: Mail, text: 'ola@mynidus.dev', href: 'mailto:ola@mynidus.dev' },
  { icon: Phone, text: '+55 (28) 9 9996-1665', href: 'https://wa.me/5528999618665' },
  { icon: MapPin, text: 'Espírito Santo, Brasil' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/nidus-solu%C3%A7%C3%B5es-digitais', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/mynidus/', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/nidussolutions/', label: 'GitHub' },
];

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
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

    const stored = localStorage.getItem('nidus_newsletter');
    const subscribers = stored ? JSON.parse(stored) : [];

    if (subscribers.some((sub) => sub.email === normalizedEmail)) {
      toast({
        title: 'Você já está inscrito',
        description: 'Este email já está cadastrado na newsletter.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;

    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email: normalizedEmail, _type: 'newsletter' }),
        });
        if (!res.ok) throw new Error('Erro no envio');
      }

      subscribers.push({ id: Date.now(), email: normalizedEmail, created_at: new Date().toISOString() });
      localStorage.setItem('nidus_newsletter', JSON.stringify(subscribers));

      toast({
        title: 'Inscrição confirmada!',
        description: 'Obrigado por se inscrever em nossa newsletter.',
      });
      setEmail('');
    } catch {
      toast({
        title: 'Erro na inscrição',
        description: 'Não foi possível processar sua inscrição. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/50 border-t border-border">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-md border-2 border-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary">N</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Nidus
              </span>
            </Link>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transformamos ideias em soluções digitais inovadoras.
              Desenvolvimento web moderno e automação inteligente para impulsionar seu negócio.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.text}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.text} className="flex items-center gap-3">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <nav key={category}>
                <p className="font-semibold mb-3 sm:mb-4 text-foreground">{category}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map(({ name, path }) => (
                    <li key={name}>
                      <Link
                        to={path}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <p className="font-semibold mb-2 text-foreground">Newsletter</p>
            <p className="text-sm text-muted-foreground mb-4">
              Receba insights e novidades sobre tecnologia
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-3"
              aria-labelledby="newsletter-heading"
            >
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                aria-label="Email para newsletter"
                className="h-11"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full group"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Inscrever-se
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Nidus. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-muted-foreground mr-1 sm:mr-2">Siga-nos:</span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-border bg-card hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
