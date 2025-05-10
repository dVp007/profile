import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      className="overflow-hidden bg-secondary/50 border-secondary hover:border-primary/50 transition-all duration-300"
      onClick={() => {}}
    >
      <div className="h-48 bg-muted/20 overflow-hidden">
        <div
          className={`p-6 flex items-center justify-center h-full ${
            !project.image ? "code-bg" : ""
          }`}
          style={
            project.image
              ? {
                  backgroundImage: `url(public/${project.image})`,
                  backgroundSize: "200px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50% 50%",
                }
              : {}
          }
        >
          {!project.image && (
            <div className="font-mono text-sm text-primary">
              {project.title}
            </div>
          )}
        </div>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-background/80">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.githubUrl && (
          <Button variant="outline" size="icon">
            <Github className="h-4 w-4" />
          </Button>
        )}
        {project.liveUrl && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              window.open(project.liveUrl, "_blank");
            }}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Akaschic Link",
      description:
        "A non-custodial custodian crypto gateway to our blockchain ecosystem",
      tags: [
        "Node.js",
        "Typescript",
        "Nestjs",
        "MongoDB",
        "Redis",
        "Blockchain",
        "Jest",
        "React",
        "Nextjs",
        "StoryBook",
        "Datadog",
        "Docker",
      ],
      liveUrl: "https://www.akashicwallet.com/en-US",
    },
    {
      title: "My Errand",
      description:
        "Delivery for businesses whether e-commerce or on the high street as and when needed!",
      tags: [
        "Node.js",
        "Typescript",
        "NestJs",
        "PostgresSql",
        "Redis",
        "AWS",
        "Terraform",
        "Jenkins",
      ],
      liveUrl: "https://www.myerrand.co.uk/",
    },
    {
      title: "Nakul",
      description: "Product listing and delivery platform.",
      tags: [
        "Node.js",
        "Typescript",
        "NestJs",
        "PostgresSql",
        "Redis",
        "AWS",
        "Terraform",
        "Jenkins",
        "Angular",
      ],
    },
    {
      title: "EAM (Enterprise Aseet Management)",
      description:
        "SaaS product for empowering global wealth managers to manage their private assets.",
      tags: ["Node.js", "LoopBack", "MySql", "Redis", "AWS", "jenkins"],
    },
    {
      title: "Nearlaw",
      description: "Smart Assistant for legal reasearch",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS",
        "Elasticsearch",
        "Angular",
      ],
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my backend engineering work and system design
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
