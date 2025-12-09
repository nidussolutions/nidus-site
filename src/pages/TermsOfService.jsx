
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const TermsOfService = () => {
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
        title="Termos de Serviço"
        description="Leia os Termos de Serviço da Nidus. Ao utilizar nossos serviços de desenvolvimento e automação, você concorda com estes termos e condições."
        keywords="termos de serviço, condições de uso, nidus, contrato de serviço"
      />

      <div className="pt-20 bg-background text-foreground">
        <motion.section 
          className="py-20 sm:py-24 px-6 text-center"
          initial="offscreen"
          animate="onscreen"
          variants={pageVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground mb-6">
            Termos de <span className="text-primary">Serviço</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Ao utilizar nossos serviços, você concorda com os seguintes termos e condições.
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
            <h2>1. Introdução</h2>
            <p>Bem-vindo aos Termos de Serviço da Nidus ("Termos"). Estes Termos regem seu acesso e uso dos serviços, softwares e site ("Serviços") fornecidos pela Nidus. Ao acessar ou usar qualquer parte dos Serviços, você concorda em se vincular a estes Termos.</p>
            <div className="not-prose mt-4 text-sm bg-card p-4 rounded-lg border border-border">
              <p className="text-muted-foreground m-0"><strong className="text-card-foreground">Razão Social:</strong> NIDUS SOLUCOES DIGITAIS LTDA</p>
              <p className="text-muted-foreground m-0"><strong className="text-card-foreground">CNPJ:</strong> 57.581.208/0001-69</p>
              <p className="text-muted-foreground m-0"><strong className="text-card-foreground">Endereço:</strong> Avenida Paulista, 1106, Sala 01 Andar 16, Bela Vista, São Paulo, SP, CEP 01.310-914.</p>
            </div>

            <h2>2. Aceitação dos Termos</h2>
            <p>Por favor, leia estes Termos cuidadosamente. Se você não concordar com todos os termos e condições, você não deve usar os Serviços. Estes Termos podem ser atualizados periodicamente, e seu uso continuado dos Serviços constitui sua aceitação de quaisquer termos revisados.</p>
            
            <h2>3. Modificações dos Serviços e Preços</h2>
            <p>A Nidus se reserva o direito de modificar ou descontinuar, temporária ou permanentemente, os Serviços (ou qualquer parte deles) com ou sem aviso prévio. Os preços de todos os Serviços estão sujeitos a alterações com aviso de 30 dias por nossa parte. Tal aviso pode ser fornecido a qualquer momento, publicando as alterações no site da Nidus ou através dos próprios Serviços.</p>
            
            <h2>4. Uso dos Serviços</h2>
            <p>Você concorda em usar os Serviços apenas para fins lícitos e de forma que não infrinja os direitos de, restrinja ou iniba o uso e o desfrute dos Serviços por terceiros. As proibições incluem, mas não se limitam a, conduta ilegal ou assediadora, envio de conteúdo difamatório ou obsceno, ou interrupção do fluxo normal de diálogo dentro de nossos Serviços.</p>
            <ul>
              <li><strong>Acesso à Conta:</strong> Você é responsável por manter a confidencialidade das informações de sua conta e por todas as atividades que ocorrem sob sua conta.</li>
              <li><strong>Conteúdo do Usuário:</strong> Você é o único responsável pelo conteúdo que você carrega, publica, envia por e-mail, transmite ou de outra forma disponibiliza através dos Serviços.</li>
            </ul>

            <h2>5. Propriedade Intelectual</h2>
            <p>Todos os direitos autorais, marcas registradas, direitos de design, patentes e outros direitos de propriedade intelectual (registrados ou não) nos e sobre os Serviços Nidus e todo o conteúdo (incluindo todas as aplicações) permanecerão investidos na Nidus ou em seus licenciadores. Você não pode copiar, reproduzir, republicar, desmontar, descompilar, fazer engenharia reversa, baixar, postar, transmitir, disponibilizar ao público ou de outra forma usar o conteúdo da Nidus de qualquer forma, exceto para seu uso pessoal e não comercial.</p>
            
            <h2>6. Limitação de Responsabilidade</h2>
            <p>Os Serviços Nidus são fornecidos "como estão" e "conforme disponíveis", sem quaisquer representações ou garantias de qualquer tipo. A Nidus não garante que as funções contidas nos Serviços serão ininterruptas ou livres de erros, que os defeitos serão corrigidos, ou que os Serviços ou o servidor que os disponibiliza estão livres de vírus ou bugs.</p>
            <p>Em nenhuma hipótese a Nidus será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou exemplares, incluindo, mas não se limitando a, danos por lucros cessantes, boa vontade, uso, dados ou outras perdas intangíveis (mesmo que a Nidus tenha sido avisada da possibilidade de tais danos), resultantes do uso ou da incapacidade de usar os Serviços.</p>
            
            <h2>7. Contato</h2>
            <p>Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco através do email: <a href="mailto:ola@mynidus.dev" className="text-primary hover:underline">ola@mynidus.dev</a>.</p>

            <div className="not-prose pt-4 text-center text-sm text-muted-foreground">
              <p>Estes termos foram atualizados pela última vez em 27 de Novembro de 2025.</p>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
