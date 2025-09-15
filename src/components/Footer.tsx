import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/gabrielmota",
      icon: Github,
      label: "Projetos no GitHub"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/gabrielmota",
      icon: Linkedin,
      label: "Perfil profissional"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/gabrielmota",
      icon: Instagram,
      label: "Conteúdo sobre tech"
    },
    {
      name: "Email",
      href: "mailto:gabriel@softtech.com",
      icon: Mail,
      label: "Contato direto"
    }
  ];

  return (
    <footer className="bg-surface border-t border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-medium text-text-primary mb-2">
              Gabriel Mota
            </h3>
            <p className="text-text-muted text-sm">
              Desenvolvedor & Empreendedor
            </p>
          </div>

          {/* Quote */}
          <div className="text-center">
            <blockquote className="text-sm text-text-secondary italic">
              "Só existe uma profissão: Vendedor."
            </blockquote>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-muted hover:text-text-primary transition-colors duration-200 rounded-lg hover:bg-surface-muted"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-text-muted">
              © {currentYear} Gabriel Mota. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-text-muted">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>e muito café</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;