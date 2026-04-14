import { useState, useEffect } from 'react';
import { Terminal, Code, Cpu, Database, Cloud, Bot, Sparkles, Zap, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import DevTyping from './ui/dev-typing';

const Hero = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const commands = [
    '> Initializing neural core...',
    '> Loading AI models...',
    '> Connecting to distributed systems...',
    '> Neural link established...',
    '> System online.',
  ];

  useEffect(() => {
    if (currentLine < commands.length) {
      const timeout = setTimeout(() => {
        setTerminalLines((prev) => [...prev, commands[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, commands.length]);

  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 circuit-bg" />
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--neon-cyan))]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--neon-magenta))]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--neon-green))]/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--neon-cyan))]/30 bg-[hsl(var(--neon-cyan))]/5 animate-in stagger-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--neon-green))] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--neon-green))]"></span>
              </span>
              <span className="text-sm text-[hsl(var(--neon-cyan))] font-medium tracking-wider uppercase">
                Available for AI/ML Projects
              </span>
            </div>

            <div className="space-y-4 animate-in stagger-2">
              <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron']">
                <span className="text-[hsl(var(--foreground))]">Senior</span>
                <br />
                <span className="text-glow-cyan text-[hsl(var(--neon-cyan))] animate-text-glitch">
                  Full-Stack
                </span>
                <br />
                <span className="text-[hsl(var(--neon-magenta))]">& AI</span>
                <span className="text-[hsl(var(--foreground))]"> Engineer</span>
              </h1>
            </div>

            <div className="animate-in stagger-3">
              <div className="terminal-window max-w-xl">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 text-xs text-[hsl(var(--muted-foreground))]">dev@dp:~</span>
                </div>
                <div className="p-4 min-h-[120px]">
                  {terminalLines.map((line, index) => (
                    <div
                      key={index}
                      className={`text-sm mb-1 ${
                        line.includes('System online')
                          ? 'text-[hsl(var(--neon-green))] font-bold'
                          : 'text-[hsl(var(--neon-cyan))]'
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                  {currentLine < commands.length && (
                    <span className="typing-cursor" />
                  )}
                </div>
              </div>
            </div>

            <div className="animate-in stagger-4">
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6 max-w-xl">
                Building intelligent systems & agentic AI solutions. 
                Specializing in scalable backend architectures, LLM integration, 
                and autonomous agent frameworks.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 animate-in stagger-5">
              <Badge className="tag-cyber px-4 py-2">
                <Cpu className="h-3 w-3 mr-2" />
                AI/ML Systems
              </Badge>
              <Badge className="tag-ai px-4 py-2">
                <Bot className="h-3 w-3 mr-2" />
                Agentic AI
              </Badge>
              <Badge className="tag-cyber px-4 py-2">
                <Cloud className="h-3 w-3 mr-2" />
                Distributed Systems
              </Badge>
              <Badge className="tag-cyber px-4 py-2">
                <Zap className="h-3 w-3 mr-2" />
                Real-time
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 animate-in stagger-6">
              <button
                onClick={scrollToSkills}
                className="btn-cyber px-8 py-3 rounded-lg flex items-center gap-2"
              >
                <Code className="h-4 w-4" />
                <span>Explore Skills</span>
              </button>
              <a
                href="mailto:dharmilp03@gmail.com"
                className="btn-cyber btn-cyber-magenta px-8 py-3 rounded-lg flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4" />
                <span>Let's Collaborate</span>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in stagger-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-cyan))]/20 to-[hsl(var(--neon-magenta))]/20 rounded-3xl blur-2xl" />
              
              <div className="relative terminal-window animate-float">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 text-xs text-[hsl(var(--muted-foreground))]">ai_core.ts</span>
                </div>
                <div className="p-6 space-y-4 font-['JetBrains_Mono']">
                  <div className="text-[hsl(var(--neon-magenta))] text-sm">
                    <span className="text-[hsl(var(--muted-foreground))]">{'import '}</span>
                    {'{ Agent, NeuralCore }'}
                    <span className="text-[hsl(var(--muted-foreground))]">{' from '}</span>
                    <span className="text-[hsl(var(--neon-green))]">'@dp/ai-stack'</span>
                  </div>
                  
                  <div className="text-[hsl(var(--neon-cyan))] text-sm">
                    <span className="text-[hsl(var(--muted-foreground))]">const </span>
                    <span className="text-[hsl(var(--foreground))]">engineer</span>
                    <span className="text-[hsl(var(--muted-foreground))]"> = </span>
                    <span className="text-[hsl(var(--neon-magenta))]">new </span>
                    <span className="text-[hsl(var(--foreground))]">NeuralCore</span>
                    <span className="text-[hsl(var(--muted-foreground))]">{'({'}</span>
                  </div>
                  
                  <div className="pl-6 space-y-2 text-sm">
                    <div>
                      <span className="text-[hsl(var(--neon-cyan))]">name</span>
                      <span className="text-[hsl(var(--muted-foreground))]">: </span>
                      <span className="text-[hsl(var(--neon-green))]">"Dharmil"</span>
                      <span className="text-[hsl(var(--muted-foreground))]">,</span>
                    </div>
                    <div>
                      <span className="text-[hsl(var(--neon-cyan))]">expertise</span>
                      <span className="text-[hsl(var(--muted-foreground))]">: [</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-[hsl(var(--neon-green))]">"LLM Integration"</span>
                      <span className="text-[hsl(var(--muted-foreground))]">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-[hsl(var(--neon-green))]">"Agent Orchestration"</span>
                      <span className="text-[hsl(var(--muted-foreground))]">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-[hsl(var(--neon-green))]">"Distributed Systems"</span>
                    </div>
                    <div className="pl-4 text-[hsl(var(--muted-foreground))]">{']'}</div>
                  </div>
                  
                  <div className="text-[hsl(var(--muted-foreground))] text-sm">{'};'}</div>
                  
                  <div className="text-[hsl(var(--muted-foreground))] text-sm mt-4">
                    {'// '}
                    <span className="text-[hsl(var(--neon-green))] italic">
                      Ready to build the future
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 p-4 rounded-xl border border-[hsl(var(--neon-cyan))]/30 bg-[var(--card-bg)] backdrop-blur-sm animate-float"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
                <Bot className="h-8 w-8 text-[hsl(var(--neon-cyan))]" />
              </div>
              
              <div
                className="absolute -bottom-4 -left-4 p-4 rounded-xl border border-[hsl(var(--neon-magenta))]/30 bg-[var(--card-bg)] backdrop-blur-sm animate-float"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
                <Database className="h-8 w-8 text-[hsl(var(--neon-magenta))]" />
              </div>
              
              <div
                className="absolute top-1/2 -right-8 p-3 rounded-lg border border-[hsl(var(--neon-green))]/30 bg-[var(--card-bg)] backdrop-blur-sm animate-float"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
                <Sparkles className="h-6 w-6 text-[hsl(var(--neon-green))]" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToSkills}
            className="p-2 rounded-full border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10 transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
