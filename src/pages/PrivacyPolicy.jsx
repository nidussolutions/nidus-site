import React from 'react';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Política de Privacidade"
        description="Entenda como a Nidus coleta, usa e protege suas informações pessoais. Sua privacidade é nossa prioridade."
        keywords="política de privacidade, proteção de dados, lgpd, nidus, dados pessoais"
      />

      <div className="pt-20 bg-background text-foreground">
        <section className="py-20 sm:py-24 px-6 text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground mb-6">
            Política de <span className="text-primary">Privacidade</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Sua privacidade é importante para nós. Esta política explica quais dados coletamos e por quê.
          </p>
        </section>

        <section className="py-20 bg-background/50 border-t border-border">
          <div className="animate-fade-in prose prose-lg lg:prose-xl max-w-4xl mx-auto px-6 lg:px-8 text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
            <h2>1. Nosso Compromisso com a Privacidade</h2>
            <p>A Nidus ("nós", "nosso") está empenhada em proteger a privacidade de seus usuários ("você", "seu"). Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site e utiliza nossos serviços.</p>
            <div className="not-prose mt-4 text-sm bg-card p-4 rounded-lg border border-border">
              <p className="text-muted-foreground m-0"><strong className="text-card-foreground">Razão Social:</strong> NIDUS SOLUCOES DIGITAIS LTDA</p>
              <p className="text-muted-foreground m-0"><strong className="text-card-foreground">CNPJ:</strong> 57.581.208/0001-69</p>
              <p className="text-muted-foreground m-0"><strong className="text-card-foreground">Endereço:</strong> Avenida Paulista, 1106, Sala 01 Andar 16, Bela Vista, São Paulo, SP, CEP 01.310-914.</p>
            </div>

            <h2>2. Informações que Coletamos</h2>
            <p>Podemos coletar informações sobre você de várias maneiras. As informações que podemos coletar no Site incluem:</p>
            <ul>
              <li><strong>Dados Pessoais:</strong> Informações de identificação pessoal, como seu nome, endereço de e-mail e número de telefone, que você nos fornece voluntariamente ao preencher formulários de contato ou ao se comunicar conosco.</li>
              <li><strong>Dados de Derivados:</strong> Informações que nossos servidores coletam automaticamente quando você acessa o Site, como seu endereço IP, tipo de navegador, sistema operacional, horários de acesso e as páginas que você visualizou diretamente antes e depois de acessar o Site.</li>
              <li><strong>Dados de Cookies:</strong> Utilizamos cookies para ajudar a personalizar o Site e melhorar sua experiência. Para mais informações, consulte nossa <a href="/cookies-policy" className="text-primary hover:underline">Política de Cookies</a>.</li>
            </ul>

            <h2>3. Uso de Suas Informações</h2>
            <p>Ter informações precisas sobre você nos permite fornecer uma experiência tranquila, eficiente e personalizada. Especificamente, podemos usar as informações coletadas sobre você para:</p>
            <ul>
              <li>Responder a solicitações de suporte e atendimento ao cliente.</li>
              <li>Enviar-lhe um e-mail com informações sobre sua conta ou pedido.</li>
              <li>Monitorar e analisar o uso e as tendências para melhorar sua experiência com o Site.</li>
              <li>Prevenir atividades fraudulentas e garantir a segurança do nosso Site.</li>
            </ul>

            <h2>4. Divulgação de Suas Informações</h2>
            <p>Não compartilharemos, venderemos, alugaremos ou negociaremos suas informações com terceiros para seus fins promocionais. Podemos compartilhar informações que coletamos sobre você em certas situações, como com prestadores de serviços terceirizados que executam serviços para nós ou em nosso nome, incluindo processamento de pagamentos, análise de dados, entrega de e-mail e serviços de hospedagem.</p>
            
            <h2>5. Segurança de Suas Informações</h2>
            <p>Usamos medidas de segurança administrativas, técnicas e físicas para ajudar a proteger suas informações pessoais. Embora tenhamos tomado medidas razoáveis para proteger as informações pessoais que você nos fornece, esteja ciente de que, apesar de nossos esforços, nenhuma medida de segurança é perfeita ou impenetrável, e nenhum método de transmissão de dados pode ser garantido contra qualquer interceptação ou outro tipo de uso indevido.</p>
            
            <h2>6. Seus Direitos de Privacidade</h2>
            <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Você também pode ter o direito de restringir ou se opor a certos tipos de processamento de suas informações. Para exercer esses direitos, entre em contato conosco usando as informações de contato fornecidas abaixo.</p>

            <h2>7. Contato</h2>
            <p>Se você tiver alguma dúvida ou comentário sobre esta Política de Privacidade, entre em contato conosco em: <a href="mailto:ola@mynidus.dev" className="text-primary hover:underline">ola@mynidus.dev</a>.</p>

            <div className="not-prose pt-4 text-center text-sm text-muted-foreground">
              <p>Esta política foi atualizada pela última vez em 27 de Novembro de 2025.</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
