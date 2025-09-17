import { ExternalLink, Star, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CompaniesSection = () => {
  const companies = [
    {
      name: "SoftTech Inovations",
      description: "Consultoria especializada em transformação digital e desenvolvimento de soluções corporativas.",
      status: "Ativa",
      type: "Empresa",
      highlight: "Fundador & CEO",
      metrics: "50+ projetos entregues",
      link: "#",
      icon: Zap,
      color: "text-accent"
    },
    {
      name: "SpotterCarsBr",
      description: "Plataforma digital para conectar entusiastas automotivos e facilitar a compra/venda de veículos.",
      status: "Ativa",
      type: "Startup",
      highlight: "Co-fundador & CTO",
      metrics: "1000+ usuários registrados",
      link: "#",
      icon: Star,
      color: "text-accent"
    },
    {
      name: "CurriculoIA",
      description: "SaaS inovador que utiliza IA para criar currículos profissionais otimizados automaticamente.",
      status: "Em desenvolvimento",
      type: "SaaS",
      highlight: "Criador & Lead Developer",
      metrics: "Lista de espera ativa",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSca3kw2hpHw6VDoDMkLJK446tMhIqZzyRHEwqOArjfeuaFa8g/viewform?usp=header",
      icon: Brain,
      color: "text-warning"
    }
  ];

  return (
    <section id="empresas" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-text-primary mb-4">
            Empresas & SaaS
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Projetos empresariais e produtos digitais que criei ao longo da jornada empreendedora.
          </p>
          <div className="w-24 h-px bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {companies.map((company, index) => {
            const Icon = company.icon;
            const isSpecial = company.name === "CurriculoIA";
            
            return (
              <article
                key={index}
                className={`project-card relative overflow-hidden ${
                  isSpecial ? "ring-2 ring-warning/20" : ""
                }`}
              >
                {isSpecial && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-warning/10 text-warning border-warning/20">
                      Em breve
                    </Badge>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-surface-muted ${company.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-text-primary mb-1">
                        {company.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant="outline" 
                          className="text-xs border-text-muted/30 text-text-muted"
                        >
                          {company.type}
                        </Badge>
                        <span className={`w-2 h-2 rounded-full ${
                          company.status === "Ativa" ? "bg-success" : "bg-warning"
                        }`}></span>
                        <span className="text-xs text-text-muted">{company.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {company.description}
                  </p>

                  {/* Role & Metrics */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-text-primary">
                        {company.highlight}
                      </span>
                    </div>
                    <div className="text-sm text-accent font-medium">
                      {company.metrics}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    {isSpecial ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-warning/30 text-warning hover:bg-warning/10"
                        asChild
                      >
                        <a href={company.link}>
                          Entrar na lista de espera
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full btn-ghost"
                        asChild
                      >
                        <a href={company.link}>
                          Saiba mais
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-card rounded-lg border border-card-border">
          <h3 className="text-2xl font-medium text-text-primary mb-4">
            Interessado em uma parceria?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos, investimentos ou parcerias estratégicas. 
            Vamos conversar sobre como podemos criar algo incrível juntos.
          </p>
          <Button
            className="btn-minimal"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Vamos conversar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;