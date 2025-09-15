import { Users, Eye, Briefcase } from "lucide-react";

const AboutSection = () => {
  const metrics = [
    {
      icon: Users,
      value: "20K+",
      label: "Visualizações",
      description: "@devgabriux & @gabspotter_br"
    },
    {
      icon: Eye,
      value: "50K+",
      label: "Engajamento",
      description: "Redes sociais"
    },
    {
      icon: Briefcase,
      value: "3",
      label: "Empresas",
      description: "Fundadas/Co-fundadas"
    }
  ];

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-text-primary mb-4">
            Sobre mim
          </h2>
          <div className="w-24 h-px bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-text-primary">
                Desenvolvedor, Empreendedor, Visionário
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                Sou Gabriel Mota, 21 anos, empreendedor cristão, com a missão de impactar vidas por meio da tecnologia, inovação e liberdade. 
                Já fundei duas empresas — SoftTech Inovations (tecnologia) e SpotterCarsBr (conteúdo automotivo) — e atualmente desenvolvo um Micro-SaaS de alto impacto (CurriculoIA).
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Minha jornada começou com códigos, mas hoje foco em criar experiências digitais completas que resolvem problemas reais e geram resultados concretos.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium text-text-primary">Valores & Missão</h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Inovação constante sem perder o foco no usuário</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Simplicidade extrema na resolução de problemas complexos</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Transparência e construção de relacionamentos duradouros</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="project-card text-center p-8"
                >
                  <Icon className="h-8 w-8 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-medium text-text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-medium text-text-secondary mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-text-muted">
                    {metric.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;