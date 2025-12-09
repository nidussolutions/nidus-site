
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import ApplicationForm from '@/components/careers/ApplicationForm';
import JobDetails from '@/components/careers/JobDetails';
import JobCard from '@/components/careers/JobCard';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [view, setView] = useState('details'); // 'details' or 'form'
  const { toast } = useToast();

  const fetchJobs = useCallback(() => {
    setLoading(true);
    // Simulate fetching from localStorage
    setTimeout(() => {
        const storedJobs = JSON.parse(localStorage.getItem('nidus_jobs') || '[]');
        // Only show published jobs
        const publishedJobs = storedJobs.filter(job => job.status === 'published');
        setJobs(publishedJobs);
        setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleOpenChange = (open) => {
    setIsDialogOpen(open);
    if (!open) {
      setSelectedJob(null);
      setTimeout(() => setView('details'), 300); // Reset view after dialog closes
    }
  };
  
  const handleOpenDialog = (job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  }

  const handleFormSubmit = async (formData) => {
    if (!selectedJob) return;
    setFormLoading(true);

    // Simulate upload and submission
    setTimeout(() => {
        const applications = JSON.parse(localStorage.getItem('nidus_applications') || '[]');
        
        // Create a mock application entry
        const newApplication = {
            id: Date.now(),
            job_id: selectedJob.id,
            name: formData.name,
            email: formData.email,
            resume_url: '#', // No file upload in localstorage version
            status: 'Recebido',
            created_at: new Date().toISOString()
        };
        
        applications.push(newApplication);
        localStorage.setItem('nidus_applications', JSON.stringify(applications));

        toast({ title: "Candidatura Enviada com Sucesso!", description: `Obrigado por se candidatar para ${selectedJob.title}.` });
        handleOpenChange(false);
        setFormLoading(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const dialogContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <>
      <SEO
        title="Carreiras"
        description="Explore as oportunidades de carreira na Nidus e junte-se à nossa equipe dinâmica e inovadora de desenvolvimento digital."
        keywords="vagas de emprego, carreiras em tecnologia, desenvolvedor react, especialista em automação, nidus vagas"
      />

      <div className="pt-20 bg-background text-foreground overflow-hidden">
        <section className="py-20 sm:py-24 px-6 relative">
          <div className="absolute inset-0 bg-grid-pattern bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
          <motion.div
            className="max-w-4xl mx-auto text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tighter">
              Faça parte da nossa <span className="text-primary">Equipe</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Buscamos mentes brilhantes e apaixonadas por tecnologia para construir o futuro conosco. Explore nossas vagas abertas e encontre seu lugar na Nidus.
            </p>
          </motion.div>
        </section>

        <section className="py-20 bg-background/50 border-t border-border px-4">
          <div className="max-w-5xl mx-auto">
             <h2 className="text-3xl font-bold text-foreground mb-12 text-center tracking-tighter">Vagas em Aberto</h2>
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <Loader2 className="h-10 w-10 text-primary animate-spin" />
              </div>
            ) : jobs.length > 0 ? (
              <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
                <motion.div 
                  className="grid md:grid-cols-2 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} onOpen={handleOpenDialog} />
                  ))}
                </motion.div>
                <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-card border-border">
                  <AnimatePresence mode="wait">
                      <motion.div
                        key={view}
                        variants={dialogContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="w-full"
                      >
                      {view === 'details' && selectedJob && (
                          <JobDetails job={selectedJob} onApply={() => setView('form')} />
                      )}
                      {view === 'form' && selectedJob && (
                          <ApplicationForm 
                              job={selectedJob} 
                              onFormSubmit={handleFormSubmit} 
                              isLoading={formLoading}
                              onBack={() => setView('details')}
                          />
                      )}
                      </motion.div>
                  </AnimatePresence>
                </DialogContent>
              </Dialog>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center bg-card p-10 rounded-lg border border-dashed border-muted"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">Nenhuma Oportunidade no Momento</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Estamos sempre crescendo e novas vagas surgirão em breve. Fique de olho!
                </p>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
