import { useState } from "react";
import { Send, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gabriel.akgsof@gmail.com",
      href: "mailto:gabriel.akgsof@gmail.com"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, Brasil",
      href: null
    },
    {
      icon: Calendar,
      label: "Disponibilidade",
      value: "Seg - Sex, 9h-18h",
      href: null
    }
  ];

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-text-primary mb-4">
            Vamos conversar
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Tem um projeto em mente? Quer discutir uma parceria? Ou apenas bater um papo sobre tecnologia?
          </p>
          <div className="w-24 h-px bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-text-primary mb-6">
                Entre em contato
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Prefere um contato mais direto? Use as informações ao lado ou me encontre nas redes sociais. 
                Respondo todas as mensagens em até 24 horas.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-surface transition-colors">
                    <div className="flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted">{info.label}</div>
                      <div className="text-text-primary font-medium">{info.value}</div>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a 
                    key={index} 
                    href={info.href}
                    className="block hover:bg-surface transition-colors rounded-lg"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Quick quote */}
            <div className="p-6 bg-surface rounded-lg border-l-4 border-accent">
              <blockquote className="text-text-secondary italic">
                "A melhor maneira de prever o futuro é criá-lo."
              </blockquote>
              <cite className="block mt-2 text-sm text-text-muted">— Peter Drucker</cite>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="project-card">
              <h3 className="text-xl font-medium text-text-primary mb-6">
                Envie uma mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-input-border focus:border-input-focus"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border-input-border focus:border-input-focus"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-input border-input-border focus:border-input-focus resize-none"
                    placeholder="Conte-me sobre seu projeto, ideia ou apenas diga olá..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn-minimal group"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;