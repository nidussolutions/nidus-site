
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';

const JobCard = ({ job, onOpen }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-card rounded-lg border border-border p-6 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-card-foreground mb-2">{job.title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            <span>{job.contract_type}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Remoto</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {job.description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Badge variant={job.status === 'published' ? 'default' : 'secondary'}>
          {job.status === 'published' ? 'Aberto' : 'Fechado'}
        </Badge>
        <Button
          variant="ghost"
          onClick={() => onOpen(job)}
          className="text-primary hover:text-primary hover:bg-primary/10"
        >
          Ver Detalhes
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

export default JobCard;
