"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";

const AboutSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "New York City, NY",
      link: null,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "(+1) 551-247-1611",
      link: null,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: "gswang14@gmail.com",
      link: "mailto:gswang14@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      text: "LinkedIn",
      link: "https://linkedin.com/in/guanshi-wang-a316a3249",
    },
    {
      icon: <Github className="h-5 w-5" />,
      text: "Github",
      link: "https://github.com/oyster14",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title & Status */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Guanshi Wang</h1>
        <p className="text-lg text-blue-600 font-medium">
          Seeking Software Engineer New Grad jobs | Ex SWE Intern @ Tencent |
          MSCS @ NYU Courant
        </p>
      </div>

      <Card className="bg-white">
        <CardContent className="pt-6">
          <div className="space-y-8">
            {/* Professional Summary */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4">
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I am a graduate student at NYU Courant, majoring in Computer
                  Science with a GPA of 3.92. This summer, I am working on the
                  Data Platforms team at Tencent, leveraging Java, Spring Boot,
                  Kafka, and RPC. In Fall 2023, I interned as a Full-Stack
                  Developer at Caerulean AI, utilizing TypeScript and React. The
                  Summer of 2023 saw me as a C++ Developer Intern at a fintech
                  startup, focusing on Trading Systems.
                </p>
                <p>
                  My proficiency spans a diverse array of programming languages
                  and tools including C/C++, Java, JavaScript, TypeScript,
                  Python, Scala, Elixir, MySQL, PostgreSQL, Git, Docker,
                  Kubernetes, OpenShift, AWS, and GCP. I have hands-on
                  experience with implementing consensus algorithms such as Raft
                  and have crafted a Dynamo-inspired weakly consistent, highly
                  available key-value store.
                </p>
                <p>
                  My familiarity with distributed computing components extends
                  to Hadoop, Spark, Presto, Kafka, and HBase, showcasing my deep
                  understanding of distributed systems. Leveraging Agile SDLC
                  and DevOps best practices, I excel in full-stack web
                  development.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4">
                Contact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-blue-600">{item.icon}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-600">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4">
                Key Focus Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Technical Expertise
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Distributed Systems & Cloud Computing</li>
                    <li>Full Stack Development</li>
                    <li>System Design & Architecture</li>
                    <li>Data Processing & ETL Pipelines</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Industry Knowledge
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Cloud-Native Applications</li>
                    <li>DevOps & CI/CD</li>
                    <li>Microservices Architecture</li>
                    <li>High-Performance Computing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSection;
