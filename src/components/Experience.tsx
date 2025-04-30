import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  return (
    <Card
      className="mb-6 overflow-hidden border-l-4 border-l-primary bg-secondary/50"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <CardTitle>{experience.role}</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              {experience.company}
            </CardDescription>
          </div>
          <Badge variant="outline" className="h-fit self-start">
            {experience.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-background/80">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      company: "Enterprise Tech Solutions",
      role: "Senior Backend Engineer",
      period: "2021 - Present",
      description:
        "Led the development of a high-throughput API gateway handling 5M+ requests daily. Implemented service mesh architecture and improved system reliability by 99.99%.",
      technologies: ["Go", "Kubernetes", "gRPC", "Prometheus", "PostgreSQL"],
    },
    {
      company: "Data Systems Inc",
      role: "Backend Developer",
      period: "2018 - 2021",
      description:
        "Designed and built a real-time data processing pipeline. Reduced data processing latency by 70% and implemented fault-tolerant architecture.",
      technologies: ["Node.js", "Kafka", "MongoDB", "Redis", "Docker"],
    },
    {
      company: "Tech Innovators",
      role: "Software Engineer",
      period: "2016 - 2018",
      description:
        "Worked on RESTful API development and database optimization. Implemented automated testing increasing code coverage by 40%.",
      technologies: ["Java", "Spring Boot", "MySQL", "JUnit", "Jenkins"],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-secondary/10 tree-pot">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in backend development
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
