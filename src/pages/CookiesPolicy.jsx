
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const CookiesPolicy = () => {
  const pageVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };
  
  return (
    <>
      <SEO
        title="Política de Cookies"
        description="Saiba como a Nidus utiliza cookies para melhorar sua experiência em nosso site e como você pode gerenciá-los."
        keywords="política de cookies, privacidade, cookies, nidus, dados do usuário"
      />

      <div className="pt-20 bg-background text-foreground">
        <motion.section 
          className="py-20 sm:py-24 px-6 text-center"
          initial="offscreen"
          animate="onscreen"
          variants={pageVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground mb-6">
            Política de <span className="text-primary">Cookies</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Esta política explica o que são cookies e como os utilizamos.
          </p>
        </motion.section>

        <section className="py-20 bg-background/50 border-t border-border">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={pageVariants}
            className="prose prose-lg lg:prose-xl max-w-4xl mx-auto px-6 lg:px-8 text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground"
          >
            <h2>1. O Que São Cookies?</h2>
            <p>Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem, ou funcionem de forma mais eficiente, bem como para fornecer informações aos proprietários do site. Os cookies permitem que um site reconheça o seu dispositivo e lembre-se de suas preferências ou ações ao longo do tempo.</p>
            <div className="not-prose mt-4 text-sm bg-card p-4 rounded-lg border border-border">
              <p className="text-muted-foreground m-0"><strong className="text-card-foreground">Razão Social:</strong> NIDUS SOLUCOES DIGITAIS LTDA</p>
              <p className="text-muted-foreground m-0"><strong className="text-card-foreground">CNPJ:</strong> 57.581.208/0001-69</p>
              <p className="text-muted-foreground m-0"><strong className="text-card-foreground">Endereço:</strong> Avenida Paulista, 1106, Sala 01 Andar 16, Bela Vista, São Paulo, SP, CEP 01.310-914.</p>
            </div>

            <h2>2. Como Usamos Cookies</h2>
            <p>Utilizamos cookies por diversas razões detalhadas abaixo. Infelizmente, na maioria dos casos, não há opções padrão da indústria para desativar cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies ativados se não tiver certeza se precisa deles ou não, caso sejam usados para fornecer um serviço que você utiliza.</p>
            <ul>
              <li><strong>Cookies Necessários:</strong> Essenciais para o funcionamento básico do site, permitindo navegação e acesso a áreas seguras.</li>
              <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como você usa o site, como quais páginas você visita e se você encontra algum erro.</li>
              <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site se lembre de suas escolhas (como seu nome de usuário, idioma ou a região onde você está) e forneça recursos aprimorados e mais personalizados.</li>
              <li><strong>Cookies de Publicidade:</strong> Usados para exibir anúncios mais relevantes para você e seus interesses, bem como para limitar o número de vezes que você vê um anúncio e medir a eficácia das campanhas publicitárias.</li>
            </ul>

            <h2>3. Cookies de Terceiros</h2>
            <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site:</p>
            <ul>
              <li>Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis na web para nos ajudar a entender como você usa o site e as maneiras pelas quais podemos melhorar sua experiência.</li>
              <li>De tempos em tempos, testamos novos recursos e fazemos mudanças sutis na forma como o site é entregue. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site.</li>
            </ul>

            <h2>4. Gerenciando Suas Preferências de Cookies</h2>
            <p>Você tem o direito de decidir se aceita ou rejeita cookies. Você pode configurar ou alterar os controles do seu navegador para aceitar ou recusar cookies. Se você optar por rejeitar cookies, ainda poderá usar nosso site, embora seu acesso a algumas funcionalidades e áreas do site possa ser restrito.</p>
            <p>Para mais informações sobre como gerenciar e excluir cookies, visite <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.</p>

            <div className="not-prose pt-4 text-center text-sm text-muted-foreground">
              <p>Esta política foi atualizada pela última vez em 27 de Novembro de 2025.</p>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CookiesPolicy;
