import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, author, children }) => {
  const siteName = 'Nidus - Desenvolvimento Web e Automação';
  const fullTitle = `${title} | ${siteName}`;
  const defaultDescription = 'Agência especialista em desenvolvimento web moderno com React e automação de processos para impulsionar a eficiência e o crescimento do seu negócio.';
  const defaultKeywords = 'desenvolvimento web, automação, react, javascript, frontend, nidus, agência digital, supabase, tailwindcss';

  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords;
  const metaOgTitle = ogTitle || fullTitle;
  const metaOgDescription = ogDescription || metaDescription;
  const metaOgImage = ogImage || 'https://www.mynidus.dev/og-image.png'; // A default OG image
  const metaOgUrl = ogUrl || window.location.href;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nidus",
    "url": "https://www.mynidus.dev",
    "logo": "https://www.mynidus.dev/nidus-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-28-99961-8665",
      "contactType": "Customer Service",
      "email": "ola@mynidus.dev"
    },
    "sameAs": [
      "https://www.instagram.com/mynidus/"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {author && <meta name="author" content={author} />}
      <link rel="canonical" href={metaOgUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaOgUrl} />
      <meta property="og:title" content={metaOgTitle} />
      <meta property="og:description" content={metaOgDescription} />
      <meta property="og:image" content={metaOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaOgUrl} />
      <meta property="twitter:title" content={metaOgTitle} />
      <meta property="twitter:description" content={metaOgDescription} />
      <meta property="twitter:image" content={metaOgImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {children}
    </Helmet>
  );
};

export default SEO;