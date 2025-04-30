
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Server, Code, Lock, Cloud, Terminal, Layout, Globe } from 'lucide-react';

const SkillCard = ({ 
  title, 
  description, 
  icon: Icon, 
  skills 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  skills: string[] 
}) => {
  return (
    <Card className="bg-secondary/50 border-secondary hover:border-primary/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-primary/20 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="text-xs px-2.5 py-1 rounded-full bg-background/80 border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const skillSets = [
    {
      title: 'Languages',
      description: 'Programming languages I work with daily',
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'SQL']
    },
    {
      title: 'Databases',
      description: 'DB systems I design and optimize',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch']
    },
    {
      title: 'Backend Frameworks',
      description: 'Tools I use to build robust APIs',
      icon: Server,
      skills: ['Node.js', 'Express', 'NestJS', 'Django', 'Spring Boot']
    },
    {
      title: 'DevOps & Cloud',
      description: 'Infrastructure and deployment',
      icon: Cloud,
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform']
    },
    {
      title: 'Security',
      description: 'Ensuring system security',
      icon: Lock,
      skills: ['OAuth', 'JWT', 'HTTPS', 'Rate Limiting', 'Input Validation']
    },
    {
      title: 'Architecture',
      description: 'System design principles I follow',
      icon: Layout,
      skills: ['Microservices', 'Event-Driven', 'REST', 'GraphQL', 'gRPC']
    }
  ];

  return (
    <section id="skills" className="py-16 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My toolbox for building scalable and reliable backend systems
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillSets.map((skillSet) => (
            <SkillCard 
              key={skillSet.title}
              title={skillSet.title}
              description={skillSet.description}
              icon={skillSet.icon}
              skills={skillSet.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
