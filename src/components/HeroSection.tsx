import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import avatarImage from "@/assets/gabriel-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-16">{/* Added pt-16 for nav spacing */}
      
      <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-up">
        {/* Avatar */}
        <div className="mb-8">
          <img
            src={avatarImage}
            alt="Gabriel Mota - Desenvolvedor Full-Stack e Empreendedor"
            className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-card-border shadow-medium"
          />
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-text-primary">
            Gabriel Mota
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary font-light">
            Desenvolvedor | Empreendedor | Visionário
          </p>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto py-8">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-text-primary">
            "Só existe uma profissão no mundo:{" "}
            <span className="font-medium text-accent">Vendedor</span>.
            <br />
            Eu vendo ideias, soluções e experiências que transformam."
          </blockquote>
          <cite className="block mt-4 text-text-muted text-lg">— Gabriel Mota</cite>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="btn-minimal group"
            onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Veja meus projetos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="btn-ghost"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entre em contato
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 pt-8">
          <a
            href="https://github.com/gabrielmota"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="GitHub de Gabriel Mota"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/gabrielmota"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="LinkedIn de Gabriel Mota"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com/gabrielmota"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
            aria-label="Instagram de Gabriel Mota"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-muted rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;