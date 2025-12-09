import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Zap, Database, Smartphone } from 'lucide-react';

const services = [
    {
        icon: Code,
        title: 'Desenvolvimento Web Moderno',
        description:
            'Criamos sites e aplicações web de alta performance com foco em UX e conversão.',
    },
    {
        icon: Zap,
        title: 'Automação Inteligente',
        description:
            'Integração de ferramentas e automações para ganho de eficiência operacional.',
    },
    {
        icon: Database,
        title: 'Backend e APIs',
        description: 'Desenvolvemos a espinha dorsal de suas aplicações com Node.js e Supabase, garantindo escalabilidade e segurança.',
    },
    {
        icon: Smartphone,
        title: 'Desenvolvimento Mobile',
        description: 'Construímos aplicativos para iOS e Android com React Native, oferecendo uma experiência nativa com um código-base unificado.',
    }


];

const ServicesPreview = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.3], ['30px', '0px']);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <motion.section
            id="services-preview"
            style={{ y, opacity }}
            className="py-16 bg-secondary/10"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Soluções para o seu Negócio
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map(({ icon: Icon, title, description }) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-card border rounded-lg shadow-sm hover:shadow-lg transition"
                        >
                            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded bg-primary/10">
                                <Icon className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{title}</h3>
                            <p className="text-muted-foreground">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ServicesPreview;
