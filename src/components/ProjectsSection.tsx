import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com dashboard administrativo, sistema de pagamentos e gestão de estoque.",
      type: "profissional",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      metrics: "15% aumento conversão",
      demo: "#",
      code: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description: "Aplicação de gestão de projetos com colaboração em tempo real, integração com APIs externas.",
      type: "pessoal",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      metrics: "500+ usuários ativos",
      demo: "#",
      code: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Ferramenta de geração de conteúdo usando IA, com templates personalizáveis e exportação múltipla.",
      type: "profissional",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
      metrics: "10K+ conteúdos gerados",
      demo: "#",
      code: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Crypto Portfolio Tracker",
      description: "Dashboard para acompanhamento de investimentos em criptomoedas com análises e alertas automáticos.",
      type: "pessoal",
      technologies: ["React", "Python", "FastAPI", "Redis"],
      metrics: "Real-time tracking",
      demo: "#",
      code: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "LMS completo para educação online com vídeo streaming, quizzes interativos e certificados.",
      type: "profissional",
      technologies: ["Angular", "NestJS", "MySQL", "AWS"],
      metrics: "2000+ estudantes",
      demo: "#",
      code: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Dashboard de analytics para redes sociais com insights de engajamento e relatórios automatizados.",
      type: "pessoal",
      technologies: ["Svelte", "Python", "Django", "Celery"],
      metrics: "Multi-platform insights",
      demo: "#",
      code: "#",
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredProjects = filter === "todos" 
    ? projects 
    : projects.filter(project => project.type === filter);

  const filters = [
    { key: "todos", label: "Todos" },
    { key: "profissional", label: "Profissionais" },
    { key: "pessoal", label: "Pessoais" }
  ];

  return (
    <section id="projetos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-text-primary mb-4">
            Projetos & Portfólio
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais relevantes, do código às soluções completas.
          </p>
          <div className="w-24 h-px bg-accent mx-auto mt-6"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.key}
              variant={filter === filterOption.key ? "default" : "ghost"}
              onClick={() => setFilter(filterOption.key)}
              className={`${
                filter === filterOption.key 
                  ? "bg-accent text-accent-foreground" 
                  : "btn-ghost"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filterOption.label}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card group"
            >
              {/* Project image placeholder */}
              <div className="aspect-video bg-surface-muted rounded-lg mb-6 flex items-center justify-center">
                <span className="text-text-muted text-sm">Preview em breve</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-medium text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      project.type === 'profissional' 
                        ? 'border-accent/30 text-accent' 
                        : 'border-text-muted/30 text-text-muted'
                    }`}
                  >
                    {project.type}
                  </Badge>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-surface-muted text-text-muted text-xs rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="text-sm font-medium text-accent">
                  {project.metrics}
                </div>

                {/* Links */}
                <div className="flex space-x-3 pt-2">
                  <a
                    href={project.demo}
                    className="inline-flex items-center text-sm text-text-secondary hover:text-text-primary transition-colors"
                    aria-label={`Ver demo do projeto ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.code}
                    className="inline-flex items-center text-sm text-text-secondary hover:text-text-primary transition-colors"
                    aria-label={`Ver código do projeto ${project.title}`}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;