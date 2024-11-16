import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const workData = {
  Tencent: [
    {
      company: "Tencent",
      role: "Software Engineer Intern",
      period: "June 2024 — Sep 2024",
      location: "Shenzhen, China",
      projects: [
        {
          title: "Video Data Platform Microservices with Spring Boot",
          description:
            "Designed and developped scalable video data platforms on the 0 to 1 stage",
          points: [
            "Used Spring Boot and MyBatis under Hexagonal Architecture (DDD)",
            "Persisted Kafka data into TDSQL, processed 2,000,000 rows in a single task, wrote results to downstream Kafka",
            "Provided 10+ RESTful APIs or tRPCs with Protobuf for front-end, cron jobs and other services",
            "Employed Java Streams, customized ThreadPool to propagate MDC for tracing",
            "Measured execution time using Spring AOP, scheduled tasks using Annotations, and improved efficiency by 50% with cache",
            "Conducted unit testing and integration testing using Mockito, performed disaster recovery drills",
            "Leveraged Tencent Cloud, including dynamic configuration with Config Service, CI/CD Tools for SDLC Automation, and Cloud Logging (ELK Stack)",
          ],
          technologies: [
            "Spring Boot",
            "Tencent Cloud",
            "DDD",
            "Kafka",
            "RPC",
            "ELK Stack",
          ],
        },
        {
          title: "LLM Agents",
          description:
            "Contributed to vdata LLM agents and implemented robust ETL pipelines",
          points: [
            "Implemented ETL pipelines using Spark Scala with Hive",
            "Added Elasticsearch, ClickHouse as data sources",
            "Supported fuzzy matching (Edit Distance) for multi-path recall",
          ],
          technologies: [
            "Spark",
            "Scala",
            "Elasticsearch",
            "ClickHouse",
            "Hive",
          ],
        },
      ],
    },
  ],
  "Caerulean AI": [
    {
      company: "Caerulean AI",
      role: "Fullstack Software Engineer Intern",
      period: "Jan 2024 — Mar 2024",
      location: "Remote, US",
      projects: [
        {
          title: "ML Task Platforms",
          description:
            "Built responsive UIs and backend apis for machine learning task managers",
          points: [
            "Collaborated with designers to convert Figma designs into webpages",
            "Developed with TypeScript, React under Next.js, utilizing Material UI and Tailwind CSS for styling",
            "Used Chart.js for data visualization, and Redux Toolkit for state management",
            "Leveraged Node.js and Express for server-side logic and Inversify for dependency injection",
            "Configured and integrated AWS services, like IAM, S3, SES, ECS",
          ],
          technologies: [
            "TypeScript",
            "React",
            "Next.js",
            "Material UI",
            "Tailwind CSS",
            "Node.js",
            "AWS",
          ],
        },
      ],
    },
  ],
  "Zhuyin Tech": [
    {
      company: "Zhuyin Tech",
      role: "C++ Developer Intern",
      period: "May 2023 – Aug 2023",
      location: "Shanghai, China",
      projects: [
        {
          title: "Trading Systems",
          description:
            "Develop Algorithmic Trading Systems in C++17 in a cross-functional team",
          points: [
            "Developed order management module, abstracted complex strategies into operators for flexible arrangement",
            "Leveraged multi-threading to handle real-time data",
            "Designed a thread-safe Timer with locks to manage tasks",
            "Integrated Socket Programming and RabbitMQ-C for efficient trading signal processing",
            "Designed desktop apps with Qt Framework to enhance the efficiency of trading strategy configuration by 30%",
          ],
          technologies: [
            "C++17",
            "Multi-threading",
            "Socket Programming",
            "RabbitMQ",
          ],
        },
      ],
    },
  ],
};

const WorkExperienceSection = () => {
  return (
    <div className="space-y-12">
      {Object.entries(workData).map(([category, experiences]) => (
        <div key={category} className="space-y-6">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="border-b">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-blue-600">
                      {experience.company}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-600">
                      {experience.role}
                    </CardDescription>
                  </div>
                  <div className="text-right text-gray-500">
                    <div className="font-medium">{experience.period}</div>
                    <div>{experience.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-8">
                {experience.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="space-y-4">
                    {/* Project Title and Description */}
                    <div className="space-y-2 border-l-4 border-blue-100 pl-4">
                      <h4 className="text-xl font-semibold text-gray-800">
                        {project.title}
                      </h4>
                      <p className="text-gray-600">{project.description}</p>
                    </div>

                    {/* Key Achievements */}
                    <ul className="list-disc pl-6 space-y-2">
                      {project.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-600">
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Used */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceSection;
