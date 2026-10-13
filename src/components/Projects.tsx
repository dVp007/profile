import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Terminal,
  Database,
  Server,
  Globe,
  Bot,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon?: React.ElementType;
  accentColor?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.icon || Terminal;
  const accentColor = project.accentColor || "hsl(174, 100%, 50%)";

  return (
    <div>
      <div
        className="relative h-full rounded-xl overflow-hidden border"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: `${accentColor}40`,
        }}
      >
        <div className="relative p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div
              className="p-3 rounded-lg border"
              style={{
                backgroundColor: `${accentColor}15`,
                borderColor: `${accentColor}40`,
              }}
            >
              <Icon className="h-6 w-6" style={{ color: accentColor }} />
            </div>

            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[hsl(var(--neon-cyan))]/30 text-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))]/10"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3
              className="text-xl font-bold font-['Orbitron'] tracking-wider mb-2"
              style={{ color: accentColor }}
            >
              {project.title}
            </h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.slice(0, 6).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded border"
                style={{
                  backgroundColor: `${accentColor}08`,
                  borderColor: `${accentColor}30`,
                  color: accentColor,
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 6 && (
              <span
                className="text-xs px-2 py-1 rounded border"
                style={{
                  backgroundColor: "hsl(var(--muted))",
                  borderColor: "hsl(var(--muted-foreground))/30",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                +{project.tags.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Akaschic Link",
      description:
        "Non-custodial crypto gateway powering blockchain ecosystem. Built scalable microservices handling millions of transactions with real-time monitoring.",
      tags: [
        "Node.js",
        "NestJS",
        "MongoDB",
        "Redis",
        "Blockchain",
        "React",
        "Next.js",
        "Docker",
        "Datadog",
        "TypeScript",
      ],
      githubUrl: undefined,
      liveUrl: "https://www.akashicwallet.com/en-US",
      icon: Server,
      accentColor: "#B74732",
    },
    {
      title: "My Errand",
      description:
        "Enterprise delivery platform for e-commerce and high-street businesses. Real-time tracking, route optimization, and multi-tenant architecture.",
      tags: [
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Terraform",
        "Jenkins",
        "TypeScript",
        "Real-time",
      ],
      liveUrl: "https://www.myerrand.co.uk/",
      icon: Globe,
      accentColor: "#356F52",
    },
    {
      title: "Nearlaw",
      description:
        "Smart legal research assistant powered by AI. Semantic search, document analysis, and intelligent case matching using advanced NLP.",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        "AWS",
        "Elasticsearch",
        "Angular",
        "NLP",
        "AI/ML",
      ],
      icon: Bot,
      accentColor: "#B74732",
    },
    {
      title: "EAM Platform",
      description:
        "SaaS wealth management system for global asset managers. Handles private assets, portfolio management, and regulatory compliance.",
      tags: [
        "Node.js",
        "LoopBack",
        "MySQL",
        "Redis",
        "AWS",
        "Jenkins",
        "Multi-tenancy",
      ],
      icon: Database,
      accentColor: "#356F52",
    },
    {
      title: "AI Research",
      description:
        "Personal experiments with LLMs, RAG systems, and agentic AI frameworks. Building autonomous agents for complex task orchestration.",
      tags: [
        "LangChain",
        "OpenAI",
        "Vector DBs",
        "Python",
        "FastAPI",
        "LangGraph",
        "Autonomous Agents",
      ],
      githubUrl: "https://github.com/dVp007",
      icon: Terminal,
      accentColor: "#B74732",
    },
    {
      title: "Distributed Systems",
      description:
        "Event-driven microservices with CQRS, saga patterns, and service mesh. High-throughput data pipelines at scale.",
      tags: [
        "Kafka",
        "gRPC",
        "Kubernetes",
        "Istio",
        "Prometheus",
        "GraphQL",
        "CQRS",
      ],
      icon: Server,
      accentColor: "#356F52",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-transparent to-[hsl(var(--background))] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--neon-magenta))]/30 bg-[hsl(var(--neon-magenta))]/5 mb-6">
            <Server className="h-4 w-4 text-[hsl(var(--neon-magenta))]" />
            <span className="text-sm text-[hsl(var(--neon-magenta))] font-medium tracking-wider uppercase">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-4">
            <span className="text-[hsl(var(--foreground))]">Production </span>
            <span className="text-[hsl(var(--neon-magenta))]">Projects</span>
          </h2>

          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Real-world systems handling millions of requests. From blockchain
            gateways to AI-powered legal research platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/dVp007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber inline-flex items-center gap-2 px-8 py-3 rounded-lg"
          >
            <Github className="h-4 w-4" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
