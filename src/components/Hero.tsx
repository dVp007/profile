
import React from 'react';
import { Terminal, Server, Database, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 animate-in" style={{ animationDelay: '0.2s' }}>
          <Badge className="mb-4">Available for hire</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Back<span className="text-primary">End</span> Developer
          </h1>
          <div className="mb-6 max-w-xl">
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Building robust systems and scalable architecture with modern technologies
            </p>
            <p className="terminal-text text-sm md:text-base w-full md:w-[450px] h-6 overflow-hidden">
              const developer = new BackendEngineer("Your Name");
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Server className="h-3.5 w-3.5" /> Node.js
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Database className="h-3.5 w-3.5" /> SQL
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Terminal className="h-3.5 w-3.5" /> Go
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Code className="h-3.5 w-3.5" /> TypeScript
            </Badge>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/10 rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-primary/30 shadow-lg animate-float">
                <Terminal className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="absolute top-1/4 -right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-primary/20 shadow-md animate-float" style={{ animationDelay: '1s' }}>
              <Server className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute bottom-1/4 -left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-primary/20 shadow-md animate-float" style={{ animationDelay: '2s' }}>
              <Database className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
