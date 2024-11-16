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
  Menu,
  X,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "about", title: "About", icon: User, component: <AboutSection /> },
    {
      id: "education",
      title: "Education",
      icon: Book,
      component: <EducationSection />,
    },
    {
      id: "experience",
      title: "Experience",
      icon: Briefcase,
      component: <WorkExperienceSection />,
    },
    { id: "skills", title: "Skills", icon: Code, component: <SkillsSection /> },
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

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const contactInfo = [
    { icon: <MapPin className="h-4 w-4" />, text: "New York City, NY" },
    { icon: <Phone className="h-4 w-4" />, text: "(+1) 551-247-1611" },
    { icon: <Mail className="h-4 w-4" />, text: "gswang14@gmail.com" },
    {
      icon: <Linkedin className="h-4 w-4" />,
      text: "LinkedIn",
      link: "https://linkedin.com/in/guanshi-wang-a316a3249",
    },
    {
      icon: <Github className="h-4 w-4" />,
      text: "Github",
      link: "https://github.com/oyster14",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden">
        <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold text-gray-900">Guanshi Wang</h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed top-[73px] left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* Mobile Contact Info */}
              <div className="space-y-2 pb-4 border-b border-gray-200">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {item.icon}
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-600">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Navigation */}
              {sections.map(({ id, title, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleSectionChange(id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left
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
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Desktop Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Guanshi Wang</h1>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <nav className="p-4">
            {sections.map(({ id, title, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleSectionChange(id)}
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

        {/* Desktop Main Content */}
        <main className="ml-64 flex-1">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Mobile Main Content */}
      <main className="lg:hidden pt-[73px] p-4">
        <div className="max-w-5xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default PortfolioLayout;
