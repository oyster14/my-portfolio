"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectsData = {
  "Distributed Systems": [
    {
      title:
        "A Dynamo-style Weakly Consistent Highly Available Key-Value Store",
      period: "Mar 2024 – May 2024",
      description:
        "Built a leaderless, decentralized KV store with concurrent programming and Actor Model in Elixir",
      points: [
        "Implemented sharding and load balancing using Consistent Hashing",
        "Configured Quorum consensus, achieved read repairs and exactly-once guarantee with Vector Clocks",
        "Used Merkle Trees for anti-entropy repairs",
        "Propagated membership changes and enabled fault detection through a Gossip Protocol",
      ],
      technologies: [
        "Elixir",
        "Decentralized KV Store",
        "Consistent Hashing",
        "Quorum consensus",
        "Gossip Protocol",
      ],
    },
    {
      title:
        "Replicated State Machine in Elixir Using Raft Consensus Algorithm",
      period: "Feb 2024 – Mar 2024",
      description:
        "Implemented log replication and leader election for linearizability and fault tolerance",
      technologies: ["Elixir", "Raft", "Consensus"],
    },
  ],
  "C++/OS/GPU": [
    {
      title: "Custom Operating System Simulations in C/C++",
      period: "Jan 2023 – May 2023",
      description: "Implemented key components of an operating system",
      points: [
        "Developed a Linker to resolved external symbol references and module relative addressing, assigned global addresses, and maintained symbol table",
        "Designed a Scheduler incorporating FCFS, Round-robin, Priority-based, and Preemptive-prio policies using Discrete Event Simulation",
        "Implemented a Virtual Memory Manager for multiple processes, utilizing various page replacement algorithms such as FIFO, Clock, NRU, Aging, Working Set",
      ],
      technologies: [
        "Linker",
        "Process Scheduling",
        "Virtual Memory Manager",
        "Disk Scheduling",
      ],
    },
    {
      title: "Five-stage Pipelined RISC-V Simulations with C/C++",
      period: "Jan 2023 – May 2023",
      description:
        "Developed cycle-accurate simulators for both a single-stage RISC-V processor and a five-stage pipelined RISC-V processor",
      points: [
        "Ensured compliance with byte-addressable, big-endian format",
        "Implemented RAW Hazard using both forwarding and stalling techniques",
        "Managed Control Flow Hazards by not taking branches",
        "Generated cycle-by-cycle states of the register file, and memory state",
      ],
      technologies: ["Five-stage Pipeline", "RISC-V"],
    },
  ],
  DevOps: [
    {
      title: "E-Commerce Cloud-native Microservices in Python and Flask",
      period: "Sep 2023 – Dec 2023",
      description:
        "Built and deployed a scalable cloud-native e-commerce platform with a strong focus on DevOps practices",
      points: [
        "Worked in an Agile team of 5, adhering to Scrum Sprint Cycles using ZenHub Kanban board",
        "Designed a management interface using Bootstrap as framework, jQuery for content updates, and AJAX for async request",
        "Implemented RESTful backend for CRUD, queries and actions in Flask, connected to PostgreSQL with SQLAlchemy as the ORM",
        "Documentated with Swagger and Flask-RESTX",
        "Constructed Docker images, orchestrated containers using Google Kubernetes Engine",
        "Automated DevOps pipelines with GitHub Actions for CI, and Tekton for CD",
        "Followed TDD practices with Pytest to achieve a 95% coverage, and created a BDD framework using Behave and Selenium",
      ],
      technologies: [
        "Agile",
        "RESTful",
        "Docker",
        "Google Kubernetes Engine",
        "GitHub Actions",
        "TDD",
        "BDD",
      ],
    },
  ],
  GenAI: [
    {
      title: "LLM-Based Annotator for Cultural Memes in Movie Dialogues",
      period: "Aug 2024 – May 2024",
      description:
        "Developed an LLM application to automatically annotate complex cultural memes in movie dialogues",
      points: [
        "Deployed the model with TensorRT-LLM on Triton Inference Server, integrated API logic",
        "Enhanced accuracy through prompt engineering",
        "Built a video playback frontend using React and JavaScript",
      ],
      technologies: ["LLM", "TensorRT-LLM", "Prompt Engineering"],
    },
  ],
  "Big Data": [
    {
      title: "Cell Tower Count and Location Prediction in Apache Spark",
      period: "Oct 2023 – Dec 2023",
      description:
        "Implemented an ETL pipeline on terabytes of cell tower data in Spark",
      points: [
        "Addressed slow queries from complex SQL joins by building spatial indexes and partitions",
        "Achieved load balancing through repartitioning",
        "Enhanced overall performance with horizontal sharding and pre-aggregation, ultimately reducing processing times by 80%",
      ],
      technologies: ["Spark", "Hadoop", "ETL", "Pre-aggregation"],
    },
  ],
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(projectsData)[0]
  );

  return (
    <div className="space-y-8">
      {/* Category Navigation */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {Object.keys(projectsData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 
              ${
                selectedCategory === category
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      <div className="grid gap-6">
        {projectsData[selectedCategory as keyof typeof projectsData].map(
          (project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start border-l-4 border-blue-500 pl-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {project.title}
                    </CardTitle>
                    {project.description && (
                      <CardDescription className="text-base text-gray-600">
                        {project.description}
                      </CardDescription>
                    )}
                  </div>
                  <span className="text-gray-500 font-medium whitespace-nowrap ml-4">
                    {project.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.points && (
                  <div className="pl-6 space-y-2">
                    {project.points.map((point, idx) => (
                      <div key={idx} className="flex gap-3 text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-50 hover:bg-blue-100 transition-colors px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
