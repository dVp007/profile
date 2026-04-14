import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('light', initialTheme === 'light');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'skills', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const themeIcon = theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-[hsl(var(--neon-cyan))]/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative w-10 h-10">
              <img
                src={import.meta.env.PROD ? "/profile/logo.svg" : "/logo.svg"}
                alt="DP Logo"
                className="w-full h-full object-contain"
              />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 ${
                theme === 'dark' ? 'bg-[hsl(174,100%,50%)]' : 'bg-[hsl(174,100%,40%)]'
              }`} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider font-['Orbitron'] text-glow-cyan">
                DHARMIL
              </span>
              <span className="text-xs text-[hsl(var(--muted-foreground))] tracking-[0.3em]">
                PAREKH
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-[hsl(var(--neon-cyan))]'
                    : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-cyan))]'
                }`}
              >
                <span className="font-['Orbitron']">{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-magenta))] rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10 hover:border-[hsl(var(--neon-cyan))] transition-all duration-300`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {themeIcon}
            </button>

            <a
              href="https://github.com/dVp007"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10 hover:border-[hsl(var(--neon-cyan))] transition-all duration-300`}
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/dharmil-parekh/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10 hover:border-[hsl(var(--neon-cyan))] transition-all duration-300`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:dharmilp03@gmail.com"
              className={`p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10 hover:border-[hsl(var(--neon-cyan))] transition-all duration-300`}
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-cyber ml-2"
            >
              <Terminal className="h-4 w-4 mr-2" />
              <span className="text-xs">Hire Me</span>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-[hsl(var(--neon-cyan))]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[hsl(var(--neon-cyan))]/20 animate-fade-in">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-lg font-medium tracking-wider uppercase ${
                    activeSection === item.id
                      ? 'text-[hsl(var(--neon-cyan))]'
                      : 'text-[hsl(var(--muted-foreground))]'
                  }`}
                >
                  <span className="font-['Orbitron']">{item.label}</span>
                </button>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-[hsl(var(--neon-cyan))]/20">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))]`}
                >
                  {themeIcon}
                </button>
                <a
                  href="https://github.com/dVp007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))]`}
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/dharmil-parekh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))]`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:dharmilp03@gmail.com"
                  className={`p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))]`}
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
