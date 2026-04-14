import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[hsl(var(--neon-cyan))]/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <img
                src={import.meta.env.PROD ? "/profile/logo.svg" : "/logo.svg"}
                alt="DP Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-lg font-bold font-['Orbitron'] text-[hsl(var(--neon-cyan))] tracking-wider">
                DHARMIL
              </span>
              <span className="text-[hsl(var(--muted-foreground))]"> | </span>
              <span className="text-sm text-[hsl(var(--muted-foreground))]">
                AI Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/dVp007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10 hover:border-[hsl(var(--neon-cyan))] transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/dharmil-parekh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10 hover:border-[hsl(var(--neon-cyan))] transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:dharmilp03@gmail.com"
              className="p-3 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10 hover:border-[hsl(var(--neon-cyan))] transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              <span className="text-[hsl(var(--neon-cyan))]">&lt;</span>
              <span className="font-['JetBrains_Mono']">
                Crafted with code & caffeine
              </span>
              <span className="text-[hsl(var(--neon-cyan))]"> /&gt;</span>
            </p>
            <p className="text-xs text-[hsl(var(--muted-foreground))]/60 mt-1 font-['JetBrains_Mono']">
              © {currentYear} Dharmil Parekh. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[hsl(var(--neon-cyan))]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[hsl(var(--muted-foreground))]/60">
            <div className="flex items-center gap-2 font-['JetBrains_Mono']">
              <Terminal className="h-3 w-3" />
              <span>Built with React + TypeScript + Tailwind</span>
            </div>
            <div className="flex items-center gap-4">
              <span>London, UK</span>
              <span className="w-1 h-1 rounded-full bg-[hsl(var(--neon-cyan))]" />
              <span>Open to remote work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
