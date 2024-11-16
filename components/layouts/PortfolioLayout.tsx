"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  User,
  Book,
  Briefcase,
  Code,
  Layout,
} from "lucide-react";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

interface PortfolioLayoutProps {
  children?: React.ReactNode;
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", title: "About", icon: User, component: <AboutSection /> },
    {
      id: "education",
      title: "Education",
      icon: Book,
      component: <EducationSection />,
    },
    { id: "skills", title: "Skills", icon: Code, component: <SkillsSection /> },
    {
      id: "experience",
      title: "Work Experience",
      icon: Briefcase,
      component: <WorkExperienceSection />,
    },
    {
      id: "projects",
      title: "Projects",
      icon: Layout,
      component: <ProjectsSection />,
    },
  ];

  const renderContent = () => {
    const section = sections.find((s) => s.id === activeSection);
    return section?.component;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Guanshi Wang</h1>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>New York City, NY</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(+1) 551-247-1611</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>gswang14@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a
                href="https://linkedin.com/in/guanshi-wang-a316a3249"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <a
                href="https://github.com/oyster14"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {sections.map(({ id, title, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left mb-2 transition-all duration-200
                ${
                  activeSection === id
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <Icon className="h-5 w-5" />
              <span>{title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <div className="max-w-5xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default PortfolioLayout;
