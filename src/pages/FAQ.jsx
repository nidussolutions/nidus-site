import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const FAQAccordion = ({ category, categoryIndex, openIndex, onToggle }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, delay: categoryIndex * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        }
      );
    }
  }, [categoryIndex]);

  return (
    <div ref={ref} className="mb-16">
      <h2 className="text-3xl font-bold tracking-tighter text-foreground mb-8">{category.category}</h2>
      <div className="space-y-4">
        {category.questions.map((faq, questionIndex) => {
          const index = `${categoryIndex}-${questionIndex}`;
          const isOpen = openIndex === index;

          return (
            <div key={questionIndex} className="bg-card rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => onToggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-card-foreground pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all ease-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionDuration: '400ms' }}
              >
                <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: ctaRef.current, start: 'top 80%', once: true },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const toggleQuestion = useCallback((index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  }, []);

  const faqs = [
    { category: 'Geral', questions: [ { question: 'Quais serviços a Nidus oferece?', answer: 'Oferecemos serviços abrangentes de desenvolvimento digital, incluindo desenvolvimento web sob medida, automação de processos, soluções de e-commerce e otimização de performance (SEO).', }, { question: 'O que é automação de processos e como pode ajudar meu negócio?', answer: 'Automação de processos é o uso de tecnologia para executar tarefas repetitivas que antes exigiam esforço manual. Isso pode ajudar seu negócio a reduzir custos operacionais, minimizar erros, aumentar a eficiência e permitir que sua equipe se concentre em atividades mais estratégicas.', }, { question: 'Com quais setores vocês trabalham?', answer: 'Trabalhamos com clientes de vários setores, incluindo tecnologia, saúde, finanças, e-commerce, educação e muito mais. Nossa experiência diversificada nos permite adaptar a diferentes requisitos do setor.', }, ] },
    { category: 'Processo', questions: [ { question: 'Qual é o seu processo de desenvolvimento?', answer: 'Nosso processo inclui quatro fases principais: Descoberta (entender suas necessidades), Estratégia (planejar a solução), Desenvolvimento (construir seu produto) e Lançamento e Suporte (implantação e manutenção contínua).', }, { question: 'Como funciona o processo para automatizar um fluxo de trabalho?', answer: 'Começamos com uma análise detalhada dos seus processos atuais para identificar gargalos e oportunidades de automação. Em seguida, projetamos uma solução customizada, desenvolvemos os robôs ou integrações, testamos exaustivamente e, por fim, implementamos e monitoramos a automação para garantir sua eficácia.', }, { question: 'Posso me envolver no processo de desenvolvimento?', answer: 'Com certeza! Acreditamos no desenvolvimento colaborativo e incentivamos o envolvimento do cliente. Fornecemos atualizações regulares, demonstrações e oportunidades de feedback ao longo do projeto.', }, ] },
    { category: 'Preços', questions: [ { question: 'Quanto custa um projeto?', answer: 'Os custos do projeto variam com base no escopo, complexidade e cronograma. Fornecemos orçamentos detalhados após entender seus requisitos. Entre em contato para uma consulta e estimativa gratuitas.', }, { question: 'Como é calculado o preço de um projeto de automação?', answer: 'O preço de projetos de automação depende da complexidade dos processos a serem automatizados, das tecnologias envolvidas e do número de integrações necessárias. Oferecemos tanto modelos de preço por projeto quanto planos de assinatura, buscando sempre o melhor ROI para o seu investimento.', }, { question: 'Vocês oferecem planos de pagamento?', answer: 'Sim, oferecemos estruturas de pagamento flexíveis, incluindo pagamentos baseados em marcos e retentores mensais para projetos contínuos. Trabalhamos com você para encontrar um plano de pagamento que se ajuste ao seu orçamento.', }, ] },
    { category: 'Técnico', questions: [ { question: 'Quais tecnologias vocês usam?', answer: 'Usamos tecnologias modernas e padrão da indústria, incluindo React e Vite para frontend; e soluções de automação com ferramentas de RPA (Robotic Process Automation) e integrações via API, garantindo soluções robustas e escaláveis.', }, { question: 'Quais tipos de tarefas podem ser automatizadas?', answer: 'Praticamente qualquer tarefa digital repetitiva e baseada em regras pode ser automatizada. Exemplos comuns incluem entrada de dados, geração de relatórios, processamento de faturas, envio de e-mails, sincronização de sistemas e atendimento ao cliente via chatbots.', }, { question: 'Eu serei o proprietário do código e do design?', answer: 'Sim, a propriedade do código e do design é transferida para o cliente após a conclusão do projeto e o pagamento final, conforme especificado em nosso contrato. Discutimos os termos de propriedade em detalhes durante a fase de planejamento do projeto.', }, ] },
  ];

  return (
    <>
      <SEO
        title="FAQ - Perguntas Frequentes"
        description="Encontre respostas para perguntas comuns sobre os serviços de desenvolvimento digital, processo, preços e muito mais da Nidus."
        keywords="faq desenvolvimento web, perguntas frequentes automação, preços de site, processo de desenvolvimento"
      />

      <div className="pt-20 bg-background text-foreground">
        <section className="py-20 sm:py-24 px-6 text-center">
          <div ref={heroRef}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground mb-6">
              Perguntas <span className="text-primary">Frequentes</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
              Encontre respostas para perguntas comuns sobre nossos serviços e processo.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-background/50 border-y border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {faqs.map((category, categoryIndex) => (
              <FAQAccordion
                key={category.category}
                category={category}
                categoryIndex={categoryIndex}
                openIndex={openIndex}
                onToggle={toggleQuestion}
              />
            ))}
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-background">
          <div ref={ctaRef} className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground mb-6">
              Ainda tem Dúvidas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos aqui para ajudar. Entre em contato com nossa equipe para respostas personalizadas.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Fale Conosco
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
