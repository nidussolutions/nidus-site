import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/nidus-solu%C3%A7%C3%B5es-digitais',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/mynidus/',
    label: 'Instagram',
  },
  {
    icon: Github,
    href: 'https://github.com/nidussolutions/',
    label: 'GitHub',
  },
];

const legalLinks = [
  { name: 'Privacidade', path: '/privacy-policy' },
  { name: 'Termos', path: '/terms-of-service' },
  { name: 'Cookies', path: '/cookies-policy' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="text-lg font-display font-semibold text-foreground">
                Nidus
              </span>
            </Link>
            <span className="text-sm text-muted-foreground">
              © {currentYear} Todos os direitos reservados.
            </span>
          </div>

          {/* Legal Links */}
          <nav className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary/30 hover:bg-primary/10 transition-all"
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
