import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Zap, Database, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        icon: Code,
        title: 'Desenvolvimento Web Moderno',
        description:
            'Criamos sites e aplicações web de alta performance com foco em UX, conversão e resultados mensuráveis.',
        gradient: 'from-primary/20 to-primary/5',
        iconColor: 'text-primary',
    },
    {
        icon: Zap,
        title: 'Automação Inteligente',
        description:
            'Integração de ferramentas e automações customizadas para ganho de eficiência e escalabilidade operacional.',
        gradient: 'from-secondary/20 to-secondary/5',
        iconColor: 'text-secondary',
    },
    {
        icon: Database,
        title: 'Backend e APIs',
        description: 'Desenvolvemos a espinha dorsal de suas aplicações com Node.js e tecnologias modernas, garantindo escalabilidade e segurança.',
        gradient: 'from-accent/20 to-accent/5',
        iconColor: 'text-accent',
    },
    {
        icon: Smartphone,
        title: 'Desenvolvimento Mobile',
        description: 'Construímos aplicativos nativos para iOS e Android com React Native, oferecendo experiência premium com código unificado.',
        gradient: 'from-primary/20 to-secondary/5',
        iconColor: 'text-primary',
    }
];

const ServicesPreview = () => {
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.3], ['30px', '0px']);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <motion.section
            id="services-preview"
            style={{ y, opacity }}
            className="py-24 bg-gradient-to-b from-muted/30 to-background relative"
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Soluções Completas para seu Negócio
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Do conceito ao deploy, cuidamos de cada detalhe do seu projeto digital
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
                    {services.map(({ icon: Icon, title, description, gradient, iconColor }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full p-8 bg-card border rounded-2xl shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    <motion.div
                                        className={`w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Icon className={`${iconColor} w-7 h-7`} />
                                    </motion.div>
                                    
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {description}
                                    </p>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        onClick={() => navigate('/services')}
                        className="group"
                    >
                        Ver Todos os Serviços
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesPreview;
