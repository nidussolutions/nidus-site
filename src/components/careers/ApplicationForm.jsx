import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { 
  Loader2, UploadCloud, FileText, ChevronLeft, User, Mail
} from 'lucide-react';

const ApplicationForm = ({ job, onFormSubmit, isLoading, onBack }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const resumeFile = watch("resume");
  const resumeFileName = resumeFile && resumeFile.length > 0 ? resumeFile[0].name : null;

  return (
    <div className="flex flex-col max-h-[85vh]">
      <DialogHeader className="p-6 border-b">
        <div className="flex items-center mb-2">
            <Button variant="ghost" size="icon" onClick={onBack} className="mr-3 h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                Candidatar-se
            </DialogTitle>
        </div>
        <DialogDescription className="text-muted-foreground pl-11">
          Para a vaga de <span className="font-semibold text-nidus-purple">{job?.title}</span>
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(onFormSubmit)} className="flex-grow overflow-y-auto custom-scrollbar">
        <div className="p-6 space-y-6">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                <Input id="name" {...register("name", { required: "Seu nome é obrigatório" })} placeholder="Seu nome" className="pl-10 focus:border-nidus-purple" />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1.5">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
               <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                <Input id="email" type="email" {...register("email", { required: "Seu email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })} placeholder="seu.email@exemplo.com" className="pl-10 focus:border-nidus-purple"/>
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="resume">Currículo</Label>
              <div className="mt-2">
                  <label htmlFor="resume" className="relative flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-lg cursor-pointer bg-accent/50 hover:bg-accent transition-colors">
                      <div className="flex flex-col items-center justify-center text-center px-4">
                          {resumeFileName ? (
                              <>
                                  <FileText className="w-8 h-8 mb-3 text-nidus-purple" />
                                  <p className="mb-1 text-sm text-foreground font-semibold truncate max-w-full">{resumeFileName}</p>
                                  <p className="text-xs text-muted-foreground">Arquivo selecionado. Clique para trocar.</p>
                              </>
                          ) : (
                              <>
                                  <UploadCloud className="w-8 h-8 mb-3 text-muted-foreground" />
                                  <p className="mb-1 text-sm text-foreground"><span className="font-semibold">Clique para enviar</span> ou arraste e solte</p>
                                  <p className="text-xs text-muted-foreground/80">PDF, DOC, ou DOCX (MAX. 5MB)</p>
                              </>
                          )}
                      </div>
                      <Input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" 
                        {...register("resume", { 
                          required: "O currículo é obrigatório",
                          validate: {
                            isSupportedType: (files) => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(files[0]?.type) || "Apenas arquivos PDF, DOC, ou DOCX são permitidos",
                            maxSize: (files) => files[0]?.size <= 5242880 || "O arquivo deve ter no máximo 5MB",
                          }
                        })} 
                      />
                  </label>
              </div>
              {errors.resume && <p className="text-red-500 text-sm mt-1.5">{errors.resume.message}</p>}
            </div>
        </div>

        <DialogFooter className="p-6 bg-muted/50 border-t">
            <Button variant="outline" onClick={onBack}>Voltar</Button>
            <Button type="submit" disabled={isLoading} className="bg-nidus-purple hover:bg-nidus-purple/90 text-white">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Confirmar Candidatura'}
            </Button>
        </DialogFooter>
      </form>
    </div>
  );
};

export default ApplicationForm;