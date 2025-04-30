
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden bg-secondary/50 border-secondary hover:border-primary/50 transition-all duration-300">
      <div className="h-48 bg-muted/20 overflow-hidden">
        <div className="p-6 flex items-center justify-center h-full code-bg">
          <div className="font-mono text-sm text-primary">{project.title} API</div>
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
          <Button variant="outline" size="icon">
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
      title: 'Microservice Architecture',
      description: 'A distributed system for high-volume data processing with event-driven communication',
      tags: ['Microservices', 'Kafka', 'Docker', 'Node.js', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/placeholder.svg',
    },
    {
      title: 'Data Pipeline API',
      description: 'ETL system for handling real-time data with efficient error recovery',
      tags: ['Python', 'Apache Airflow', 'PostgreSQL', 'Redis', 'AWS'],
      githubUrl: '#',
      image: '/placeholder.svg',
    },
    {
      title: 'Auth Service',
      description: 'Secure authentication system with OAuth2 integration and role-based access control',
      tags: ['TypeScript', 'ExpressJS', 'JWT', 'OAuth2', 'Redis'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/placeholder.svg',
    },
    {
      title: 'Event Scheduling Engine',
      description: 'Scalable system for managing and optimizing event-based workloads',
      tags: ['Go', 'RabbitMQ', 'Kubernetes', 'gRPC', 'Redis'],
      githubUrl: '#',
      image: '/placeholder.svg',
    },
    {
      title: 'GraphQL API Gateway',
      description: 'Unified GraphQL interface for multiple microservices with caching',
      tags: ['Node.js', 'GraphQL', 'Apollo', 'Redis', 'Docker'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/placeholder.svg',
    },
    {
      title: 'Monitoring Dashboard',
      description: 'Real-time system monitoring with alerts and visualization',
      tags: ['TypeScript', 'Prometheus', 'Grafana', 'WebSockets', 'React'],
      githubUrl: '#',
      image: '/placeholder.svg',
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
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
