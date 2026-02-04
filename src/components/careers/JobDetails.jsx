import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Briefcase, MapPin, DollarSign, CheckCircle, ListChecks } from 'lucide-react';

const JobDetails = ({ job, onApply }) => {
  return (
    <div className="flex flex-col max-h-[85vh]">
      <DialogHeader className="p-6 border-b">
        <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">{job.title}</DialogTitle>
        <DialogDescription className="flex items-center gap-6 pt-2 text-muted-foreground">
          <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.contract_type}</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Remoto</span>
          {job.salary && <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> {job.salary}</span>}
        </DialogDescription>
      </DialogHeader>

      <div className="flex-grow p-6 space-y-6 overflow-y-auto custom-scrollbar">
        <div>
          <h3 className="font-semibold text-lg mb-3 text-foreground">Descrição da Vaga</h3>
          <p className="text-muted-foreground whitespace-pre-wrap">{job.description}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3 text-foreground flex items-center"><ListChecks className="w-5 h-5 mr-2 text-primary"/> Responsabilidades</h3>
          <ul className="space-y-2">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-4 h-4 mt-1 mr-2 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3 text-foreground flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-primary"/> Requisitos</h3>
          <ul className="space-y-2">
            {job.requirements.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-4 h-4 mt-1 mr-2 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <DialogFooter className="p-6 bg-muted/50 border-t">
        <Button onClick={onApply} className="bg-primary hover:bg-primary/90 text-white">
          Candidatar-se Agora
        </Button>
      </DialogFooter>
    </div>
  );
};

export default JobDetails;