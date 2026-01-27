import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiSupabase, SiPython, SiDocker, SiFigma } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB', description: 'Interfaces modernas' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', description: 'Backend robusto' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: 'Código seguro' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', description: 'Design system' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', description: 'Database & Auth' },
  { name: 'Python', icon: SiPython, color: '#3776AB', description: 'Automação' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', description: 'Deploy otimizado' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', description: 'Design & UX' },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tecnologias de Ponta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilizamos as ferramentas mais modernas e confiáveis do mercado para garantir a melhor qualidade
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-card border rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon
                      className="w-full h-full"
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                  
                  <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>

                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-3xl mx-auto">
            E muito mais... Nossa stack é constantemente atualizada com as melhores práticas e ferramentas do mercado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
