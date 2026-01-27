import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;

if (!formspreeId) {
  console.warn('Formspree ID is not set. Please configure VITE_FORMSPREE_FORM_ID in your .env file.');
}

const ContactForm = () => {
  const [state, handleSubmit] = useForm(formspreeId);

  if (!formspreeId) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-red-900/20 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-2">Configuration Required</h3>
        <p className="text-red-300">
          Please set up your Formspree ID in the <code className="bg-black/50 px-2 py-1 rounded">.env</code> file to enable the contact form.
        </p>
      </div>
    );
  }

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h3 className="text-2xl font-bold text-nidus-text-dark mb-4">Obrigado pelo contato!</h3>
        <p className="text-nidus-text-light">Sua mensagem foi enviada com sucesso. Retornaremos em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="sr-only">Nome *</label>
        <Input
          id="name"
          type="text"
          name="name"
          required
          className="text-nidus-text-dark placeholder:text-nidus-text-light"
          placeholder="Seu nome"
          aria-label="Seu nome"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email *</label>
        <Input
          id="email"
          type="email"
          name="email"
          required
          className="text-nidus-text-dark placeholder:text-nidus-text-light"
          placeholder="seu@email.com"
          aria-label="Seu email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div>
        <label htmlFor="company" className="sr-only">Empresa</label>
        <Input
          id="company"
          type="text"
          name="company"
          className="text-nidus-text-dark placeholder:text-nidus-text-light"
          placeholder="Nome da sua empresa"
          aria-label="Nome da sua empresa"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Mensagem *</label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          className="text-nidus-text-dark placeholder:text-nidus-text-light resize-none"
          placeholder="Conte-nos sobre seu projeto..."
          aria-label="Sua mensagem"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      {state.errors && state.errors.length > 0 && !state.errors.formErrors && (
        <div className="text-red-500 text-sm">Por favor, corrija os erros acima.</div>
      )}
      <ValidationError
        errors={state.errors}
        className="text-red-500 text-sm"
      />
      <Button
        type="submit"
        size="lg"
        className="w-full bg-nidus-purple hover:bg-opacity-90 text-nidus-white font-semibold"
        disabled={state.submitting}
      >
        {state.submitting ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <Send className="mr-2 h-5 w-5" />
        )}
        {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  );
}

export default ContactForm;