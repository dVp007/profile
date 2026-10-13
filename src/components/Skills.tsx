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

const SkillCard = ({ category }: { category: SkillCategory }) => {
  const Icon = category.icon;

  return (
    <div className="card-cyber rounded-xl overflow-hidden">
      <div
        className="p-6 space-y-4"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="flex items-center gap-4">
          <div
            className="p-3 rounded-lg border"
            style={{
              backgroundColor: `${category.accentColor}15`,
              borderColor: `${category.accentColor}40`,
            }}
          >
            <Icon className="h-6 w-6" style={{ color: category.accentColor }} />
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
              className="text-xs px-3 py-1.5 rounded border"
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
      accentColor: "#B74732",
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
      accentColor: "#356F52",
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
      accentColor: "#B74732",
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
      accentColor: "#356F52",
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
      accentColor: "#B74732",
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
      accentColor: "#356F52",
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
      accentColor: "#B74732",
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
      accentColor: "#356F52",
    },
    {
      title: "Version Control",
      description: "Source control & collaboration",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Semantic Versioning"],
      accentColor: "#B74732",
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
            <span className="text-glow-cyan text-[hsl(var(--neon-cyan))]">
              Skills
            </span>
            <span className="text-[hsl(var(--foreground))]"> & </span>
            <span className="text-[hsl(var(--neon-magenta))]">Expertise</span>
          </h2>

          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, backend systems, and cloud
            infrastructure — built over years of shipping production systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
