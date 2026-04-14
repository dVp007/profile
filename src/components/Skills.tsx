import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Server,
  Code,
  Lock,
  Cloud,
  Terminal,
  Layout,
  Globe,
  Bot,
  Brain,
  Cpu,
  Sparkles,
  GitBranch,
  Container,
  Network,
  Layers,
} from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  skills: string[];
  accentColor: string;
}

const SkillCard = ({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) => {
  const Icon = category.icon;

  return (
    <div
      className="animate-in card-cyber rounded-xl overflow-hidden group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6 space-y-4" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="flex items-center gap-4">
          <div
            className="p-3 rounded-lg border group-hover:scale-110 transition-transform duration-300"
            style={{
              backgroundColor: `${category.accentColor}15`,
              borderColor: `${category.accentColor}40`,
            }}
          >
            <Icon
              className="h-6 w-6 transition-all duration-300"
              style={{ color: category.accentColor }}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold font-['Orbitron'] tracking-wider">
              {category.title}
            </h3>
            <p className="text-xs text-[hsl(var(--muted-foreground))]">
              {category.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1.5 rounded border group-hover:translate-y-[-2px] transition-all duration-300"
              style={{
                backgroundColor: `${category.accentColor}08`,
                borderColor: `${category.accentColor}30`,
                color: category.accentColor,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "AI & Machine Learning",
      description: "Building intelligent systems",
      icon: Brain,
      skills: [
        "LangChain",
        "OpenAI API",
        "Vector Databases",
        "LangGraph",
        "RAG Systems",
        "Prompt Engineering",
        "Hugging Face",
        "PyTorch",
      ],
      accentColor: "hsl(330, 100%, 58%)",
    },
    {
      title: "Agentic AI",
      description: "Autonomous agent frameworks",
      icon: Bot,
      skills: [
        "Multi-Agent Systems",
        "Tool Use",
        "Memory Management",
        "Chain of Thought",
        "ReAct Pattern",
        "Autonomous Planning",
        "Task Decomposition",
        "Self-Reflection",
      ],
      accentColor: "hsl(120, 100%, 50%)",
    },
    {
      title: "Backend & APIs",
      description: "Scalable server architecture",
      icon: Server,
      skills: [
        "Node.js",
        "TypeScript",
        "NestJS",
        "Express",
        "REST APIs",
        "GraphQL",
        "gRPC",
        "WebSockets",
      ],
      accentColor: "hsl(217, 85%, 55%)",
    },
    {
      title: "Databases",
      description: "Data storage & retrieval",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "MySQL",
        "DynamoDB",
        "Faiss",
        "Pinecone",
      ],
      accentColor: "hsl(210, 100%, 50%)",
    },
    {
      title: "DevOps & Cloud",
      description: "Infrastructure & deployment",
      icon: Cloud,
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "CI/CD",
        "GitHub Actions",
        "EC2",
        "Lambda",
      ],
      accentColor: "hsl(45, 100%, 50%)",
    },
    {
      title: "System Design",
      description: "Architecture patterns",
      icon: Network,
      skills: [
        "Microservices",
        "Event-Driven",
        "CQRS",
        "Saga Pattern",
        "API Gateway",
        "Service Mesh",
        "CDN",
        "Load Balancing",
      ],
      accentColor: "hsl(280, 80%, 60%)",
    },
    {
      title: "Programming",
      description: "Languages & tools",
      icon: Code,
      skills: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Go",
        "SQL",
        "Bash",
        "Rust",
        "Java",
      ],
      accentColor: "hsl(265, 70%, 55%)",
    },
    {
      title: "AI Infrastructure",
      description: "MLOps & deployment",
      icon: Cpu,
      skills: [
        "LangServe",
        "FastAPI",
        "vLLM",
        "Ollama",
        "MLflow",
        "Ray",
        "Triton",
        "ONNX",
      ],
      accentColor: "hsl(330, 100%, 58%)",
    },
    {
      title: "Version Control",
      description: "Source control & collaboration",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Semantic Versioning"],
      accentColor: "hsl(20, 100%, 50%)",
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--background))] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--neon-cyan))]/30 bg-[hsl(var(--neon-cyan))]/5 mb-6">
            <Sparkles className="h-4 w-4 text-[hsl(var(--neon-cyan))]" />
            <span className="text-sm text-[hsl(var(--neon-cyan))] font-medium tracking-wider uppercase">
              Tech Arsenal
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-4">
            <span className="text-glow-cyan text-[hsl(var(--neon-cyan))]">Skills</span>
            <span className="text-[hsl(var(--foreground))]"> & </span>
            <span className="text-[hsl(var(--neon-magenta))]">Expertise</span>
          </h2>

          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, backend systems, and
            cloud infrastructure — built over years of shipping production
            systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-[hsl(var(--neon-cyan))]/20 bg-[var(--card-bg)] backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold font-['Orbitron'] text-[hsl(var(--neon-cyan))] mb-2">
                Current Focus Areas
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Deep diving into multi-modal AI, autonomous agents, and
                real-time ML inference
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="tag-ai">Generative AI</span>
              <span className="tag-cyber">RAG Systems</span>
              <span className="tag-ai">Agentic AI</span>
              <span className="tag-cyber">MLOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
