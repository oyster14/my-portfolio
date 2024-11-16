import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = {
    languages: {
      title: "Languages",
      items: [
        "C/C++",
        "Java",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Elixir",
        "Scala",
        "Python",
        "Shell Scripting",
        "SQL",
      ],
    },
    frameworks: {
      title: "Frameworks",
      items: [
        "Spring Boot",
        "Spring Cloud",
        "gRPC",
        "React",
        "Redux",
        "Next.js",
        "Node.js",
        "Bootstrap",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    tools: {
      title: "Tools",
      items: [
        "AWS",
        "GCP",
        "Git",
        "Docker",
        "K8s",
        "Ansible",
        "NoSQL",
        "Postman",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Kafka",
      ],
    },
    distributed: {
      title: "Distributed Computing",
      items: [
        "Hadoop",
        "Spark",
        "Presto(Trino)",
        "HDFS",
        "ZooKeeper",
        "HBase",
        "Hive",
        "YARN",
      ],
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(skills).map(([category, { title, items }]) => (
        <Card
          key={category}
          className="hover:shadow-lg transition-all duration-300"
        >
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1.5 text-base font-medium 
                    bg-blue-50 text-blue-800 
                    hover:bg-blue-100 
                    transition-all duration-200 
                    transform hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsSection;
